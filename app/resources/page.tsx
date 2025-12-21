"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaVideo,
  FaCode,
  FaDownload,
  FaExternalLinkAlt,
  FaSearch,
} from "react-icons/fa";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: "tutorial" | "documentation" | "video" | "code";
  category: string;
  link: string;
  downloads?: number;
  author: string;
}

const resources: Resource[] = [
  {
    id: "1",
    title: "React Basics Tutorial",
    description: "Complete guide to getting started with React.js",
    type: "tutorial",
    category: "Web Development",
    link: "#",
    downloads: 145,
    author: "Localhost Team",
  },
  {
    id: "2",
    title: "Next.js Documentation",
    description: "Official Next.js documentation and best practices",
    type: "documentation",
    category: "Web Development",
    link: "https://nextjs.org/docs",
    author: "Vercel",
  },
  {
    id: "3",
    title: "Git & GitHub Workshop",
    description: "Video tutorial on version control with Git",
    type: "video",
    category: "Version Control",
    link: "#",
    downloads: 89,
    author: "Workshop Series",
  },
  {
    id: "4",
    title: "Python DSA Solutions",
    description: "Code repository with data structure implementations",
    type: "code",
    category: "Algorithms",
    link: "#",
    downloads: 234,
    author: "Community",
  },
  {
    id: "5",
    title: "Machine Learning Basics",
    description: "Introduction to ML concepts and implementation",
    type: "tutorial",
    category: "Machine Learning",
    link: "#",
    downloads: 178,
    author: "Localhost Team",
  },
  {
    id: "6",
    title: "API Development Guide",
    description: "Building RESTful APIs with Node.js and Express",
    type: "documentation",
    category: "Backend",
    link: "#",
    author: "Dev Team",
  },
];

const categories = [
  "All",
  "Web Development",
  "Machine Learning",
  "Algorithms",
  "Backend",
  "Version Control",
];

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || resource.category === selectedCategory;
    const matchesType =
      selectedType === "all" || resource.type === selectedType;

    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "tutorial":
        return FaBook;
      case "video":
        return FaVideo;
      case "code":
        return FaCode;
      case "documentation":
        return FaBook;
      default:
        return FaBook;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "tutorial":
        return "text-blue-400 bg-blue-400";
      case "video":
        return "text-red-400 bg-red-400";
      case "code":
        return "text-green-400 bg-green-400";
      case "documentation":
        return "text-purple-400 bg-purple-400";
      default:
        return "text-greenblue bg-greenblue";
    }
  };

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center pt-32 px-4 lg:px-10 pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-minecraft text-4xl lg:text-6xl text-white mb-4">
            Learning <span className="text-greenblue">Resources</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Curated tutorials, documentation, and learning materials for club
            members
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-greenblue"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-greenblue" />
            </div>

            <select
              title="Resource Type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white focus:outline-none focus:border-greenblue"
            >
              <option value="all" className="bg-gray-900">
                All Types
              </option>
              <option value="tutorial" className="bg-gray-900">
                Tutorials
              </option>
              <option value="video" className="bg-gray-900">
                Videos
              </option>
              <option value="documentation" className="bg-gray-900">
                Documentation
              </option>
              <option value="code" className="bg-gray-900">
                Code Samples
              </option>
            </select>
          </div>

          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? "bg-greenblue text-black font-semibold"
                    : "bg-white bg-opacity-10 text-white hover:bg-opacity-20 border border-greenblue border-opacity-30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => {
              const Icon = getTypeIcon(resource.type);
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30 hover:bg-opacity-10 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`${getTypeColor(
                        resource.type
                      )} bg-opacity-20 p-3 rounded-lg border-2`}
                    >
                      <Icon
                        className={`text-xl ${
                          getTypeColor(resource.type).split(" ")[0]
                        }`}
                      />
                    </div>
                    <span className="px-3 py-1 text-xs bg-greenblue bg-opacity-20 text-greenblue rounded-full border border-greenblue border-opacity-30">
                      {resource.category}
                    </span>
                  </div>

                  <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-greenblue transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>By {resource.author}</span>
                    {resource.downloads && (
                      <span className="flex items-center gap-1">
                        <FaDownload className="text-xs" />
                        {resource.downloads}
                      </span>
                    )}
                  </div>

                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 bg-greenblue bg-opacity-20 hover:bg-opacity-30 text-greenblue font-semibold rounded-lg border border-greenblue border-opacity-30 transition-all"
                  >
                    <span>Access Resource</span>
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">
              No resources found matching your filters
            </p>
          </div>
        )}

        {/* Contribute Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-greenblue bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-greenblue border-opacity-30 text-center"
        >
          <h2 className="text-2xl font-minecraft text-white mb-4">
            Have a Resource to <span className="text-greenblue">Share?</span>
          </h2>
          <p className="text-gray-300 mb-6">
            Help the community by contributing your tutorials, code samples, or
            documentation
          </p>
          <button className="px-6 py-3 bg-greenblue hover:bg-opacity-80 text-black font-semibold rounded-lg transition-all">
            Contribute Resource
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ResourcesPage;
