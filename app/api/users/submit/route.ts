import { connect } from "../../dbConfig/dbConfig";
import Assignment from "../../models/Assignment";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "../../helpers/getDataFromToken";
import User from "../../models/userModel";

connect(); // Establish database connection

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({
    message: "This is Assignment Submit Route",
    status: 200,
  });
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const userId = await getDataFromToken(req);
    const user = await User.findOne({ _id: userId }).select("-password");
    const username = user.username;
    const { assignmentNumber, githubLink } = await req.json(); // Parse request body as JSON and access assignment details

    // Create a new Assignment instance
    const newAssignment = new Assignment({
        userId,
        username,
        assignmentNumber,
        githubLink,
    });

    // Save the assignment to the database
    await newAssignment.save();

    // Send a success response
    return NextResponse.json(
      {
        message: "Assignment submitted successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    // Handle errors and send an error response
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
