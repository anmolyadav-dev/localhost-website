import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../dbConfig/dbConfig";
import User from "../../models/userModel";
import Assignment from "../../models/Assignment";
import Activity from "../../models/ActivityModel";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

// GET: Fetch user statistics
export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findById(userId).select(
      "projectsCompleted eventsAttended assignmentsCompleted badges"
    );

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Get assignment stats
    const assignments = await Assignment.find({ userId }).select(
      "status grade submittedAt"
    );

    const assignmentStats = {
      total: assignments.length,
      submitted: assignments.filter((a) => a.status === "submitted").length,
      grading: assignments.filter((a) => a.status === "grading").length,
      graded: assignments.filter((a) => a.status === "graded").length,
      averageGrade:
        assignments.length > 0
          ? assignments.reduce((sum, a) => sum + (a.grade || 0), 0) /
            assignments.filter((a) => a.grade !== undefined).length
          : 0,
    };

    // Get recent activities
    const recentActivities = await Activity.find({ userId })
      .sort({ createdAt: -1 })
      .limit(10);

    return NextResponse.json({
      message: "Stats fetched successfully",
      data: {
        projects: user.projectsCompleted,
        events: user.eventsAttended,
        assignments: user.assignmentsCompleted,
        badges: user.badges,
        assignmentStats,
        recentActivities,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
