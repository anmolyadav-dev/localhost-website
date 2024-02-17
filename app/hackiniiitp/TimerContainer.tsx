import React, { useState, useEffect } from "react";
import { NumberBox } from "./NumberBox";

interface TimeProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

export const TimerContainer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeProps>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const currentDate = new Date();
      const targetDate = new Date("2024-02-23T00:00:00");

      // Calculate the difference in milliseconds between the current time and the target date
      const difference = targetDate.getTime() - currentDate.getTime();

      if (difference > 0) {
        // Calculate days, hours, minutes, and seconds from the difference
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Update state with the calculated time
        setTimeLeft({
          days: formatTime(days),
          hours: formatTime(hours),
          minutes: formatTime(minutes),
          seconds: formatTime(seconds),
        });
      }
    };

    const formatTime = (time: number): string => {
      return time < 10 ? `0${time}` : `${time}`;
    };

    // Call calculateTimeLeft immediately and then every second
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" rounded-xl">
      <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2  rounded-xl md:px-6 md:py-8 ">
        <NumberBox num={timeLeft.days} unit="Days" flip={false} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">
          :
        </span>
        <NumberBox num={timeLeft.hours} unit="Hours" flip={false} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">
          :
        </span>
        <NumberBox num={timeLeft.minutes} unit="Minutes" flip={false} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">
          :
        </span>
        <NumberBox num={timeLeft.seconds} unit="Seconds" flip={false} />
      </div>
    </div>
  );
};
