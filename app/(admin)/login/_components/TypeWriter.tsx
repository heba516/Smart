"use client";
import Typewriter from "typewriter-effect";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

const TypeWriter = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Skeleton className="h-3 w-[58%] rounded-xl" />;
  return (
    <div className="font-normal text-[#FFCFCF] lg:text-2xl text-xl">
      <Typewriter
        options={{
          strings: ["Track, Analyize, optimize"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypeWriter;
