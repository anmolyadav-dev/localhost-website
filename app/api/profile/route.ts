import { NextRequest, NextResponse } from "next/server";
import { connect } from "../dbConfig/dbConfig";
import User from "../models/userModel";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

// GET: Fetch user profile
export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findById(userId).select(
      "-password -verifyToken -verifyTokenExpiry -forgotPassword -forgotPasswordExpiry"
    );

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Profile fetched successfully",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT: Update user profile
export async function PUT(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { bio, avatar, batch, skills, socialLinks } = body;

    // Fields allowed to be updated
    const updateData: any = {};
    if (bio !== undefined) updateData.bio = bio;
    if (avatar !== undefined) updateData.avatar = avatar;
    if (batch !== undefined) updateData.batch = batch;
    if (skills !== undefined) updateData.skills = skills;
    if (socialLinks !== undefined) updateData.socialLinks = socialLinks;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true, runValidators: true }
    ).select(
      "-password -verifyToken -verifyTokenExpiry -forgotPassword -forgotPasswordExpiry"
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Profile updated successfully",
      data: updatedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
