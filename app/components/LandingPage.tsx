"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaUsers, FaCalendarAlt, FaCode, FaTrophy } from "react-icons/fa";
import Link from "next/link";

const LandingPage = () => {
  const [stats, setStats] = useState({
    members: 0,
    events: 0,
    projects: 0,
    achievements: 0,
  });

  useEffect(() => {
    // Animate counter
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    const targets = {
      members: 250,
      events: 45,
      projects: 120,
      achievements: 15,
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        members: Math.floor(targets.members * progress),
        events: Math.floor(targets.events * progress),
        projects: Math.floor(targets.projects * progress),
        achievements: Math.floor(targets.achievements * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-bg-dino bg-cover min-h-screen bg-left lg:bg-center flex flex-col justify-center items-center px-4">
      <div className="flex flex-col text-center mt-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-minecraft text-5xl md:text-9xl text-white mb-4"
        >
          LOC<span className="text-greenblue">A</span>LHO
          <span className="text-greenblue">S</span>T
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-minecraft text-2xl md:text-5xl text-white mb-8"
        >
          THE DE<span className="text-greenblue">V</span> CO
          <span className="text-greenblue">MM</span>UNIT
          <span className="text-greenblue">Y</span> OF IIIT{" "}
          <span className="text-greenblue">P</span>UNE
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          Join us in building, learning, and innovating together. Where ideas
          meet execution.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link href="/events">
            <button className="bg-greenblue hover:bg-opacity-80 text-black font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105">
              Explore Events
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-3 px-8 rounded-lg border-2 border-greenblue transition-all transform hover:scale-105 backdrop-blur-sm">
              Join Community
            </button>
          </Link>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30 hover:bg-opacity-20 transition-all">
            <FaUsers className="text-greenblue text-4xl mx-auto mb-3" />
            <div className="text-white text-3xl md:text-4xl font-bold">
              {stats.members}+
            </div>
            <div className="text-gray-300 text-sm md:text-base mt-2">
              Active Members
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30 hover:bg-opacity-20 transition-all">
            <FaCalendarAlt className="text-greenblue text-4xl mx-auto mb-3" />
            <div className="text-white text-3xl md:text-4xl font-bold">
              {stats.events}+
            </div>
            <div className="text-gray-300 text-sm md:text-base mt-2">
              Events Hosted
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30 hover:bg-opacity-20 transition-all">
            <FaCode className="text-greenblue text-4xl mx-auto mb-3" />
            <div className="text-white text-3xl md:text-4xl font-bold">
              {stats.projects}+
            </div>
            <div className="text-gray-300 text-sm md:text-base mt-2">
              Projects Built
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30 hover:bg-opacity-20 transition-all">
            <FaTrophy className="text-greenblue text-4xl mx-auto mb-3" />
            <div className="text-white text-3xl md:text-4xl font-bold">
              {stats.achievements}+
            </div>
            <div className="text-gray-300 text-sm md:text-base mt-2">
              Achievements
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
