import { connect } from "../../dbConfig/dbConfig";

import { NextRequest, NextResponse } from "next/server";
import Team, { ITeam } from "../../models/teamModel"; // Assuming you have a Team model
import { refreshData ,fetchData } from "../../helpers/CacheFunctions";

connect();
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // Fetch all teams from the database, excluding the password field
    let teams:ITeam[] | null ;
    teams = await fetchData();

    if(!teams){
     teams = await Team.find({},{password:0,_id:0,"teamMembers._id":0,"teamMembers.email":0});
     refreshData(teams);
    }

    // Return the list of teams in the response
    return NextResponse.json({
      teams,
      message: "Teams data retrieved successfully",
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
