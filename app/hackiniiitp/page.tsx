"use client";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { TimerContainer } from "./TimerContainer";

interface TimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Home: NextPage = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    // Set the target date to February 23, 2024, 00:00 AM
    const targetDate = new Date("2024-02-23T00:00:00").getTime();

    const updateTime = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      // Calculate days, hours, minutes, and seconds remaining
      const newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      // If the countdown is over, clear the interval
      if (difference <= 0) {
        clearInterval(updateTime);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(updateTime);
  }, []);

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <h2 className="font-[mine] text-4xl lg:text-6xl text-white pt-32 px-10">
        HACK
        <span className="text-[#4DFFDB]">IN</span> IIITP
      </h2>
      <h4 className="text-white text-center mt-4 text-5xl lg:text-7xl font-[northwood]">
        Registration Opens in
      </h4>
      <div className="flex flex-col items-center">
        <TimerContainer
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    </div>
  );
};

export default Home;
