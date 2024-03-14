"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/store";

const Navbar = () => {
  const [user, setUser] = useRecoilState(userState);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { status, data: session } = useSession();

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
              <Link href="/about" onClick={closeMobileMenu}>
                <li className="hover:text-greenblue cursor-pointer">About</li>
              </Link>
              <Link href="/assignments" onClick={closeMobileMenu}>
                <li className="hover:text-greenblue cursor-pointer">
                  Assignments
                </li>
              </Link>
              <Link href="/events" onClick={closeMobileMenu}>
                <li className="hover:text-greenblue cursor-pointer">Events</li>
              </Link>
              {status == "authenticated" || user ? (
                <Link href="/profile" onClick={closeMobileMenu}>
                  <li className="hover:text-greenblue cursor-pointer capitalize">
                    {session?.user?.name || user}
                  </li>
                </Link>
              ) : (
                <li className="divide-x-2 flex">
                  <Link href="/login" onClick={closeMobileMenu}>
                    <div className="hover:text-greenblue cursor-pointer mr-2">
                      Login
                    </div>
                  </Link>
                  <Link href="/signup" onClick={closeMobileMenu}>
                    <div className="hover:text-greenblue cursor-pointer ml-2">
                      Register
                    </div>
                  </Link>
                </li>
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
          <Link href="/about">
            <li className="hover:text-greenblue cursor-pointer">About</li>
          </Link>
          <Link href="/assignments">
            <li className="hover:text-greenblue cursor-pointer">Assignments</li>
          </Link>
          <Link href="/events">
            <li className="hover:text-greenblue cursor-pointer">Events</li>
          </Link>
          {status == "authenticated" || user ? (
            <Link href="/profile">
              <li className="hover:text-greenblue cursor-pointer capitalize">
                {session?.user?.name || user}
              </li>
            </Link>
          ) : (
            <li className="divide-x-2 flex">
              <Link href="/login" onClick={closeMobileMenu}>
                <div className="hover:text-greenblue cursor-pointer mr-2">
                  Login
                </div>
              </Link>
              <Link href="/signup" onClick={closeMobileMenu}>
                <div className="hover:text-greenblue cursor-pointer ml-2">
                  Register
                </div>
              </Link>
            </li>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
