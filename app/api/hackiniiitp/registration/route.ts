import { connect } from "../../dbConfig/dbConfig";
import Team, { ITeam } from "../../models/teamModel"; // Assuming you have a Team model
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({
    message: "This is Team Registration Route",
    status: 200,
  });
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const reqBody: ITeam = await req.json();

    // Check if team name already exists
    const existingTeam = await Team.findOne({ teamName: reqBody.teamName });
    if (existingTeam) {
      return NextResponse.json(
        {
          error: "Team name already exists",
        },
        {
          status: 400,
        }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(reqBody.password, salt);

    // Save the team
    const newTeam = new Team({
      teamName: reqBody.teamName,
      teamLeader: reqBody.teamLeader,
      theme: reqBody.theme,
      password: hashedPassword,
      teamMembers: reqBody.teamMembers,
    });
    await newTeam.save();

    return NextResponse.json({
      message: "Team registered successfully",
      status: 200,
    });
  } catch (error: any) {
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
