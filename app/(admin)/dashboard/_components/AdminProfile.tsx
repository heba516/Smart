"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export const AdminProfile = () => {
  const [adminName, setAdminName] = useState<string | null>(null);

  useEffect(() => {
    const storedAdminName = Cookies.get("adminName");
    if (storedAdminName) {
      setAdminName(JSON.parse(storedAdminName));
    }
  }, []);

  return (
    <div className="w-[35%] flex items-center xl:space-x-4 text-base font-semibold text-medGray">
      Hello,
      <span className="text-grayColor ml-1">{adminName}</span>
      <Avatar className="h-[50px] w-[50px] hidden lg:block">
        <AvatarImage
          src="/images/avatar.avif"
          alt="@shadcn"
          className="border-2 border-primaryRed rounded-full"
        />
      </Avatar>
    </div>
  );
};
