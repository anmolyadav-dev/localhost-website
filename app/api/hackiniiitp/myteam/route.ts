import { connect } from "../../dbConfig/dbConfig";
import Team from "../../models/teamModel";
import { getDataFromToken } from "../../helpers/getDataFromToken";


import { NextResponse, NextRequest } from "next/server";

connect();

export async function GET(req: NextRequest) {
  try {
    // const token = req.cookies.get("token");
    const userId = await getDataFromToken(req);
    const user = await Team.findOne({ _id: userId }).select("-password");
    return NextResponse.json({
      message: "User Found",
      data: user,
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
