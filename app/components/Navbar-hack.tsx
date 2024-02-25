// Import statements remain the same
"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbarhack = () => {
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/me");
      setUser(res.data.data.username);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <div className="px-3 lg:px-10 py-5">
      {/* Mobile Menu */}
      <div className="lg:hidden">
        <div className="flex justify-between bg-slate-400 px-5 rounded-full bg-opacity-20 py-3 items-center backdrop-blur-md border-2">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={192} height={32} />
          </Link>
          <button
            title="menuicon"
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <GiHamburgerMenu size={30} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black z-50 h-screen flex items-center justify-center text-white">
            <div className="absolute top-10 right-8">
              <button
                title="closeicon"
                className="text-white focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <IoMdClose size={30} />
              </button>
            </div>
            <ul className="flex flex-col gap-4 text-2xl ">
              <Link href="/hackiniiitp" onClick={closeMobileMenu}>
                <li className="hover:text-[#4DFFDB] cursor-pointer">Home</li>
              </Link>
              <Link href="/hackiniiitp/about" onClick={closeMobileMenu}>
                <li className="hover:text-[#4DFFDB] cursor-pointer">About</li>
              </Link>
              <Link href="/hackiniiitp/teams" onClick={closeMobileMenu}>
                <li className="hover:text-[#4DFFDB] cursor-pointer">Teams</li>
              </Link>
              <Link href="/hackiniiitp/submit" onClick={closeMobileMenu}>
                <li className="hover:text-[#4DFFDB] cursor-pointer">
                  Submit Project
                </li>
              </Link>
              {user ? (
                <Link href="/hackiniiitp/profile" onClick={closeMobileMenu}>
                  <li className="hover:text-[#4DFFDB] cursor-pointer capitalize">
                    {user}
                  </li>
                </Link>
              ) : (
                <Link href="/hackiniiitp/login" onClick={closeMobileMenu}>
                  <li className="hover:text-[#4DFFDB] cursor-pointer">
                    Login / Register
                  </li>
                </Link>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <header className="hidden lg:flex justify-between items-center md:px-5 md:text-xl navbar h-20 border-2 rounded-full bg-slate-100 bg-opacity-5 backdrop-blur-md text-white">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={192} height={32} />
        </Link>
        <ul className="flex gap-10">
          <Link href="/hackiniiitp">
            <li className="hover:text-[#4DFFDB] cursor-pointer">HackIn IIITP</li>
          </Link>
          <Link href="/hackiniiitp/about">
            <li className="hover:text-[#4DFFDB] cursor-pointer">About</li>
          </Link>
          <Link href="/hackiniiitp/teams">
            <li className="hover:text-[#4DFFDB] cursor-pointer">Teams</li>
          </Link>
          <Link href="/hackiniiitp/submit">
            <li className="hover:text-[#4DFFDB] cursor-pointer">Submit Project</li>
          </Link>
          {user ? (
            <Link href="/hackiniiitp/profile">
              <li className="hover:text-[#4DFFDB] cursor-pointer capitalize">
                {user}
              </li>
            </Link>
          ) : (
            <Link href="/hackiniiitp/login">
              <li className="hover:text-[#4DFFDB] cursor-pointer">
                Login / Register
              </li>
            </Link>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Navbarhack;
