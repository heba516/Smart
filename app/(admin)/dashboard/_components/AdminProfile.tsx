"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const AdminProfile = () => {
  const adminName = localStorage.getItem("adminName");

  return (
    <div className="flex items-center space-x-3 text-base font-semibold text-medGray">
      Hello,
      <span className="text-grayColor ml-1">
        {adminName && JSON.parse(adminName)}
      </span>
      <Avatar className="h-[50px] w-[50px]">
        <AvatarImage
          src="/images/avatar.avif"
          alt="@shadcn"
          className="border-2 border-primaryRed rounded-full"
        />
      </Avatar>
    </div>
  );
};
