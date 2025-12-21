"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaUsers,
  FaCode,
  FaRocket,
  FaGraduationCap,
  FaTrophy,
  FaHandshake,
} from "react-icons/fa";

const benefits = [
  {
    icon: FaCode,
    title: "Learn & Build",
    description: "Work on real projects and learn from experienced developers",
  },
  {
    icon: FaUsers,
    title: "Network",
    description:
      "Connect with like-minded tech enthusiasts and industry mentors",
  },
  {
    icon: FaRocket,
    title: "Compete",
    description: "Participate in hackathons and coding competitions",
  },
  {
    icon: FaGraduationCap,
    title: "Workshops",
    description:
      "Attend exclusive tech workshops and skill development sessions",
  },
  {
    icon: FaTrophy,
    title: "Achievements",
    description: "Earn badges, certificates, and recognition for your work",
  },
  {
    icon: FaHandshake,
    title: "Collaborate",
    description: "Team up on exciting projects and open-source contributions",
  },
];

const testimonials = [
  {
    name: "Shubham Asati",
    batch: "2026",
    text: "Localhost helped me grow as a developer. The projects and hackathons are amazing!",
    role: "Full Stack Developer",
  },
  {
    name: "Ashmit Jagtap",
    batch: "2026",
    text: "Best community to learn and collaborate. Made friends and built cool projects!",
    role: "Web Developer",
  },
  {
    name: "Anmol Yadav",
    batch: "2027",
    text: "The workshops and mentorship programs are top-notch. Highly recommend joining!",
    role: "App Developer",
  },
];

const JoinOurCommunity = () => {
  return (
    <div className="relative bg-bg-star bg-cover bg-left lg:bg-center py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-minecraft text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            JO<span className="text-greenblue">I</span>N O
            <span className="text-greenblue">U</span>R CO
            <span className="text-greenblue">MM</span>UNITY
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Be part of IIIT Pune&apos;s most active tech community. Learn,
            build, and grow with us!
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-greenblue border-opacity-30 hover:bg-opacity-10 transition-all group"
            >
              <benefit.icon className="text-greenblue text-4xl mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white text-xl font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-white text-3xl sm:text-4xl font-minecraft text-center mb-4">
            What Our <span className="text-greenblue">Members</span> Say
          </h3>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Hear from students who are part of our amazing community
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-greenblue border-opacity-40 hover:border-opacity-70 transition-all group overflow-hidden"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-greenblue opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity" />

                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-greenblue opacity-20 text-5xl font-serif">
                  &ldquo;
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Avatar and Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-greenblue to-cyan-400 flex items-center justify-center shadow-lg shadow-greenblue/30 group-hover:shadow-greenblue/50 transition-shadow">
                      <span className="text-black font-bold text-xl sm:text-2xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg sm:text-xl">
                        {testimonial.name}
                      </p>
                      <p className="text-greenblue text-sm font-semibold mb-1">
                        {testimonial.role}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-greenblue bg-opacity-20 text-greenblue text-xs rounded-full">
                          Batch {testimonial.batch}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-greenblue to-transparent opacity-30 mb-4" />

                  {/* Testimonial text */}
                  <p className="text-gray-200 italic leading-relaxed text-base sm:text-lg">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Rating stars */}
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-greenblue fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Hover effect glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-greenblue/0 via-greenblue/5 to-greenblue/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-white text-2xl font-semibold mb-6">
            Connect With Us
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
            <Link
              href="https://discord.gg/8wEquGh4CY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white bg-opacity-10 backdrop-blur-md hover:bg-opacity-20 rounded-xl px-6 py-4 sm:px-8 sm:py-6 flex items-center gap-3 border border-greenblue border-opacity-30 transition-all"
              >
                <FaDiscord className="text-greenblue text-3xl sm:text-4xl" />
                <span className="text-white text-lg sm:text-2xl font-semibold">
                  Discord
                </span>
              </motion.div>
            </Link>

            <Link
              href="https://github.com/ShubhamAsati-123/localhost-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white bg-opacity-10 backdrop-blur-md hover:bg-opacity-20 rounded-xl px-6 py-4 sm:px-8 sm:py-6 flex items-center gap-3 border border-greenblue border-opacity-30 transition-all"
              >
                <FaGithub className="text-greenblue text-3xl sm:text-4xl" />
                <span className="text-white text-lg sm:text-2xl font-semibold">
                  GitHub
                </span>
              </motion.div>
            </Link>

            <Link
              href="https://linkedin.com/company/localhost-iiitp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white bg-opacity-10 backdrop-blur-md hover:bg-opacity-20 rounded-xl px-6 py-4 sm:px-8 sm:py-6 flex items-center gap-3 border border-greenblue border-opacity-30 transition-all"
              >
                <FaLinkedin className="text-greenblue text-3xl sm:text-4xl" />
                <span className="text-white text-lg sm:text-2xl font-semibold">
                  LinkedIn
                </span>
              </motion.div>
            </Link>
          </div>

          {/* CTA Button */}
          <Link href="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-greenblue hover:bg-opacity-90 text-black font-bold py-4 px-12 rounded-lg text-lg transition-all shadow-lg shadow-greenblue/30"
            >
              Join Localhost Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinOurCommunity;
