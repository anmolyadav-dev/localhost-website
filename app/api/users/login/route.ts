import { connect } from "../../dbConfig/dbConfig";
import User from "../../models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

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

    // Find the user by email
    const user = await User.findOne({ email: reqBody.email });
    if (!user) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    // Check if the provided password matches the hashed password
    const isPasswordValid = await bcryptjs.compare(
      reqBody.password,
      user.password
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
    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
        message: "Login Successful",
        success: true
    })
    // response.cookies.set('token', token,{
    //     httpOnly: true
    // })
    cookies().set("token", token);

    return response

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
