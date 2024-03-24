"use client";
import React, { useEffect } from "react";
import Leaderboard from "./lb";
import confetti from "canvas-confetti";

const Page = () => {
  useEffect(() => {
    const duration = 10 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: any, max: any) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);

    // Clean up interval
    return () => clearInterval(interval);
  }, []);

  const users = [
    { id: 1, name: "Kitse", score: 96 },
    { id: 2, name: "Code of Duty", score: 90 },
    { id: 3, name: "Duo Devers", score: 89.5 },
    { id: 4, name: "Binary Bosses", score: 89 },
    { id: 5, name: "Dyanamic Coders", score: 84.5 },
    { id: 6, name: "The Explorers", score: 81.5 },
    { id: 7, name: "QuickSilvers", score: 80.5 },
    { id: 8, name: "Dev Dyanamos", score: 80 },
    { id: 9, name: "Error_4", score: 78.5 },
    { id: 10, name: "Alpine", score: 78 },
    { id: 11, name: "Error404", score: 76.5 },
    { id: 12, name: "The Kalki", score: 72.5 },
    { id: 13, name: "Tech Titans", score: 68.5 },
    { id: 14, name: "Hardcore", score: 68.5 },
    { id: 15, name: "Developing Ninjas", score: 61 },
    { id: 16, name: "Galaxy Coders", score: 60.5 },
    { id: 17, name: "Amateurers", score: 56 },
  ];

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center text-white">
      <div className="pt-32">
        <Leaderboard users={users} />
      </div>
    </div>
  );
};

export default Page;
