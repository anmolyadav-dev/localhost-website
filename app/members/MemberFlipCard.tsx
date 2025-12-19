"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export interface MemberFlipCardMember {
  id: string;
  name: string;
  role: string;
  batch: string;
  image: string;
  github?: string;
  linkedin?: string;
  contact?: string;
  about?: string;
}

function getGitHubUrl(github?: string) {
  if (!github) return undefined;
  // Accept either a handle ("octocat") or a full URL
  if (github.startsWith("http://") || github.startsWith("https://"))
    return github;
  return `https://github.com/${github}`;
}

function getLinkedInUrl(linkedin?: string) {
  if (!linkedin) return undefined;
  if (linkedin.startsWith("http://") || linkedin.startsWith("https://"))
    return linkedin;
  return `https://linkedin.com/in/${linkedin}`;
}

export default function MemberFlipCard({
  member,
}: {
  member: MemberFlipCardMember;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const githubUrl = getGitHubUrl(member.github);
  const linkedinUrl = getLinkedInUrl(member.linkedin);

  const aboutText = member.about?.trim();

  return (
    <div className="group relative h-[340px] rounded-xl border border-greenblue/30 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/10 [perspective:1100px]">
      <div
        className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] motion-reduce:transition-none ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        aria-label={`${member.name} member card`}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-between p-5 [backface-visibility:hidden] ${
            isFlipped ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          <div className="flex w-full items-start justify-between">
            <div className="rounded-full border border-greenblue/30 bg-white/5 px-3 py-1 text-xs text-gray-200">
              Batch {member.batch}
            </div>
            <div className="rounded-full border border-greenblue/30 bg-white/5 px-3 py-1 text-xs text-greenblue">
              {member.role}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-greenblue bg-gray-800">
              <Image
                src={member.image}
                alt={member.name}
                width={160}
                height={160}
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mt-4 text-center text-xl font-semibold text-white transition-colors group-hover:text-greenblue">
              {member.name}
            </h3>

            {member.contact ? (
              <p className="mt-1 text-center text-sm text-gray-300">
                {member.contact}
              </p>
            ) : (
              <p className="mt-1 text-center text-sm text-gray-400">
                Localhost Member
              </p>
            )}
          </div>

          <div className="flex items-center justify-center gap-4">
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s GitHub profile`}
                className="rounded-md border border-greenblue/30 bg-white/5 p-2 text-gray-200 transition-colors hover:text-greenblue focus:outline-none focus-visible:ring-2 focus-visible:ring-greenblue"
              >
                <FaGithub size={18} />
              </a>
            ) : (
              <span
                aria-hidden="true"
                className="rounded-md border border-greenblue/10 bg-white/5 p-2 text-gray-600"
              >
                <FaGithub size={18} />
              </span>
            )}

            {linkedinUrl ? (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s LinkedIn profile`}
                className="rounded-md border border-greenblue/30 bg-white/5 p-2 text-gray-200 transition-colors hover:text-greenblue focus:outline-none focus-visible:ring-2 focus-visible:ring-greenblue"
              >
                <FaLinkedin size={18} />
              </a>
            ) : (
              <span
                aria-hidden="true"
                className="rounded-md border border-greenblue/10 bg-white/5 p-2 text-gray-600"
              >
                <FaLinkedin size={18} />
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsFlipped(true)}
            className="mt-3 rounded-md border border-greenblue/30 bg-white/5 px-3 py-2 text-xs text-gray-200 transition-colors hover:text-greenblue focus:outline-none focus-visible:ring-2 focus-visible:ring-greenblue"
            aria-label={`Show about for ${member.name}`}
          >
            About
          </button>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 flex flex-col justify-between rounded-xl p-5 [backface-visibility:hidden] [transform:rotateY(180deg)] ${
            isFlipped ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div>
            <p className="text-sm font-semibold text-white">About</p>
            {aboutText ? (
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                {aboutText}
              </p>
            ) : (
              <div className="mt-2 space-y-2 text-sm text-gray-300">
                <p>
                  <span className="text-gray-400">Role:</span> {member.role}
                </p>
                <p>
                  <span className="text-gray-400">Batch:</span> {member.batch}
                </p>
                {member.contact ? (
                  <p>
                    <span className="text-gray-400">Contact:</span>{" "}
                    {member.contact}
                  </p>
                ) : null}
                <p className="text-xs text-gray-400">
                  Tip: add a short bio using the optional{" "}
                  <span className="text-gray-300">about</span> field.
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-greenblue/20 pt-4">
            <div className="text-xs text-gray-400">{member.name}</div>
            <button
              type="button"
              onClick={() => setIsFlipped(false)}
              className="rounded-md border border-greenblue/30 bg-white/5 px-3 py-2 text-xs text-gray-200 transition-colors hover:text-greenblue focus:outline-none focus-visible:ring-2 focus-visible:ring-greenblue"
              aria-label={`Go back to front of ${member.name}'s card`}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
