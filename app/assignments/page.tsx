// Import the necessary modules
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import AssignmentCard from "../components/AssignmentCard";
import { IoSearch } from "react-icons/io5";
import { FaFilter, FaTags } from "react-icons/fa";

// Your assignments data
const assignmentsData = [
  {
    assignmentId: "1",
    assignmentTitle: "Basic Web Development Project",
    tags: ["HTML", "CSS", "JavaScript"],
    assignmentDescription:
      "Create a responsive website using HTML, CSS, and JavaScript.",
    dueDate: "2024-03-10",
  },
  {
    assignmentId: "2",
    assignmentTitle: "Python Data Analysis",
    tags: ["Python", "Machine Learning"],
    assignmentDescription:
      "Analyze a dataset using Python and create visualizations.",
    dueDate: "2024-03-15",
  },
  {
    assignmentId: "3",
    assignmentTitle: "Database Design Challenge",
    tags: ["SQL", "Database Design"],
    assignmentDescription:
      "Design and implement a database for an e-commerce platform.",
    dueDate: "2024-03-20",
  },
];

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  // Function to filter assignments based on search query and tags
  const filteredAssignments = assignmentsData.filter((assignment) => {
    const nameMatch = assignment.assignmentTitle
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const tagMatch = tagFilter ? assignment.tags.includes(tagFilter) : true;
    return nameMatch && tagMatch;
  });

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center pt-24 sm:pt-32 pb-10 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="font-minecraft text-3xl sm:text-4xl lg:text-6xl text-white mb-3 sm:mb-4">
            A<span className="text-greenblue">SS</span>IGNMENT
            <span className="text-greenblue">S</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
            Complete assignments to enhance your coding skills
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-greenblue border-opacity-30 mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search assignments by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search assignments by name"
                className="px-4 py-3 pl-12 w-full bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-greenblue"
              />
              <IoSearch
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-greenblue"
                size={20}
                aria-hidden="true"
              />
            </div>

            {/* Tag Filter */}
            <div className="relative sm:w-auto">
              <select
                title="Filter by Tag"
                value={tagFilter}
                onChange={(e) => setTagFilter(e.target.value)}
                aria-label="Filter assignments by tag"
                className="px-4 py-3 pl-10 w-full sm:w-56 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white focus:outline-none focus:border-greenblue appearance-none"
              >
                <option value="" className="bg-gray-900">
                  All Tags
                </option>
                <option value="HTML" className="bg-gray-900">
                  HTML
                </option>
                <option value="CSS" className="bg-gray-900">
                  CSS
                </option>
                <option value="JavaScript" className="bg-gray-900">
                  JavaScript
                </option>
                <option value="SQL" className="bg-gray-900">
                  SQL
                </option>
                <option value="Database Design" className="bg-gray-900">
                  Database Design
                </option>
                <option value="Python" className="bg-gray-900">
                  Python
                </option>
                <option value="Machine Learning" className="bg-gray-900">
                  Machine Learning
                </option>
                <option value="TensorFlow" className="bg-gray-900">
                  TensorFlow
                </option>
              </select>
              <FaTags
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-greenblue pointer-events-none"
                size={16}
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="mt-3 sm:mt-4 flex items-center justify-between">
            <p className="text-gray-300 text-sm sm:text-base">
              Showing {filteredAssignments.length} of {assignmentsData.length}{" "}
              assignments
            </p>
            {tagFilter && (
              <button
                onClick={() => setTagFilter("")}
                className="text-greenblue hover:text-white text-sm transition-colors"
                aria-label="Clear tag filter"
              >
                Clear filter
              </button>
            )}
          </div>
        </motion.div>

        {/* Assignments Grid */}
        {filteredAssignments.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filteredAssignments.map((assignment, index) => (
              <motion.div
                key={assignment.assignmentId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <AssignmentCard {...assignment} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <p className="text-gray-400 text-lg sm:text-xl mb-2">
              No assignments found
            </p>
            <p className="text-gray-500 text-sm sm:text-base">
              Try adjusting your search or filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
