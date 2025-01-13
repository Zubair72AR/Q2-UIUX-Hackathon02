"use client";

import { useEffect, useState } from "react";

interface TimeCount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

// Function to calculate the time left
const getTimeLeft = (expiry: string): TimeCount => {
  let days = "0";
  let hours = "0";
  let minutes = "0";
  let seconds = "0";

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mnt = Math.floor((difference / (1000 * 60)) % 60);
  const snd = Math.floor((difference / 1000) % 60);

  days = dys < 10 ? `0${dys}` : dys.toString();
  hours = hrs < 10 ? `0${hrs}` : hrs.toString();
  minutes = mnt < 10 ? `0${mnt}` : mnt.toString();
  seconds = snd < 10 ? `0${snd}` : snd.toString();

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const EnhanceMusicTimer = () => {
  // Set launchDate as 4 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 6);

  const [timeLeft, setTimeLeft] = useState<TimeCount>(
    getTimeLeft(launchDate.toISOString())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate.toISOString()));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [1000]);

  return (
    <div className="flex justify-start items-end gap-3">
      <div className="flex flex-col justify-center items-center w-16 h-16 rounded-full bg-white">
        <span className="font-semibold text-xl leading-none text-black">
          {timeLeft.days}
        </span>
        <p className="font-medium text-[11px] leading-none text-black">Days</p>
      </div>

      <div className="flex flex-col justify-center items-center w-16 h-16 rounded-full bg-white">
        <span className="font-semibold text-xl leading-none text-black">
          {timeLeft.hours}
        </span>
        <p className="font-medium text-[11px] leading-none text-black">Hours</p>
      </div>

      <div className="flex flex-col justify-center items-center w-16 h-16 rounded-full bg-white">
        <span className="font-semibold text-xl leading-none text-black">
          {timeLeft.minutes}
        </span>
        <p className="font-medium text-[11px] leading-none text-black">
          Minutes
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-16 h-16 rounded-full bg-white">
        <span className="font-semibold text-xl leading-none text-black">
          {timeLeft.seconds}
        </span>
        <p className="font-medium text-[11px] leading-none text-black">
          Seconds
        </p>
      </div>
    </div>
  );
};

export default EnhanceMusicTimer;
