import { connect } from "../../dbConfig/dbConfig";
import User from "../../models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({
    message: "This is Signup Route",
    status: 200,
  });
}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const reqbody = await req.json();
        // console.log(reqbody);

        // Check if user already exists
        const existingUser = await User.findOne({ email: reqbody.email });
        if (existingUser) {
            return NextResponse.json(
                {
                    error: "User already exists",
                },
                {
                    status: 400,
                }
            );
        }

        // Hash the password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(reqbody.password, salt);


        // Save the user with the hashed password
        const newUser = new User({
            username: reqbody.username,
            email: reqbody.email,
            password: hashedPassword,
        });
        await newUser.save();

        return NextResponse.json({
            message: "User created successfully",
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
