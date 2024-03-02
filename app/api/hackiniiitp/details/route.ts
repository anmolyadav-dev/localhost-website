import { NextRequest, NextResponse } from "next/server";
import Team, { ITeam } from "../../models/teamModel";
import Project, { IProject } from "../../models/projectModel";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // Extract the team name from the request body
    const { teamName } = await req.json();

    if (!teamName) {
      return NextResponse.json(
        {
          error: "Team name is required",
        },
        {
          status: 400,
        }
      );
    }

    // Fetch the team from the database based on the team name
    const team: ITeam | null = await Team.findOne({ teamName });

    if (!team) {
      return NextResponse.json(
        {
          error: "Team not found",
        },
        {
          status: 404,
        }
      );
    }

    // Fetch the project associated with the team
    const project: IProject | null = await Project.findOne({ teamName });

    // Combine team and project details in the response
    const teamDetails = {
      team,
      project,
    };

    // Return the combined team and project details in the response
    return NextResponse.json({
      teamDetails,
      message: "Team and project details retrieved successfully",
      success: true,
    });
  } catch (error: any) {
    // Handle any errors that occur during the process
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
