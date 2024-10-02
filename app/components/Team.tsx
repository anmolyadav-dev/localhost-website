import TeamCard from "./TeamCard";

const Team = () => {
    return (
        <div className="bg-bg-star min-h-screen bg-left lg:bg-center text-center">
            <h2 className="font-minecraft text-5xl text-white pt-32 pb-10 px-10">
                <span className="text-greenblue">CORE</span> MEMBERS
            </h2>
            <div className="flex flex-col gap-10 px-5 lg:px-10">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                    <TeamCard name="Vinit Agarwal" />
                    <TeamCard name="Ishan Upadhyay" />
                    <TeamCard name="Kanishka Bansode" />
                    <TeamCard name="Prakhar Singh" />
                </div>
                <div className="flex flex-col flex-wrap lg:flex-row justify-center items-center gap-10">
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
                </div>
                <div className="flex flex-col flex-wrap lg:flex-row justify-center items-center gap-10">
                    <TeamCard
                        name="Manas Agarwal"
                        github="https://github.com/manasagar"
                        linkedin="https://www.linkedin.com/in/manas-agarwal-a13623256/"
                    />
                    <TeamCard
                        name="Tushar Hirekhan"
                        github="https://github.com/tshrrx"
                        linkedin="https://www.linkedin.com/in/tushar-hirekhan-b71a10258/"
                    />
                    <TeamCard
                        name="Jai Somani"
                        github="https://github.com/jaisomani04"
                        linkedin="http://www.linkedin.com/in/jaisomani04"
                    />
                </div>
                <div className="flex flex-col flex-wrap lg:flex-row justify-center items-center gap-10">
                    <TeamCard
                        name="Anmol Yadav"
                        github="https://github.com/anmolyadav-dev"
                        linkedin="https://www.linkedin.com/in/anmolyadav-dev/"
                    />
                    <TeamCard
                        name="Siddhant Ganesh"
                        github="https://github.com/sdntgnsh"
                        linkedin="https://www.linkedin.com/in/siddhant-ganesh-senthil-kumar-911060246/"
                    />
                    <TeamCard
                        name="Anomitra "
                        github="https://github.com/anomitroid"
                    />
                    <TeamCard
                        name="Shivansh Kandpal"
                        linkedin="http://www.linkedin.com/in/shivansh-kandpal-503a2325b/"
                        github="https://github.com/zyphon12342"
                    />
                </div>
                <div className="flex flex-col flex-wrap lg:flex-row justify-center items-center gap-10">
                    <TeamCard
                        name="Luv Kansal"
                        linkedin="https://www.linkedin.com/in/luv-kansal-3a4a372b1/"
                    />

                    <TeamCard
                        name="Khushi Garg"
                        linkedin="http://www.linkedin.com/in/khushi-garg-a7740728b/"
                    />
                    <TeamCard
                        name="Piyush Kulkarni"
                        github="https://github.com/piyushk6626"
                        linkedin="https://www.linkedin.com/in/piyush-kulkarni-ai/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Team;
