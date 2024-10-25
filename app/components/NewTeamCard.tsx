"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";
interface TeamCardProps {
    name: string;
    image?: string;
    github?: string;
    linkedin?: string;
    className?: string;
    contact?: string;
}

function NewTeamCard(props: TeamCardProps) {
    const github = props.github;
    const linkedin = props.linkedin;

    if (!props.image) {
        props.image =
            "https://t4.ftcdn.net/jpg/07/88/67/21/360_F_788672190_maGwfDtey1ep9BqZsLO9f6LaUkIBMNt1.jpg";
    }

    const handleGithubClick = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        if (!github) {
            event.preventDefault();
            toast.error("Github Link Not Available");
        }
    };

    const handleLinkedinClick = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        if (!linkedin) {
            event.preventDefault();
            toast.error("LinkedIn Link Not Available");
        }
    };
    return (
        <>
            <div
                className={` bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${props.className} `}
            >
                <div className="align-center">
                    <div className="">
                        <img
                            className="p-8 rounded-t-lg "
                            src={props.image}
                            alt={props.name}
                        />
                    </div>
                    <div className="px-5 pb-5">
                        <a href="/" className="flex items-end justify-between">
                            <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {props.name}
                            </div>
                        </a>
                        {/* <div className="flex items-center justify-between text-white text-xs">
                        {props.job}
                    </div> */}
                        <div className="flex items-center justify-between text-white text-xs">
                            {props.contact}
                        </div>

                        <div className="flex items-center  mt-4 mb-5 gap-4">
                            <Link
                                href={
                                    github ? `https://github.com/${github}` : ""
                                }
                                target="_blank"
                                onClick={handleGithubClick}
                            >
                                <FaGithub size={50} color="white" />
                            </Link>

                            <Link
                                href={
                                    linkedin
                                        ? `https://linkedin.com/in/${linkedin}`
                                        : ""
                                }
                                target="_blank"
                                onClick={handleLinkedinClick}
                            >
                                <FaLinkedin size={50} color="white" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewTeamCard;
