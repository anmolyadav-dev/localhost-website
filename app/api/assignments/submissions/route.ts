import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../dbConfig/dbConfig";
import Assignment from "../../models/Assignment";
import User from "../../models/userModel";
import Activity from "../../models/ActivityModel";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

// GET: Fetch user's assignment submissions
export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const assignmentNumber = searchParams.get("assignmentNumber");

    const query: any = { userId };
    if (status) query.status = status;
    if (assignmentNumber) query.assignmentNumber = parseInt(assignmentNumber);

    const submissions = await Assignment.find(query).sort({ submittedAt: -1 });

    return NextResponse.json({
      message: "Submissions fetched successfully",
      data: submissions,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST: Submit new assignment
export async function POST(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const body = await request.json();
    const { assignmentNumber, githubLink, title, description, files } = body;

    if (!assignmentNumber || !githubLink) {
      return NextResponse.json(
        { error: "Assignment number and GitHub link are required" },
        { status: 400 }
      );
    }

    // Check if already submitted
    const existingSubmission = await Assignment.findOne({
      userId,
      assignmentNumber,
    });

    if (existingSubmission) {
      return NextResponse.json(
        {
          error:
            "Assignment already submitted. Please update the existing submission.",
        },
        { status: 400 }
      );
    }

    const newSubmission = await Assignment.create({
      userId,
      username: user.username,
      assignmentNumber,
      githubLink,
      title,
      description,
      files: files || [],
      status: "submitted",
    });

    // Update user stats
    await User.findByIdAndUpdate(userId, {
      $inc: { assignmentsCompleted: 1 },
    });

    // Create activity
    await Activity.create({
      userId,
      username: user.username,
      type: "assignment_submitted",
      title: `Submitted Assignment ${assignmentNumber}`,
      description:
        title || `Assignment ${assignmentNumber} submitted for review`,
      metadata: {
        assignmentId: newSubmission._id,
        assignmentNumber,
      },
    });

    return NextResponse.json(
      {
        message: "Assignment submitted successfully",
        data: newSubmission,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
