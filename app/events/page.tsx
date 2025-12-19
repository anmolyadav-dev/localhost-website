// Import the necessary modules
"use client";
import { useState } from "react";
import EventCard from "../components/EventCard";
import { motion } from "framer-motion";
import { FaFilter, FaCalendarAlt, FaSearch } from "react-icons/fa";

// Your events data
const eventsData = [
  {
    eventId: "1",
    eventName: "HackIn IIITP",
    eventDate: "2024-03-01",
    eventLocation: "Virtual",
    EventDescription: "HackIn IIIT Pune, a 36-hour Intra College hackathon",
    imageUrl: "/images/hackathon.jpg",
    websiteUrl: "https://localhost.iiitp.ac.in/hackiniiitp",
    registerUrl: "https://localhost.iiitp.ac.in/hackiniiitp/register",
    category: "Hackathon",
    status: "upcoming",
  },
  {
    eventId: "2",
    eventName: "IIITP Winter of Code",
    eventDate: "2024-12-01",
    eventLocation: "Virtual",
    EventDescription:
      "IIIT Pune Winter of Code is a 2 month long open source event in which we contribute in the Open Source projects",
    imageUrl: "/images/hackathon.jpg",
    websiteUrl: "http://localhost:3000/iiitpwoc",
    registerUrl: "http://localhost:3000/iiitpwoc/register",
    category: "Open Source",
    status: "ongoing",
  },
  {
    eventId: "3",
    eventName: "Web Development Workshop",
    eventDate: "2025-11-15",
    eventLocation: "Lab A-301",
    EventDescription:
      "Learn modern web development with React, Next.js, and Tailwind CSS",
    imageUrl: "/images/hackathon.jpg",
    websiteUrl: "#",
    registerUrl: "#",
    category: "Workshop",
    status: "upcoming",
  },
  {
    eventId: "4",
    eventName: "Tech Talk: AI in Production",
    eventDate: "2025-11-20",
    eventLocation: "Seminar Hall",
    EventDescription:
      "Industry expert shares insights on deploying AI models in production",
    imageUrl: "/images/hackathon.jpg",
    websiteUrl: "#",
    registerUrl: "#",
    category: "Tech Talk",
    status: "upcoming",
  },
];

const categories = [
  "All",
  "Hackathon",
  "Workshop",
  "Tech Talk",
  "Open Source",
  "Competition",
];
const statusFilters = ["All", "upcoming", "ongoing", "completed"];

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch =
      event.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.EventDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "All" || event.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <div className="pt-32 px-4 lg:px-10 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="font-minecraft text-4xl lg:text-6xl text-white mb-4">
            E<span className="text-greenblue">V</span>ENTS
          </h2>
          <p className="text-gray-300 text-lg">
            Explore workshops, hackathons, and tech talks happening at IIIT Pune
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-greenblue"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-greenblue" />
            </div>

            {/* Category Filter */}
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

            {/* Status Filter */}
            <select
              title="Status Filter"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              aria-label="Filter events by status"
              className="px-4 py-2 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white focus:outline-none focus:border-greenblue"
            >
              {statusFilters.map((status) => (
                <option key={status} value={status} className="bg-gray-900">
                  {status === "All"
                    ? "All Status"
                    : status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-gray-300">
              Showing {filteredEvents.length} of {eventsData.length} events
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-2 rounded ${
                  viewMode === "grid"
                    ? "bg-greenblue text-black"
                    : "bg-white bg-opacity-10 text-white"
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-3 py-2 rounded ${
                  viewMode === "list"
                    ? "bg-greenblue text-black"
                    : "bg-white bg-opacity-10 text-white"
                }`}
              >
                List
              </button>
            </div>
          </div>
        </motion.div>

        {/* Events Grid/List */}
        {filteredEvents.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-4"
            }
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.eventId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">
              No events found matching your filters
            </p>
          </div>
        )}

        {/* Calendar View Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="/events/calendar"
            className="inline-flex items-center gap-2 px-6 py-3 bg-greenblue bg-opacity-20 hover:bg-opacity-30 text-greenblue font-semibold rounded-lg border border-greenblue border-opacity-30 transition-all"
          >
            <FaCalendarAlt />
            View Event Calendar
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
