"use client";
import Image from "next/image";
import React from "react";

const Leaderboard = ({ users }: any) => {
  // Sort users by score
  const sortedUsers = users.sort((a: any, b: any) => b.score - a.score);

  return (
    <div className="bg-black bg-opacity-90 p-6 rounded-lg shadow-md relative">
      <h2 className="text-3xl font-bold mb-4 text-center text-white">
        Leaderboard
      </h2>
      <div className="flex gap-4 items-center justify-center">
        {/* Second place */}
        <div className="relative flex items-center justify-center text-white font-medium text-lg border-2 border-gray-500 transition-transform duration-300 hover:filter hover:contrast-110 active:contrast-90 rounded-lg shadow-md bg-gray-500 bg-opacity-20 h-60 w-60 text-center">
          <div className="absolute inset-0 border-2 border-gray-500 rounded-lg animate-clippath"></div>
          <div className="p-6">
            <div className="flex ">
              <Image
                src="/images/medal2.png"
                alt="1stPlace"
                width={75}
                height={5}
                className="h-10 w-10"
              />
              <h3 className="text-3xl font-mono font-semibold mb-2 text-white">
                2nd Place
              </h3>
            </div>
            <p className="text-4xl py-2 text-white">{sortedUsers[1]?.name}</p>
            <p className="text-2xl font-mono text-white">
              Score: {sortedUsers[1]?.score}
            </p>
          </div>
        </div>

        {/* First place */}
        <div className="relative flex items-center justify-center text-white font-medium text-lg border-2 border-yellow-500 transition-transform duration-300 hover:filter hover:contrast-110 active:contrast-90 rounded-lg shadow-md bg-yellow-500 bg-opacity-20 h-72 w-72 text-center">
          <div className="absolute inset-0 border-2 border-yellow-500 rounded-lg animate-clippath "></div>
          <div className="p-6">
            <div className="flex">
              <Image
                src="/images/medal1.png"
                alt="1stPlace"
                width={75}
                height={5}
                className="h-10 w-10"
              />
              <h3 className="text-3xl font-mono font-semibold mb-2 text-white">
                1st Place
              </h3>
            </div>
            <p className="text-7xl py-2 text-white">{sortedUsers[0]?.name}</p>
            <p className="text-2xl font-mono text-white">
              Score: {sortedUsers[0]?.score}
            </p>
          </div>
        </div>

        {/* Third place */}
        <div className="relative flex items-center justify-center text-white font-medium text-lg border-2 border-orange-800 transition-transform duration-300 hover:filter hover:contrast-110 active:contrast-90 rounded-lg shadow-md bg-orange-800 bg-opacity-20 h-60 w-60 text-center">
          <div className="absolute inset-0 border-2 border-orange-800 rounded-lg animate-clippath"></div>
          <div className="p-6">
            <div className="flex">
              <Image
                src="/images/medal3.png"
                alt="1stPlace"
                width={75}
                height={5}
                className="h-10 w-10"
              />
              <h3 className="text-3xl font-mono font-semibold mb-2 text-white">
                3rd Place
              </h3>
            </div>
            <p className="text-4xl py-2 text-white">{sortedUsers[2]?.name}</p>
            <p className="text-2xl font-mono text-white">
              Score: {sortedUsers[2]?.score}
            </p>
          </div>
        </div>
      </div>

      {/* Rest of the users */}
      <div className="mt-8 mx-2 lg:mx-28 text-center">
        <table className="w-full rounded-lg shadow-md">
          <thead>
            <tr className="">
              <th className="px-6 py-3 text-white">Rank</th>
              <th className="px-6 py-3 text-white">Team Name</th>
              <th className="px-6 py-3 text-white">Score</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.slice(3).map((user: any, index: any) => (
              <tr
                key={user.id}
                className={
                  index % 2 === 0
                    ? "bg-white bg-opacity-10"
                    : "bg-white bg-opacity-5"
                }
              >
                <td className="px-6 py-4 text-white">{index + 4}</td>
                <td className="px-6 py-4 text-white">{user.name}</td>
                <td className="px-6 py-4 text-white">{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
