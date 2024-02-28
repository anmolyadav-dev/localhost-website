"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { ITeam } from "../../api/models/teamModel";

const TeamList = () => {
  const [teams, setTeams] = useState<ITeam[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const result = await axios.get("/api/hackiniiitp/teams");
        setTeams(result.data.teams);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };
    fetchTeams();
  }, []);

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center p-8">
      <h1 className="text-white text-3xl font-bold mb-4 pt-20">Teams</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-white">S.No.</th>
              <th className="px-4 py-2 text-white">Team Name</th>
              <th className="px-4 py-2 text-white">Team Leader</th>
              <th className="px-4 py-2 text-white">Theme</th>
              <th className="px-4 py-2 text-white">Members</th>
              <th className="px-4 py-2 text-white">Project</th>{" "}
              {/* Project buttons column */}
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr
                key={team.teamName}
                className="bg-white bg-opacity-10 rounded-lg mb-4 text-white text-center"
              >
                <td className="px-4 py-2">{index + 1}</td> {/* Serial number */}
                <td className="px-4 py-2">{team.teamName}</td>
                <td className="px-4 py-2">{team.teamLeader}</td>
                <td className="px-4 py-2">{team.theme}</td>
                <td className="px-4 py-2">
                  {team.teamMembers.map((member) => (
                    <div key={member.name}>{member.name}</div>
                  ))}
                </td>
                <td className="px-4 py-2">
                  <a href={`/hackiniiitp/projects/`}>
                    {" "}
                    {/* Dynamic project route TO BE ADDED ASAP*/}
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg disabled:bg-blue-700"
                      disabled
                    >
                      View Project
                    </button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamList;
