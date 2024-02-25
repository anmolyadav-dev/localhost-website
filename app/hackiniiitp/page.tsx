"use client";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center flex flex-col justify-center items-center">
      <h2 className="font-[mine] text-4xl lg:text-6xl text-white  px-10">
        HACK
        <span className="text-[#4DFFDB]">IN</span> IIITP
      </h2>
      <p className="text-white text-lg lg:text-xl mt-4 px-20 text-center">
        Welcome to HackINIIITP - a 36-hour intra-college hackathon at IIIT Pune.
        <br/>
        Join us for an exciting coding marathon where you can showcase your
        creativity, innovation, and technical skills.
      </p>
      <div className="mt-8">
        <p className="text-white text-lg lg:text-xl">
          Duration: 36 Hours
        </p>
        <p className="text-white text-lg lg:text-xl">
          Prize Pool: ₹15,000
        </p>
      </div>
      <a
        href="/hackiniiitp/register"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mt-8 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Register Now
      </a>
    </div>
  );
};

export default Home;
