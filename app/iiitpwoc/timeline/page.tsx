import React from "react";
import Timeline from "../components/Timeline";

const page = () => {
  return (
    <div className="bg-black bg-cover min-h-screen bg-left lg:bg-center flex flex-col justify-center items-center text-white gap-10 pb-10">
      <h1 className="text-7xl font-NIKOLETA mt-32">TimeLine</h1>
      <Timeline />
    </div>
  );
};

export default page;
