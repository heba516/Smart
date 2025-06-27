"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export function DateAndTime() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentTime(new Date());

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (!currentTime) return null;

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
    <div className="md:min-w-fit xl:w-[45%] flex items-center p-1 md:py-2 lg:px-2 xl:px-5 bg-lightGray rounded-xl md:space-x-1 lg:space-x-2 xl:space-x-5 text-grayColor font-semibold text-base">
      <Image
        src="/images/date.png"
        width={23}
        height={23}
        alt="date"
        className="hidden sm:block"
      />
      <span className="border-r border-grayColor lg:pr-1 xl:pr-5">
        {formattedDate}
      </span>
      <span>{formattedTime}</span>
    </div>
  );
}
