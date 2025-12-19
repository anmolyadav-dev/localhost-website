import React from "react";
import NewTeamCard from "@/app/components/NewTeamCard";

function page() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 h-full pb-12 pt-32 px-7 bg-bg-star bg-cover min-h-screen bg-left lg:bg-center w-full">
        <NewTeamCard
          name="Ashmit Jagtap"
          github="ashmit-coder"
          linkedin="ashmit-jagtap-544587270/"
          image="/images/team/2026/ashmit.jpg"
          role="Core Team"
          batch="2026"
          className="h-[420px] w-[280px]"
        />
        <NewTeamCard
          name="Anshul Kumar"
          github="Anshulk2004"
          linkedin="anshul-kumar-627001250"
          image="/images/team/2026/Anshul.jpg"
          role="Core Team"
          batch="2026"
          className="h-[420px] w-[280px]"
        />
        <NewTeamCard
          name="Shubham Asati"
          github="ShubhamAsati-123"
          linkedin="shubham-asati-054ba124b"
          image="/images/team/2026/shubham.jpg"
          role="Core Team"
          batch="2026"
          className="h-[420px] w-[280px]"
        />

        <NewTeamCard
          name="Manas Agarwal"
          github="manasagar"
          linkedin="manas-agarwal-a13623256/"
          image="/images/team/2026/manas.jpg"
          role="Core Team"
          batch="2026"
          className="h-[420px] w-[280px]"
        />
        <NewTeamCard
          name="Tushar Hirekhan"
          github="tshrrx"
          linkedin="tushar-hirekhan-b71a10258/"
          image="/images/team/2026/Tushar.jpg"
          role="Core Team"
          batch="2026"
          className="h-[420px] w-[280px]"
        />
        <NewTeamCard
          name="Jai Somani"
          github="jaisomani04"
          linkedin="jaisomani04"
          image="/images/team/2026/jai.jpg"
          role="Core Team"
          batch="2026"
          className="h-[420px] w-[280px]"
        />
      </div>
    </>
  );
}

export default page;
