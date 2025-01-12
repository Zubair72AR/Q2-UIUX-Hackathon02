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

const Timer = () => {
  // Set launchDate as 4 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 4);

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
      <div>
        <p className="font-medium text-xs">Days</p>
        <span className="font-semibold text-4xl">{timeLeft.days}</span>
      </div>
      <p className="font-bold text-2xl mb-[7px] text-primary">:</p>
      <div>
        <p className="font-medium text-xs">Hours</p>
        <span className="font-semibold text-4xl">{timeLeft.hours}</span>
      </div>
      <p className="font-bold text-2xl mb-[7px] text-primary">:</p>
      <div>
        <p className="font-medium text-xs">Minutes</p>
        <span className="font-semibold text-4xl">{timeLeft.minutes}</span>
      </div>
      <p className="font-bold text-2xl mb-[7px] text-primary">:</p>
      <div>
        <p className="font-medium text-xs">Seconds</p>
        <span className="font-semibold text-4xl">{timeLeft.seconds}</span>
      </div>
    </div>
  );
};

export default Timer;
