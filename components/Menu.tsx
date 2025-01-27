"use client";
import Link from "next/link";
import Image from "next/image";
import SmartLogo from "./SmartLogo";
import { Icons, NavLinks } from "./NavBar";
import { Button } from "./ui";
import { Icon } from "@iconify/react";
import { useSession } from "next-auth/react";

const Menu = () => {
  const { data: session } = useSession();

  return (
    <div className="fixed top-0 left-0 bg-white w-full h-screen py-10 px-4 z-50 text-center">
      <header className="w-[90%] flex justify-between mx-auto">
        <SmartLogo />
        <Image src={"/images/X.svg"} width={24} height={24} alt="Smart" />
      </header>

      <ul className="w-[90%] mx-auto py-9 space-y-9 border-b border-lightGray">
        {NavLinks.map((link, index) => (
          <li
            key={index}
            className="font-medium text-xl leading-6 hover:text-primaryRed duration-300"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {!session && (
        <section className="w-[90%] py-9 mx-auto space-y-9 border-b border-lightGray">
          <p className="text-base text-darkGray font-normal">
            Want to benefit from a personalized experience and access exclusive
            content?
          </p>

          <div className="space-x-5">
            <Button
              size={"lg"}
              className="w-32 bg-primaryRed hover:bg-secondaryRed rounded-lg duration-300"
            >
              <Link href={"/signup"} className="text-xl font-semibold">
                Sign up
              </Link>
            </Button>
            <Button
              variant={"outline"}
              size={"lg"}
              className="w-32 hover:bg-transparent hover:border-primaryRed hover:text-primaryRed rounded-lg duration-300"
            >
              <Link href={"/login"} className="text-xl font-semibold">
                Login
              </Link>
            </Button>
          </div>

          <div className="flex space-x-5 w-fit mx-auto">
            {Icons.map((icon, index) => (
              <Link
                href={icon.href}
                key={index}
                className="w-11 h-11 p-[9px] cursor-pointer border border-medGray rounded-full hover:text-primaryRed hover:border-primaryRed duration-300"
              >
                <Icon icon={icon.label} width="25" height="26" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Menu;
