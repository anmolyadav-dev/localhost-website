"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);

  // Function to fetch user details
  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/me");
      console.log(res.data);
      setUser(res.data.data.username);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    // For PC and Tab View
    <div className="px-10 py-5">
      <header className="navbar h-20 border-2 rounded-full bg-slate-100 bg-opacity-5 backdrop-blur-sm text-white flex justify-between items-center md:px-5 md:text-xl">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={192} height={32} />
        </Link>

        <ul className="hidden lg:flex gap-10">
          <Link href="/about">
            <li className="hover:text-[#4DFFDB] cursor-pointer">ABOUT</li>
          </Link>
          <Link href="/assignments">
            <li className="hover:text-[#4DFFDB] cursor-pointer">ASSIGNMENTS</li>
          </Link>
          <Link href="/events">
            <li className="hover:text-[#4DFFDB] cursor-pointer">EVENTS</li>
          </Link>
          {/* <Link href="/sessions">
            <li className="hover:text-[#4DFFDB] cursor-pointer">SESSIONS</li>
          </Link> */}
          {user ? (
            <Link href="/profile">
              <li className="hover:text-[#4DFFDB] cursor-pointer">
                {user}
              </li>
            </Link>
          ) : (
            <Link href="/login">
              <li className="hover:text-[#4DFFDB] cursor-pointer">
                LOGIN / REGISTER
              </li>
            </Link>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
