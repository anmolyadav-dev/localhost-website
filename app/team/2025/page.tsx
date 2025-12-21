import React from "react";
import NewTeamCard from "@/app/components/NewTeamCard";

function page() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 h-full pb-12 pt-32 px-7 bg-bg-star bg-cover min-h-screen bg-left lg:bg-center w-full">
        <NewTeamCard
          name="Vinit Agarwal"
          linkedin="agarwalvinit5678/"
          image="/images/team/2025/vinit-agarwal.jpg"
          role="Core Team"
          batch="2025"
          className="h-[420px] w-[280px]"
        />

        <NewTeamCard
          name="Kanishka Bansode"
          image="/images/team/2025/kanishka-bansode.jpg"
          role="Core Team"
          batch="2025"
          className="h-[420px] w-[280px]"
        />
        <NewTeamCard
          name="Ishan Upadhyaya"
          image="/images/team/2025/ishan-upadhyaya.jpg"
          role="Core Team"
          batch="2025"
          className="h-[420px] w-[280px]"
        />

        <NewTeamCard
          name="Prakhar Singh"
          image="/images/team/2025/prakhar-singh.jpg"
          role="Core Team"
          batch="2025"
          className="h-[420px] w-[280px]"
        />
      </div>
    </>
  );
}

export default page;
