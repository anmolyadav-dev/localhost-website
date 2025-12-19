import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../dbConfig/dbConfig";
import Assignment from "../../models/Assignment";
import User from "../../models/userModel";
import Activity from "../../models/ActivityModel";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

// GET: Fetch single assignment submission
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = await getDataFromToken(request);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const assignment = await Assignment.findById(params.id);

    if (!assignment) {
      return NextResponse.json(
        { error: "Assignment not found" },
        { status: 404 }
      );
    }

    // Check if user owns this assignment or is admin
    const user = await User.findById(userId);
    if (assignment.userId !== userId && !user?.isAdmin) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    return NextResponse.json({
      message: "Assignment fetched successfully",
      data: assignment,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT: Update assignment (for grading)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = await getDataFromToken(request);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findById(userId);
    if (!user?.isAdmin) {
      return NextResponse.json(
        { error: "Forbidden. Admin access required" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { status, grade, feedback } = body;

    const updateData: any = {};
    if (status) updateData.status = status;
    if (grade !== undefined) updateData.grade = grade;
    if (feedback !== undefined) updateData.feedback = feedback;
    if (status === "graded") {
      updateData.gradedAt = new Date();
      updateData.gradedBy = user.username;
    }

    const assignment = await Assignment.findByIdAndUpdate(
      params.id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!assignment) {
      return NextResponse.json(
        { error: "Assignment not found" },
        { status: 404 }
      );
    }

    // Create activity for graded assignment
    if (status === "graded") {
      await Activity.create({
        userId: assignment.userId,
        username: assignment.username,
        type: "assignment_submitted",
        title: `Assignment ${assignment.assignmentNumber} Graded`,
        description: `Your assignment has been graded. Score: ${grade}/100`,
        metadata: {
          assignmentId: assignment._id,
          grade,
        },
      });
    }

    return NextResponse.json({
      message: "Assignment updated successfully",
      data: assignment,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE: Delete assignment submission
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = await getDataFromToken(request);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const assignment = await Assignment.findById(params.id);

    if (!assignment) {
      return NextResponse.json(
        { error: "Assignment not found" },
        { status: 404 }
      );
    }

    // Check if user owns this assignment or is admin
    const user = await User.findById(userId);
    if (assignment.userId !== userId && !user?.isAdmin) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await Assignment.findByIdAndDelete(params.id);

    return NextResponse.json({
      message: "Assignment deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
