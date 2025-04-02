import React from "react";
import { DateAndTime } from "./_components/Date&Time";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex items-center p-5 space-x-6">
      <DateAndTime />
      <div className="relative p-3 bg-[#FFEDED] rounded-xl">
        <span className="absolute -right-1 -top-1 flex items-center justify-center bg-primaryRed w-5 h-5 text-white text-[13px] font-semibold rounded-full">
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
    </div>
  );
};

export default page;
