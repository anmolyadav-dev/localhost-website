"use client";
import { usePathname } from "next/navigation";
import Navbarhack from "./Navbar-hack";
import Navbar from "./Navbar";

const Navbarchoice = () => {
  const pathname = usePathname();
  return (
    <div className="fixed min-w-full top-0 z-50 ">
      <div className=" shadow-md ">
        <div className="container mx-auto">
          {pathname.includes("/hackiniiitp") ? <Navbarhack /> : <Navbar />}
        </div>
      </div>
    </div>
  );
};

export default Navbarchoice;
