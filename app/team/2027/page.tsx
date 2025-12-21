import React from "react";

import NewTeamCard from "@/app/components/NewTeamCard";

export default function Card() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 h-full pb-12 pt-32 px-7 bg-bg-star bg-cover min-h-screen bg-left lg:bg-center w-full">
        <NewTeamCard
          name="Anmol Yadav"
          github="anmolyadav-dev"
          linkedin="anmolyadav-dev"
          image="/images/team/2027/anmol.jpg"
          contact="~anmolyadav.dev"
          role="Core Team"
          batch="2027"
          className="h-[420px] w-[280px]"
        />
        <NewTeamCard
          name="Anomitra"
          github="anomitroid"
          image="/images/team/2027/ano.jpg"
          role="Core Team"
          batch="2027"
          className="h-[420px] w-[280px]"
        />
        <NewTeamCard
          name="Shivansh Kandpal"
          linkedin="shivansh-kandpal-503a2325b"
          image="/images/team/2027/shivansh.jpeg"
          github="zyphon12342"
          role="Core Team"
          batch="2027"
          className="h-[420px] w-[280px]"
        />
        <NewTeamCard
          name="Piyush Kulkarni"
          github="piyushk6626"
          linkedin="piyush-kulkarni-ai"
          image="/images/team/2027/kulkarni.jpg"
          role="Core Team"
          batch="2027"
          className="h-[420px] w-[280px]"
        />
        <NewTeamCard
          name="Siddhant Ganesh"
          github="sdntgnsh"
          linkedin="siddhant-ganesh-senthil-kumar-911060246"
          image="/images/team/2027/siddhant.png"
          role="Core Team"
          batch="2027"
          className="h-[420px] w-[280px]"
        />
        <NewTeamCard
          name="Luv Kansal"
          linkedin="luv-kansal-3a4a372b1"
          image="/images/team/2027/luv.jpeg"
          role="Core Team"
          batch="2027"
          className="h-[420px] w-[280px]"
        />
      </div>
    </>
  );
}
