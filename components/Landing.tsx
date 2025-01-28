"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui";
import Link from "next/link";

const quotes: string[] = [
  "“Discover a faster, Easier way to shop.”",
  "“Effortless shopping at your fingertips.”",
  "“Quick, easy and personalizes shopping.”",
];

const Landing = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden text-center place-content-center space-y-14 px-1">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-10"
      >
        <source src="/images/landing.mp4" type="video/mp4" />
      </video>

      <h1 className="text-4xl md:text-6xl font-extrabold text-white capitalize">
        {quotes[index]}
      </h1>

      <section className="font-medium text-white w-fit mx-auto flex flex-col md:flex-row space-y-5 md:space-y-0">
        <Button
          variant={"outline"}
          size={"lg"}
          className="bg-white/15 backdrop-blur-md shadow-2xl text-xl rounded-lg"
        >
          Get Started
        </Button>
        <Button
          variant={"ghost"}
          size={"lg"}
          className="hover:bg-transparent hover:text-white text-xl"
        >
          Know More
        </Button>
      </section>

      <Link
        href={"#aboutus"}
        className="w-8 h-11 rounded-full border-2 border-white flex justify-center py-2 mx-auto"
      >
        <span className="w-1 h-1 bg-white rounded-full animate-move-dot"></span>
      </Link>
    </div>
  );
};

export default Landing;
