'use client'
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const TeamCard = ({ name, github, linkedin }: { name: string, github: string, linkedin: string }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.5}
      glareColor="#4DFFDB"
      glarePosition="all"
    >
      <div className="h-60 w-60 rounded-md bg-opacity-50 bg-white">
        <h1 className="font-[northwood] text-6xl font-semibold h-32 flex justify-center items-center">
          {name}
        </h1>

        <div className="font-[northwood] text-3xl h-28 flex justify-center items-center gap-10">
          <Link href={github}>
            <FaGithub size={50} />
          </Link>
          <Link href={linkedin}>
            <FaLinkedin size={50} />
          </Link>
        </div>
      </div>
    </Tilt>
  );
};

export default TeamCard;
