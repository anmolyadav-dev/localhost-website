"use client";
import { usePathname } from "next/navigation";
import Navbarhack from "./Navbar-hack";
import Navbar from "./Navbar";
import Navbarwoc from "./Navbar-woc";

const Navbarchoice = () => {
  const pathname = usePathname();

  return (
    <div className="fixed min-w-full top-0 z-50 ">
        <div className="container mx-auto">
          {pathname.includes("/hackiniiitp") && <Navbarhack /> || pathname.includes("/iiitpwoc") && <Navbarwoc /> || <Navbar />}
      </div>
    </div>
  );
};

export default Navbarchoice;
