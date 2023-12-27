import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="bg-bg-star min-h-screen bg-left lg:bg-center text-center">
      <h2 className="font-[mine] text-5xl text-white pt-32 pb-10 px-10">
        <span className="text-[#4DFFDB]">CORE</span> MEMBERS
      </h2>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <TeamCard name="Vineet Agarwal" github="Github" linkedin="LinkedIn" />
          <TeamCard
            name="Kanishk Bhansode"
            github="Github"
            linkedin="LinkedIn"
          />
          <TeamCard name="Prakhar Singh" github="Github" linkedin="LinkedIn" />
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <TeamCard name="Ashmit Jagtap" github="Github" linkedin="LinkedIn" />
          <TeamCard name="Shubham Asati" github="Github" linkedin="LinkedIn" />
          <TeamCard name="Anshul Kumar" github="Github" linkedin="LinkedIn" />
          <TeamCard name="Manas Agarwal" github="Github" linkedin="LinkedIn" />
          <TeamCard name="Jai Somani" github="Github" linkedin="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default Team;
