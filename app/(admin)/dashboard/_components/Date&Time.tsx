"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

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
    <div className="flex items-center p-3 2xl:px-5 bg-input rounded-xl space-x-1 xl:space-x-3 text-grayColor font-semibold text-base">
      <Image
        src={"/images/date.png"}
        width={23}
        height={23}
        alt="date"
        loading="lazy"
      />
      <span className="border-r border-grayColor pr-1 xl:pr-3">
        {formattedDate}
      </span>
      <span>{formattedTime}</span>
    </div>
  );
}
