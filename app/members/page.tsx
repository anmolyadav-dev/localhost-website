"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import MemberFlipCard, { type MemberFlipCardMember } from "./MemberFlipCard";

type Member = MemberFlipCardMember;

// Team data from actual team pages
const members: Member[] = [
  // Batch 2025 - Core Team
  {
    id: "1",
    name: "Vinit Agarwal",
    role: "Core Team",
    batch: "2025",
    image: "/images/team/2025/vinit-agarwal.jpg",
    linkedin: "agarwalvinit5678/",
  },
  {
    id: "2",
    name: "Kanishka Bansode",
    role: "Core Team",
    batch: "2025",
    image: "/images/team/2025/kanishka-bansode.jpg",
  },
  {
    id: "3",
    name: "Ishan Upadhyaya",
    role: "Core Team",
    batch: "2025",
    image: "/images/team/2025/ishan-upadhyaya.jpg",
  },
  {
    id: "4",
    name: "Prakhar Singh",
    role: "Core Team",
    batch: "2025",
    image: "/images/team/2025/prakhar-singh.jpg",
  },
  // Batch 2026
  {
    id: "5",
    name: "Ashmit Jagtap",
    role: "Member",
    batch: "2026",
    image: "/images/team/2026/ashmit.jpg",
    github: "ashmit-coder",
    linkedin: "ashmit-jagtap-544587270/",
  },
  {
    id: "6",
    name: "Anshul Kumar",
    role: "Member",
    batch: "2026",
    image: "/images/team/2026/Anshul.jpg",
    github: "Anshulk2004",
    linkedin: "anshul-kumar-627001250",
  },
  {
    id: "7",
    name: "Shubham Asati",
    role: "Member",
    batch: "2026",
    image: "/images/team/2026/shubham.jpg",
    github: "ShubhamAsati-123",
    linkedin: "shubham-asati-054ba124b",
  },
  {
    id: "8",
    name: "Manas Agarwal",
    role: "Member",
    batch: "2026",
    image: "/images/team/2026/manas.jpg",
    github: "manasagar",
    linkedin: "manas-agarwal-a13623256/",
  },
  {
    id: "9",
    name: "Tushar Hirekhan",
    role: "Member",
    batch: "2026",
    image: "/images/team/2026/Tushar.jpg",
    github: "tshrrx",
    linkedin: "tushar-hirekhan-b71a10258/",
  },
  {
    id: "10",
    name: "Jai Somani",
    role: "Member",
    batch: "2026",
    image: "/images/team/2026/jai.jpg",
    github: "jaisomani04",
    linkedin: "jaisomani04",
  },
  // Batch 2027
  {
    id: "11",
    name: "Anmol Yadav",
    role: "Member",
    batch: "2027",
    image: "/images/team/2027/anmol.jpg",
    github: "anmolyadav-dev",
    linkedin: "anmolyadav-dev",
    contact: "~anmolyadav.dev",
  },
  {
    id: "12",
    name: "Anomitra",
    role: "Member",
    batch: "2027",
    image: "/images/team/2027/ano.jpg",
    github: "anomitroid",
  },
  {
    id: "13",
    name: "Shivansh Kandpal",
    role: "Member",
    batch: "2027",
    image: "/images/team/2027/shivansh.jpeg",
    github: "zyphon12342",
    linkedin: "shivansh-kandpal-503a2325b",
  },
  {
    id: "14",
    name: "Piyush Kulkarni",
    role: "Member",
    batch: "2027",
    image: "/images/team/2027/kulkarni.jpg",
    github: "piyushk6626",
    linkedin: "piyush-kulkarni-ai",
  },
  {
    id: "15",
    name: "Siddhant Ganesh",
    role: "Member",
    batch: "2027",
    image: "/images/team/2027/siddhant.png",
    github: "sdntgnsh",
    linkedin: "siddhant-ganesh-senthil-kumar-911060246",
  },
  {
    id: "16",
    name: "Luv Kansal",
    role: "Member",
    batch: "2027",
    image: "/images/team/2027/luv.jpeg",
    linkedin: "luv-kansal-3a4a372b1",
  },
  {
    id: "17",
    name: "Khushi Garg",
    role: "Member",
    batch: "2027",
    image: "/images/team/2027/khushi.jpg",
    linkedin: "luv-kansal-3a4a372b1",
  },
];

const batches = ["All", "2025", "2026", "2027"];
const roles = ["All", "Core Team", "Member"];

const MembersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("All");
  const [selectedRole, setSelectedRole] = useState("All");

  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesBatch =
      selectedBatch === "All" || member.batch === selectedBatch;
    const matchesRole = selectedRole === "All" || member.role === selectedRole;

    return matchesSearch && matchesBatch && matchesRole;
  });

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center pt-24 sm:pt-32 px-4 lg:px-10 pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="font-minecraft text-3xl sm:text-4xl lg:text-6xl text-white mb-3 sm:mb-4">
            Our <span className="text-greenblue">Members</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Meet the talented individuals driving innovation at Localhost
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-greenblue border-opacity-30 mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search members by name"
                className="w-full px-4 py-3 pl-12 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-greenblue"
              />
              <FaSearch
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-greenblue"
                aria-hidden="true"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <select
                title="Batch Filter"
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
                aria-label="Filter members by batch"
                className="px-4 py-2 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white focus:outline-none focus:border-greenblue w-full sm:w-auto"
              >
                {batches.map((batch) => (
                  <option key={batch} value={batch} className="bg-gray-900">
                    {batch === "All" ? "All Batches" : `Batch ${batch}`}
                  </option>
                ))}
              </select>

              <select
                title="Role Filter"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                aria-label="Filter members by role"
                className="px-4 py-2 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white focus:outline-none focus:border-greenblue w-full sm:w-auto"
              >
                {roles.map((role) => (
                  <option key={role} value={role} className="bg-gray-900">
                    {role}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base">
            Showing {filteredMembers.length} of {members.length} members
          </p>
        </motion.div>

        {/* Members Grid */}
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className=""
              >
                <MemberFlipCard member={member} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">
              No members found matching your filters
            </p>
          </div>
        )}

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 sm:mt-12 bg-greenblue bg-opacity-10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-greenblue border-opacity-30 text-center"
        >
          <h2 className="text-xl sm:text-2xl font-minecraft text-white mb-3 sm:mb-4">
            Want to <span className="text-greenblue">Join Us?</span>
          </h2>
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
            Become a part of the most active dev community at IIIT Pune
          </p>
          <button className="px-6 py-3 bg-greenblue hover:bg-opacity-80 text-black font-semibold rounded-lg transition-all text-sm sm:text-base">
            Join Localhost
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default MembersPage;
