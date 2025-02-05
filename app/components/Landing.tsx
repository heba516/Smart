"use client";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui";
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
    <div className="w-full h-screen relative overflow-hidden text-center lg:place-content-center space-y-20 px-1 lg:pb-14">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-10"
      >
        <source src="/images/landing.mp4" type="video/mp4" />
      </video>

      <section className="space-y-9">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white capitalize">
          {quotes[index]}
        </h1>

        <p className="text-base lg:text-xl font-bold text-border/75">
          Scan, shop, and pay effortlessly with our innovative retail system.
        </p>

        <div className="font-medium text-white w-fit mx-auto flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-4">
          <Button
            variant={"outline"}
            size={"lg"}
            className="bg-white/15 backdrop-blur-md shadow-2xl text-xl rounded-xl lg:h-14 px-10"
          >
            Get Started
          </Button>
          <Button
            variant={"ghost"}
            size={"lg"}
            className="hover:bg-transparent hover:text-white rounded-xl border border-transparent hover:border-white text-xl lg:h-14 px-10"
          >
            Know More
          </Button>
        </div>
      </section>

      <Link
        href={"#aboutus"}
        className="w-9 h-12 rounded-full border-[3px] border-white flex justify-center py-2 mx-auto"
      >
        <span className="w-[5px] h-[5px] bg-white rounded-full animate-move-dot"></span>
      </Link>
    </div>
  );
};

export default Landing;
