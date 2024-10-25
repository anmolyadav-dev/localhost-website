import React from "react";

import NewTeamCard from "@/app/components/NewTeamCard";

export default function Card() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center justify-center  h-full pb-10 pt-[130px] px-10 bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
            <NewTeamCard
                name="Anmol Yadav"
                github="anmolyadav-dev"
                linkedin="anmolyadav-dev"
                image="/images/team/2027/anmol.jpg"
                contact="~anmolyadav.dev"
                className="h-full"
            />
            <NewTeamCard
                name="Anomitra"
                github="anomitroid"
                image="/images/team/2027/ano.jpg"
                className="h-full"
            />
            <NewTeamCard
                name="Shivansh Kandpal"
                linkedin="shivansh-kandpal-503a2325b"
                github="zyphon12342"
                className="h-full"
            />
            <NewTeamCard
                name="Piyush Kulkarni"
                github="piyushk6626"
                linkedin="piyush-kulkarni-ai"
                image="/images/team/2027/kulkarni.jpg"
                className="h-full"
            />
            <NewTeamCard
                name="Siddhant Ganesh"
                github="sdntgnsh"
                linkedin="siddhant-ganesh-senthil-kumar-911060246"
                image="/images/team/2027/siddhant.png"
                className="h-full"
            />
            <NewTeamCard
                name="Luv Kansal"
                github=""
                linkedin="luv-kansal-3a4a372b1"
                image="/images/team/2027/luv.jpeg"
                className="h-full"
            />
            <NewTeamCard
                name="Khushi Garg"
                github=""
                linkedin="luv-kansal-3a4a372b1"
                image="/images/team/2027/khushi.jpg"
                className="h-full"
            />
        </div>
    );
}
