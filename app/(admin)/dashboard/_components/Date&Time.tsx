"use client";
import { useState, useEffect } from "react";

export function DateAndTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(currentTime);

  const formattedTime = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(currentTime);

  return (
    <div className="p-3 bg-[#FFEDED] rounded-xl space-x-3 text-grayColor font-semibold">
      <span className="border-r border-grayColor pr-3">{formattedDate}</span>
      <span>{formattedTime}</span>
    </div>
  );
}
