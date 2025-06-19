"use client";
import Image from "next/image";
import Link from "next/link";
import SmartLogo from "@/components/SmartLogo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";

interface ILinks {
  label: string;
  href: string;
}

const NavLinks: ILinks[] = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#aboutus" },
  { label: "Download app", href: "#app" },
  { label: "Contact us", href: "#contactus" },
];

const NavBar = () => {
  return (
    <nav className="fixed z-50 w-full h-16 md:h-24 flex justify-between items-center px-5 md:px-7 lg:px-20 bg-white shadow-md">
      <SmartLogo />
      <ul className="md:flex items-center space-x-8 xl:space-x-9 hidden ml-auto">
        {NavLinks.map((link, index) => (
          <li
            key={index}
            className="font-medium text-xl hover:text-primaryRed leading-6 duration-300"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className="flex-grow-0">
        <Sheet>
          <SheetTrigger asChild>
            <Image
              src={"/images/menu.svg"}
              alt="smart"
              width={51}
              height={51}
              className="md:hidden w-10 md:w-[51px] h-10 md:h-[51px] cursor-pointer"
              loading="lazy"
            />
          </SheetTrigger>
          <SheetTitle></SheetTitle>
          <SheetContent side="top" className="h-screen text-center space-y-5">
            <SheetHeader>
              <SmartLogo />
            </SheetHeader>

            <ul className="space-y-9 mx-auto py-9 border-b border-lightGray w-fit">
              {NavLinks.map((link, index) => (
                <li
                  key={index}
                  className="font-medium text-xl hover:text-primaryRed leading-6 duration-300"
                >
                  <SheetClose asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
