"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  image?: string;
  github?: string;
  linkedin?: string;
  className?: string;
  contact?: string;
  role?: string;
  batch?: string;
}

export default function NewTeamCard({
  name,
  image,
  github,
  linkedin,
  contact,
  className = "",
  role,
  batch,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative group max-w-xs mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-greenblue/30 border border-greenblue/30 hover:border-greenblue/60 transition-all ${className}`}
    >
      {/* Decorative gradient header */}
      <div className="relative h-32 bg-gradient-to-br from-greenblue via-cyan-500 to-blue-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />

        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>
      </div>

      {/* Profile image */}
      <div className="relative -mt-16 flex justify-center z-10">
        <div className="relative">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-32 h-32 rounded-full border-4 border-white/20 shadow-xl shadow-black/30 overflow-hidden bg-gradient-to-br from-greenblue/20 to-transparent backdrop-blur-sm"
          >
            <Image
              width={128}
              height={128}
              className="w-full h-full object-cover"
              src={
                image ||
                "https://t4.ftcdn.net/jpg/07/88/67/21/360_F_788672190_maGwfDtey1ep9BqZsLO9f6LaUkIBMNt1.jpg"
              }
              alt={name}
            />
          </motion.div>
          {/* Online indicator */}
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-4 text-center">
        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-greenblue transition-colors">
          {name}
        </h3>

        {/* Role and Batch badges */}
        <div className="flex items-center justify-center gap-2 mb-3">
          {role && (
            <span className="px-3 py-1 bg-greenblue/20 text-greenblue text-xs font-semibold rounded-full">
              {role}
            </span>
          )}
          {batch && (
            <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-semibold rounded-full">
              Batch {batch}
            </span>
          )}
        </div>

        {contact && (
          <p className="text-gray-300 text-sm mb-4 flex items-center justify-center gap-2">
            <FaEnvelope className="text-greenblue" />
            {contact}
          </p>
        )}

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-greenblue/50 to-transparent mb-4" />

        {/* Social links */}
        <div className="flex justify-center gap-4">
          {github ? (
            <Link href={`https://github.com/${github}`} target="_blank">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-greenblue/50 transition-all group/icon"
              >
                <FaGithub
                  size={24}
                  className="text-gray-300 group-hover/icon:text-greenblue transition-colors"
                />
              </motion.div>
            </Link>
          ) : (
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
              <FaGithub size={24} className="text-gray-600" />
            </div>
          )}

          {linkedin ? (
            <Link href={`https://linkedin.com/in/${linkedin}`} target="_blank">
              <motion.div
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-greenblue/50 transition-all group/icon"
              >
                <FaLinkedin
                  size={24}
                  className="text-gray-300 group-hover/icon:text-greenblue transition-colors"
                />
              </motion.div>
            </Link>
          ) : (
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
              <FaLinkedin size={24} className="text-gray-600" />
            </div>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-greenblue/0 via-greenblue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
    </motion.div>
  );
}
