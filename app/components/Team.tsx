import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="bg-bg-star min-h-screen bg-left lg:bg-center text-center">
      <h2 className="font-[mine] text-5xl text-white pt-32 pb-10 px-10">
        <span className="text-[#4DFFDB]">CORE</span> MEMBERS
      </h2>
      <div className="flex flex-col gap-10 px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <TeamCard name="Vinit Agarwal" github="Github" linkedin="LinkedIn" />
          <TeamCard
            name="Ishan Upadhyay"
            github="Github"
            linkedin="LinkedIn"
          />
          <TeamCard
            name="Kanishka Bansode"
            github="Github"
            linkedin="LinkedIn"
          />
          <TeamCard name="Prakhar Singh" github="Github" linkedin="LinkedIn" />
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <TeamCard
            name="Ashmit Jagtap"
            github="https://github.com/ashmit-coder"
            linkedin="https://www.linkedin.com/in/ashmit-jagtap-544587270"
          />
          <TeamCard
            name="Shubham Asati"
            github="https://github.com/ShubhamAsati-123"
            linkedin="https://www.linkedin.com/in/shubham-asati-054ba124b/"
          />
          <TeamCard
            name="Anshul Kumar"
            github="https://github.com/Anshulk2004"
            linkedin="https://www.linkedin.com/in/anshul-kumar-627001250/"
          />
          <TeamCard
            name="Manas Agarwal"
            github="https://github.com/manasagar"
            linkedin="https://www.linkedin.com/in/manas-agarwal-a13623256/"
          />
          <TeamCard
            name="Jai Somani"
            github="https://github.com/jaisomani04"
            linkedin="http://www.linkedin.com/in/jaisomani04"
          />
          <TeamCard
          name="Tushar Sharma"
          github="https://github.com/tshrrx"
          linkedin="https://www.linkedin.com/in/tushar-hirekhan-b71a10258/"
        />
        </div>
      </div>
    </div>
  );
};

export default Team;
