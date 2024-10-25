import React from "react";
import NewTeamCard from "@/app/components/NewTeamCard";

function page() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-16 h-full pb-7 pt-[130px] px-7 bg-bg-star bg-cover min-h-screen bg-left lg:bg-center w-full">
            <NewTeamCard
                name="Vinit Agarwal"
                linkedin="agarwalvinit5678/"
                image="/images/team/2025/vinit-agarwal.jpg"
                className="h-[420px] w-[250px]"
            />
            <NewTeamCard
                name="Kanishka Bansode"
                image="/images/team/2025/kanishka-bansode.jpg"
                className="h-[420px] w-[250px]"
            />
            <NewTeamCard
                name="Ishan Upadhyaya"
                image="/images/team/2025/ishan-upadhyaya.jpg"
                className="h-[420px] w-[250px]"
            />

            <NewTeamCard
                name="Prakhar Singh "
                image="/images/team/2025/prakhar-singh.jpg"
                className="h-[420px] w-[250px]"
            />
        </div>
    );
}

export default page;
