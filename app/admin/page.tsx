"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Assignment from "../components/Assignment";
import Event from "../components/Event";
import Table from "../components/Table";
import {
  FaUsers,
  FaCalendarPlus,
  FaFileAlt,
  FaChartBar,
  FaBell,
  FaCog,
  FaTrophy,
  FaGraduationCap,
} from "react-icons/fa";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Total Users", value: "250", icon: FaUsers, color: "bg-blue-500" },
    {
      label: "Active Events",
      value: "8",
      icon: FaCalendarPlus,
      color: "bg-green-500",
    },
    {
      label: "Assignments",
      value: "12",
      icon: FaFileAlt,
      color: "bg-purple-500",
    },
    {
      label: "Registrations",
      value: "145",
      icon: FaGraduationCap,
      color: "bg-yellow-500",
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: FaChartBar },
    { id: "events", label: "Events", icon: FaCalendarPlus },
    { id: "assignments", label: "Assignments", icon: FaFileAlt },
    { id: "users", label: "Users", icon: FaUsers },
    { id: "settings", label: "Settings", icon: FaCog },
  ];

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center pt-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl lg:text-5xl font-minecraft text-white mb-2">
            Admin <span className="text-greenblue">Dashboard</span>
          </h1>
          <p className="text-gray-300">
            Manage your club activities and members
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
                <div className="flex items-center justify-between mb-3">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="text-white text-xl" />
                  </div>
                  <span className="text-green-400 text-sm">↑ 12%</span>
                </div>
                <div className="text-white text-3xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl border border-greenblue border-opacity-30 mb-6">
          <div className="flex flex-wrap gap-2 p-4 border-b border-greenblue border-opacity-20">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? "bg-greenblue text-black font-semibold"
                      : "text-gray-300 hover:bg-white hover:bg-opacity-10"
                  }`}
                >
                  <Icon />
                  <span className="hidden md:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="p-6">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Activity */}
                  <div className="bg-white bg-opacity-5 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Recent Activity
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          action: "New event created",
                          time: "2 hours ago",
                          user: "Admin",
                        },
                        {
                          action: "Assignment submitted",
                          time: "3 hours ago",
                          user: "John Doe",
                        },
                        {
                          action: "User registered",
                          time: "5 hours ago",
                          user: "Jane Smith",
                        },
                        {
                          action: "Event registration",
                          time: "1 day ago",
                          user: "Mike Wilson",
                        },
                      ].map((activity, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-2 border-b border-gray-700"
                        >
                          <div>
                            <p className="text-white">{activity.action}</p>
                            <p className="text-gray-400 text-sm">
                              {activity.user}
                            </p>
                          </div>
                          <span className="text-gray-400 text-sm">
                            {activity.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white bg-opacity-5 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Quick Actions
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="py-4 bg-greenblue bg-opacity-20 hover:bg-opacity-30 rounded-lg border border-greenblue border-opacity-30 text-white transition-all flex flex-col items-center gap-2">
                        <FaCalendarPlus className="text-2xl" />
                        <span className="text-sm">Create Event</span>
                      </button>
                      <button className="py-4 bg-blue-500 bg-opacity-20 hover:bg-opacity-30 rounded-lg border border-blue-500 border-opacity-30 text-white transition-all flex flex-col items-center gap-2">
                        <FaFileAlt className="text-2xl" />
                        <span className="text-sm">New Assignment</span>
                      </button>
                      <button className="py-4 bg-purple-500 bg-opacity-20 hover:bg-opacity-30 rounded-lg border border-purple-500 border-opacity-30 text-white transition-all flex flex-col items-center gap-2">
                        <FaBell className="text-2xl" />
                        <span className="text-sm">Send Notice</span>
                      </button>
                      <button className="py-4 bg-yellow-500 bg-opacity-20 hover:bg-opacity-30 rounded-lg border border-yellow-500 border-opacity-30 text-white transition-all flex flex-col items-center gap-2">
                        <FaChartBar className="text-2xl" />
                        <span className="text-sm">View Reports</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Tables */}
                <div className="bg-white bg-opacity-5 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    User Management
                  </h3>
                  <Table />
                </div>
              </div>
            )}

            {activeTab === "events" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold text-white">
                    Event Management
                  </h3>
                  <button className="px-4 py-2 bg-greenblue hover:bg-opacity-80 text-black font-semibold rounded-lg transition-all">
                    Create New Event
                  </button>
                </div>
                <Event />
              </div>
            )}

            {activeTab === "assignments" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold text-white">
                    Assignment Management
                  </h3>
                  <button className="px-4 py-2 bg-greenblue hover:bg-opacity-80 text-black font-semibold rounded-lg transition-all">
                    Create New Assignment
                  </button>
                </div>
                <Assignment />
              </div>
            )}

            {activeTab === "users" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold text-white">
                    User Management
                  </h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="px-4 py-2 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-greenblue"
                    />
                    <button className="px-4 py-2 bg-greenblue hover:bg-opacity-80 text-black font-semibold rounded-lg transition-all">
                      Add User
                    </button>
                  </div>
                </div>
                <Table />
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Settings
                </h3>

                <div className="bg-white bg-opacity-5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    General Settings
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-300 block mb-2">
                        Club Name
                      </label>
                      <input
                        type="text"
                        title="Club Name"
                        placeholder="Enter club name"
                        defaultValue="Localhost IIIT Pune"
                        className="w-full px-4 py-2 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white focus:outline-none focus:border-greenblue"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 block mb-2">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        title="Contact Email"
                        placeholder="contact@example.com"
                        defaultValue="localhost@iiitp.ac.in"
                        className="w-full px-4 py-2 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white focus:outline-none focus:border-greenblue"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 block mb-2">
                        Description
                      </label>
                      <textarea
                        rows={3}
                        title="Club Description"
                        placeholder="Enter club description"
                        defaultValue="Development Club of IIIT Pune"
                        className="w-full px-4 py-2 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white focus:outline-none focus:border-greenblue"
                      />
                    </div>
                  </div>
                  <button className="mt-6 px-6 py-2 bg-greenblue hover:bg-opacity-80 text-black font-semibold rounded-lg transition-all">
                    Save Changes
                  </button>
                </div>

                <div className="bg-white bg-opacity-5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Notification Settings
                  </h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4"
                      />
                      <span>Email notifications for new events</span>
                    </label>
                    <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4"
                      />
                      <span>Assignment deadline reminders</span>
                    </label>
                    <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Weekly activity digest</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
