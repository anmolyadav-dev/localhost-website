import React from "react";
import NewTeamCard from "@/app/components/NewTeamCard";

function page() {
    return (
        <div className="flex flex-wrap justify-center gap-16 h-full pb-7 pt-[130px] px-7 bg-bg-star bg-cover min-h-screen bg-left lg:bg-center w-full">
            <NewTeamCard
                name="Ashmit Jagtap"
                github="ashmit-coder"
                linkedin="ashmit-jagtap-544587270/"
                image="/images/team/2026/ashmit.jpg"
                className="h-[420px] w-[250px]"
            />
            <NewTeamCard
                name="Anshul Kumar"
                github="Anshulk2004"
                linkedin="anshul-kumar-627001250"
                image="/images/team/2026/anshul.jpg"
                className="h-[420px] w-[250px]"
            />
            <NewTeamCard
                name="Shubham Asati"
                github="ShubhamAsati-123"
                linkedin="shubham-asati-054ba124b"
                image="/images/team/2026/shubham.jpg"
                className="h-[420px] w-[250px]"
            />

            <NewTeamCard
                name="Manas Agarwal"
                github="manasagar"
                linkedin="manas-agarwal-a13623256/"
                image="/images/team/2026/anshul.jpg"
                className="h-[420px] w-[250px]"
            />
            <NewTeamCard
                name="Tushar Hirekhan"
                github="tshrrx"
                linkedin="tushar-hirekhan-b71a10258/"
                image="/images/team/2026/tushar.jpg"
                className="h-[420px] w-[250px]"
            />
            <NewTeamCard
                name="Jai Somani"
                github="jaisomani04"
                linkedin="jaisomani04"
                image="/images/team/2026/jai.jpg"
                className="h-[420px] w-[250px]"
            />
        </div>
    );
}

export default page;
