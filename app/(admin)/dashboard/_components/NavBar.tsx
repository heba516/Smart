"use client";
import Image from "next/image";
import { AdminProfile } from "./AdminProfile";
import { VerticalSeparator } from "./VerticalSeparator";
import { DateAndTime } from "./Date&Time";
import { useState, useEffect } from "react";
import { NavBarSkeleton } from "./skeleton/NavBarSkeleton";

const NavBar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // ينتظر لما يتم التثبيت على المتصفح
    setIsMounted(true);
  }, []);

  if (!isMounted) return <NavBarSkeleton />;
  return (
    <nav className="flex items-center justify-center space-x-3 2xl:space-x-9">
      <div className="relative">
        <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          className="w-[350px] xl:w-[450px] h-[45px] bg-[#F2F2F2] rounded-xl outline-none px-12"
          placeholder="Search Here..."
        />
      </div>

      <VerticalSeparator />

      <DateAndTime />

      <VerticalSeparator />

      <div className="relative p-2 2xl:p-3 bg-lightGray rounded-xl">
        <span className="absolute -right-1.5 -top-1.5 flex items-center justify-center bg-primaryRed w-[22px] h-[22px] text-white text-[13px] font-semibold rounded-full">
          12
        </span>
        <Image
          src={"/images/notification.png"}
          width={26}
          height={26}
          alt="date"
          loading="lazy"
        />
      </div>

      <VerticalSeparator />

      <AdminProfile />
    </nav>
  );
};

export default NavBar;
