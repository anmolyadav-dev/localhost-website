"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ActivityFeed from "../components/ActivityFeed";
import UpcomingEvents from "../components/UpcomingEvents";
import {
  FaUsers,
  FaCalendarAlt,
  FaCode,
  FaTrophy,
  FaChartLine,
} from "react-icons/fa";

const DashboardPage = () => {
  const stats = [
    {
      label: "Total Members",
      value: "250+",
      icon: FaUsers,
      color: "text-blue-400",
    },
    {
      label: "Upcoming Events",
      value: "8",
      icon: FaCalendarAlt,
      color: "text-green-400",
    },
    {
      label: "Active Projects",
      value: "24",
      icon: FaCode,
      color: "text-purple-400",
    },
    {
      label: "Achievements",
      value: "15",
      icon: FaTrophy,
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center pt-32 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-minecraft text-4xl lg:text-6xl text-white mb-4"
        >
          Club <span className="text-greenblue">Dashboard</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg mb-12"
        >
          Track all club activities, events, and achievements in one place
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30 hover:bg-opacity-10 transition-all"
              >
                <Icon className={`${stat.color} text-3xl mb-3`} />
                <div className="text-white text-2xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Activity and Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ActivityFeed />
          <UpcomingEvents />
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30"
        >
          <h2 className="text-2xl font-minecraft text-white mb-6">
            Quick <span className="text-greenblue">Actions</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="py-4 px-6 bg-greenblue bg-opacity-20 hover:bg-opacity-30 rounded-lg border border-greenblue border-opacity-30 text-white transition-all">
              Create Event
            </button>
            <button className="py-4 px-6 bg-blue-400 bg-opacity-20 hover:bg-opacity-30 rounded-lg border border-blue-400 border-opacity-30 text-white transition-all">
              New Assignment
            </button>
            <button className="py-4 px-6 bg-purple-400 bg-opacity-20 hover:bg-opacity-30 rounded-lg border border-purple-400 border-opacity-30 text-white transition-all">
              Announce
            </button>
            <button className="py-4 px-6 bg-yellow-400 bg-opacity-20 hover:bg-opacity-30 rounded-lg border border-yellow-400 border-opacity-30 text-white transition-all">
              View Reports
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
