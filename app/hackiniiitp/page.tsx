"use client";
import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import GlitchText from "./components/GlitchText/Glitch";

const Home: NextPage = () => {
  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center flex flex-col justify-center items-center">
      <div className="text-white mt-32 text-center flex flex-col gap-4">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-white uppercase text-xl text-center">
            Sponsored by
          </h2>
          <Image
            src="/images/Sponsor.png"
            alt="Sponsors"
            width={200}
            height={200}
            className="my-2"
          />
        </div>
        <h1 className="my-4 text-4xl md:text-6xl">
          <GlitchText />
        </h1>
        <h2 className="text-white text-3xl md:text-4xl font-technopollas">
          Hack for the beginning
        </h2>
        <div className="text-3xl md:text-4xl font-NIKOLETA">
          <h3>36 Hours</h3>
          <h3>Online Hackathon</h3>
        </div>
        <div className="text-lg md:text-2xl font-technopollas">
          <p>with a</p>
          <h4 className="text-3xl md:text-4xl">Prize Pool</h4>
          <p>of</p>
          <h5 className="text-5xl md:text-7xl font-glitch my-2">
            <span className="text-xl md:text-3xl">RS</span>15,000
          </h5>
        </div>
        <div className="text-2xl md:text-4xl font-technopollas">
          <p>on</p>
          <h4>
            1st <span className="font-mono font-bold">-</span> 3rd 2024
          </h4>
        </div>
      </div>
      <a
        href="/hackiniiitp/register"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mt-8 transition duration-300 ease-in-out transform hover:scale-105 mb-4"
      >
        Register Now
      </a>
    </div>
  );
};

export default Home;
