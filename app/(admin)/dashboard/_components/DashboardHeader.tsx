"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Icon } from "@iconify/react";
import { CalendarDateRangePicker } from "./Calender";
import { Button } from "@/components/ui";

const DashboardHeader = () => {
  const [name, setName] = useState<string>("");
  useEffect(() => {
    const storedAdminName = Cookies.get("adminName");
    console.log(storedAdminName);
    if (storedAdminName) setName(JSON.parse(storedAdminName));
  }, []);

  return (
    <header className="mx-1 py-9 flex items-center justify-between">
      <div>
        <h1 className="text-black text-2xl font-semibold">SMART Dashboard</h1>
        <p className="text-medGray text-base font-medium">
          Hi {name.split(" ")[0]} Here’s a review to your smart markat ..
        </p>
      </div>

      <div className="flex items-center space-x-2 xl:space-x-5">
        <Button className="bg-primaryRed text-white text-base font-semibold rounded-xl h-12">
          <Icon icon="solar:export-bold" width={35} height={35} />
          Export PDF
        </Button>

        <CalendarDateRangePicker />
      </div>
    </header>
  );
};

export default DashboardHeader;
