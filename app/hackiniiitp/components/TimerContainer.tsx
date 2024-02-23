import React, { useState, useEffect } from "react";
import { NumberBox } from "./NumberBox";

interface TimerContainerProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

export const TimerContainer: React.FC<TimerContainerProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <div className=" rounded-xl">
      <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2  rounded-xl md:px-6 md:py-8 ">
        <NumberBox num={days} unit="Days" flip={false} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">
          :
        </span>
        <NumberBox num={hours} unit="Hours" flip={false} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">
          :
        </span>
        <NumberBox num={minutes} unit="Minutes" flip={false} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">
          :
        </span>
        <NumberBox num={seconds} unit="Seconds" flip={false} />
      </div>
    </div>
  );
};
