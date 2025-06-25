"use client";
import Image from "next/image";
import { AdminProfile } from "./AdminProfile";
import { VerticalSeparator } from "./VerticalSeparator";
import { DateAndTime } from "./Date&Time";
import { useState, useEffect } from "react";
import { NavBarSkeleton } from "./skeleton/NavBarSkeleton";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Separator,
  Input,
} from "@/components/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import * as DialogPrimitive from "@radix-ui/react-dialog";

interface ISearch {
  title: string;
  link: string;
}

const NavBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [defaultSearch, setDefaultSearch] = useState<ISearch[]>([
    {
      title: "Customers",
      link: "/dashboard/customers",
    },
    {
      title: "Sales",
      link: "/dashboard/sales",
    },
    {
      title: "Inventory",
      link: "/dashboard/inventory",
    },
    {
      title: "Security",
      link: "/dashboard/security",
    },
  ]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <NavBarSkeleton />;
  // absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none
  return (
    <nav className="flex items-center justify-center space-x-3 2xl:space-x-9">
      <Dialog>
        <DialogTrigger>
          <div className="w-[350px] xl:w-[450px] h-[45px] flex items-center space-x-3 bg-lightGray rounded-xl px-8 cursor-pointer">
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
            <p className="text-grayColor">Search here...</p>
          </div>
        </DialogTrigger>
        <DialogContent className="w-1/2">
          <DialogHeader className="mt-3">
            <DialogTitle></DialogTitle>
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
              <Input
                type="search"
                className="w-full h-[45px] bg-[#F2F2F2] rounded-xl outline-none px-12 border-none focus:outline-none focus:border-none focus:shadow-none"
                placeholder="Search Here..."
              />
            </div>
          </DialogHeader>
          <Separator />

          <section className="space-y-1">
            {defaultSearch.map((item, index) => (
              <DialogPrimitive.Close key={index} className="block" asChild>
                <Link
                  className="hover:bg-lightGray px-4 py-3 rounded-lg flex items-center w-full"
                  href={item.link}
                >
                  <ArrowRight size={17} className="mr-2" />
                  {item.title}
                </Link>
              </DialogPrimitive.Close>
            ))}
          </section>
        </DialogContent>
      </Dialog>

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
