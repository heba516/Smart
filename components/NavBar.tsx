"use client";
import Image from "next/image";
import Link from "next/link";
import SmartLogo from "./SmartLogo";
import { Button, Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui";
import { Icon } from "@iconify/react";
import { useSession, signOut } from "next-auth/react";
import { userName } from "@/lib/utils";

interface INavItems {
  label: string;
  href: string;
}

export const NavLinks: INavItems[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/" },
  { label: "Shop", href: "/" },
  { label: "Contact us", href: "/" },
  { label: "Download app", href: "/" },
];

export const Icons: INavItems[] = [
  { label: "lucide:user", href: "/" },
  { label: "fluent:cart-16-regular", href: "/" },
];

const NavBar = () => {
  const { data: session } = useSession();

  return (
    <nav className="w-full z-50 flex items-center justify-between h-24 px-5 lg:px-10 bg-white">
      <SmartLogo />

      <ul className="hidden xl:flex flex-1 items-center justify-start space-x-11 ml-14">
        {NavLinks.map((link, index) => (
          <li
            key={index}
            className="font-medium text-xl leading-6 hover:text-primaryRed duration-300"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <section className="hidden xl:flex space-x-[22px] items-center">
        {session ? (
          <div className="flex items-center space-x-2 text-xl font-semibold">
            <span
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="p-3 bg-primaryRed rounded-full text-white uppercase"
            >
              {userName(session?.user?.name)}
            </span>
            <p className="hidden xl:flex items-center cursor-pointer">
              Welcome, {session?.user?.name?.split(" ")[0]}{" "}
              <Image
                className="ml-2"
                alt="smart"
                src={"/images/downarrow.svg"}
                width={10}
                height={10}
              />
            </p>
          </div>
        ) : (
          <div className="block space-x-[14px]">
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
        )}

        <div className="flex space-x-3">
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

      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={"/images/menu.svg"}
            alt="smart"
            width={51}
            height={51}
            className="cursor-pointer xl:hidden"
          />
        </SheetTrigger>
        <SheetContent side="top" className="h-screen text-center">
          <SheetHeader>
            <SmartLogo />
          </SheetHeader>
          <ul className="mx-auto py-9 space-y-9 border-b border-lightGray">
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
            <section className="py-9 mx-auto space-y-9 border-b border-lightGray">
              <p className="text-base text-darkGray font-normal">
                Want to benefit from a personalized experience and access
                exclusive content?
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
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default NavBar;
