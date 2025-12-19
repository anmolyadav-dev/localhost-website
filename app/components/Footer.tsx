"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaDiscord,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Assignments", href: "/assignments" },
    { name: "Members", href: "/members" },
    { name: "Resources", href: "/resources" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const specialEvents = [
    { name: "HackIn IIITP", href: "/hackiniiitp" },
    { name: "Winter of Code", href: "/iiitpwoc" },
    { name: "Event Calendar", href: "/events/calendar" },
  ];

  const resources = [
    { name: "Tutorials", href: "/resources" },
    { name: "Documentation", href: "/resources" },
    { name: "Code Samples", href: "/resources" },
    { name: "Learning Path", href: "/resources" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/ShubhamAsati-123",
      label: "GitHub",
    },
    {
      icon: FaDiscord,
      href: "https://discord.gg/8wEquGh4CY",
      label: "Discord",
    },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-black bg-opacity-80 backdrop-blur-md border-t border-greenblue border-opacity-30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Localhost Logo"
                width={150}
                height={30}
                className="mb-4"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              The premier Development Club of IIIT Pune. Join us in building,
              learning, and innovating together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white bg-opacity-10 hover:bg-greenblue hover:bg-opacity-20 rounded-lg flex items-center justify-center transition-all border border-greenblue border-opacity-30 hover:border-greenblue group"
                    aria-label={social.label}
                  >
                    <Icon className="text-gray-300 group-hover:text-greenblue transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-minecraft">
              Quick <span className="text-greenblue">Links</span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-greenblue transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-greenblue transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events & Programs */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-minecraft">
              Events & <span className="text-greenblue">Programs</span>
            </h3>
            <ul className="space-y-2 mb-4">
              {specialEvents.map((event) => (
                <li key={event.name}>
                  <Link
                    href={event.href}
                    className="text-gray-300 hover:text-greenblue transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-greenblue transition-all"></span>
                    {event.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold text-sm mb-2">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-greenblue transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-greenblue transition-all"></span>
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-minecraft">
              Get In <span className="text-greenblue">Touch</span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <FaMapMarkerAlt className="text-greenblue mt-1 flex-shrink-0" />
                <span>IIIT Pune, Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <FaEnvelope className="text-greenblue flex-shrink-0" />
                <a
                  href="mailto:localhost@iiitp.ac.in"
                  className="hover:text-greenblue transition-colors"
                >
                  localhost@iiitp.ac.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <FaDiscord className="text-greenblue flex-shrink-0" />
                <a
                  href="https://discord.gg/8wEquGh4CY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-greenblue transition-colors"
                >
                  Join Discord Server
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white font-semibold text-sm mb-3">
                Stay Updated
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white bg-opacity-10 border border-greenblue border-opacity-30 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-greenblue"
                />
                <button className="px-4 py-2 bg-greenblue hover:bg-opacity-80 text-black font-semibold rounded-lg transition-all text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear}{" "}
            <span className="text-greenblue font-semibold">Localhost</span> -
            IIIT Pune. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
            <Link
              href="/about"
              className="hover:text-greenblue transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/about"
              className="hover:text-greenblue transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/about"
              className="hover:text-greenblue transition-colors"
            >
              Code of Conduct
            </Link>
          </div>

          <div className="text-gray-400 text-sm">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="text-greenblue">Localhost Team</span>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-5 rounded-full border border-greenblue border-opacity-20">
            <span className="text-gray-400 text-xs">Built with</span>
            <span className="text-greenblue text-xs font-semibold">
              Next.js
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-greenblue text-xs font-semibold">React</span>
            <span className="text-gray-600">•</span>
            <span className="text-greenblue text-xs font-semibold">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-greenblue hover:bg-opacity-80 rounded-full flex items-center justify-center shadow-lg transition-all z-50 group"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 text-black group-hover:transform group-hover:-translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
