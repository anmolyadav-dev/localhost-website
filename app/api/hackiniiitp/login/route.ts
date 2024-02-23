import { connect } from "../../dbConfig/dbConfig";
import Team from "../../models/teamModel"; // Assuming you have a Team model
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({
    message: "This is Login Route",
    status: 200,
  });
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json();

    // Find the team by team name
    const team = await Team.findOne({ teamName: reqBody.teamName });
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

    // Check if the provided password matches the hashed password
    const isPasswordValid = await bcryptjs.compare(
      reqBody.password,
      team.password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          error: "Invalid password",
        },
        {
          status: 401,
        }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { teamId: team._id, teamName: team.teamName },
      process.env.TOKEN_SECRET!,
      {
        expiresIn: "1d",
      }
    );

    const response = NextResponse.json({
      message: "Login Successful",
      success: true,
    });
    // Set the token in the response header
    response.headers.set("Set-Cookie", `token=${token}; HttpOnly`);

    return response;
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
