"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const params = useParams<{ teamName: string }>();
  const [teamDetails, setTeamDetails] = useState<any>({});

  useEffect(() => {
    const fetchTeamDetails = async () => {
      try {
        const response = await axios.post("/api/hackiniiitp/details", {
          teamName: params.teamName,
        });

        setTeamDetails(response.data.teamDetails);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeamDetails();
  }, [params.teamName]);

  return (
    <div className="bg-bg-star bg-cover min-h-screen py-8 px-4 lg:px-16">
      <div className="max-w-4xl mx-auto mt-28">
        <h1 className="text-white text-3xl font-bold mb-8">
          Team Details: {params.teamName}
        </h1>

        {teamDetails && teamDetails.team && teamDetails.project && (
          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl text-white font-semibold mb-2">
                Team Leader
              </h2>
              <p className="text-gray-300">{teamDetails.team.teamLeader}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl text-white font-semibold mb-2">Theme</h2>
              <p className="text-gray-300">{teamDetails.team.theme}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl text-white font-semibold mb-2">
                Project Description
              </h2>
              <p className="text-gray-300 ">
                {teamDetails.project.description}
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl text-white font-semibold mb-2">
                GitHub Link
              </h2>
              <p className="text-gray-300 w-full">
                <a
                  href={teamDetails.project.githubLink}
                  target="_blank"
                  className="text-blue-400 hover:text-blue-500"
                >
                  {teamDetails.project.githubLink}
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-xl text-white font-semibold mb-2">
                Drive Link
              </h2>
              <p className="text-gray-300 w-full">
                <a
                  href={teamDetails.project.driveLink}
                  target="_blank"
                  className="text-blue-400 hover:text-blue-500"
                >
                  {teamDetails.project.driveLink}
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
