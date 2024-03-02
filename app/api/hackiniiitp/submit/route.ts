import { connect } from "../../dbConfig/dbConfig";
import Project from "../../models/projectModel"; // Assuming you have a Project model
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "../../helpers/getDataFromToken";
import User from "../../models/userModel"; // Assuming you have a User model

connect(); // Establish database connection

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({
    message: "This is Project Submit Route", 
    status: 200,
  });
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // Extract user ID from the token
    const userId = await getDataFromToken(req);

    // Parse request body as JSON and extract project details
    const { teamName, description, githubLink, driveLink } = await req.json();

    // Create a new Project instance
    const newProject = new Project({
      teamName,
      description,
      githubLink,
      driveLink,
    });

    // Save the project to the database
    await newProject.save();

    // Send a success response
    return NextResponse.json(
      {
        message: "Project submitted successfully",
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
