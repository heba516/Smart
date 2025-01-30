"use client";
import Image from "next/image";
import Link from "next/link";
import SmartLogo from "./SmartLogo";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui";
import { Icon } from "@iconify/react";
import { useSession, signOut } from "next-auth/react";
import { userName } from "@/lib/utils";

interface ILinks {
  label: string;
  href: string;
}

const NavLinks: ILinks[] = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#aboutus" },
  { label: "Shop", href: "/" },
  { label: "Download app", href: "/" },
  { label: "Contact us", href: "/" },
];

const Icons: ILinks[] = [
  { label: "/images/user.svg", href: "/" },
  { label: "/images/cart.svg", href: "/" },
];

const DropDownMenu: ILinks[] = [
  {
    label: "show profile",
    href: "/",
  },
  {
    label: "order history",
    href: "/",
  },
  {
    label: "settings",
    href: "/",
  },
];

const NavBar = () => {
  const { data: session } = useSession();

  return (
    <nav className="w-full flex items-center justify-between h-16 md:h-24 px-5 md:px-7 lg:px-20 bg-white">
      <SmartLogo />
      <ul className="hidden xl:flex flex-1 items-center justify-start space-x-9 ml-14">
        {NavLinks.map((link, index) => (
          <li
            key={index}
            className="font-medium text-xl leading-6 hover:text-primaryRed duration-300"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <section className="flex space-x-2 md:space-x-[22px] items-center">
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center space-x-2 text-lg md:text-xl font-semibold">
                <span className="cursor-pointer p-2 md:p-3 bg-primaryRed rounded-full text-white uppercase">
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
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {DropDownMenu.map((itm) => (
                <DropdownMenuItem key={itm.label}>
                  <Link className="w-full" href={itm.href}>
                    {itm.label}
                  </Link>
                </DropdownMenuItem>
              ))}

              <DropdownMenuItem>
                <span
                  className="cursor-pointer w-full"
                  onClick={() => signOut({ callbackUrl: "/login" })}
                >
                  Logout
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="hidden xl:block space-x-[14px]">
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

        <div className="hidden xl:flex space-x-3">
          {Icons.map((icon, index) => (
            <Link
              href={session ? `${icon.href}` : `/login`}
              key={index}
              className="w-11 h-11 p-[9px] cursor-pointer border border-medGray rounded-full hover:border-primaryRed duration-300"
            >
              <Image
                src={icon.label}
                alt="smart"
                width={25}
                height={25}
                className="cursor-pointer"
              />
            </Link>
          ))}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Image
              src={"/images/menu.svg"}
              alt="smart"
              width={51}
              height={51}
              className="cursor-pointer xl:hidden w-10 h-10 md:w-[51px] md:h-[51px]"
            />
          </SheetTrigger>
          <SheetTitle></SheetTitle>
          <SheetContent side="top" className="h-screen text-center">
            <SheetHeader>
              <SmartLogo />
            </SheetHeader>

            <ul className=" w-fit mx-auto py-9 space-y-9 border-b border-lightGray">
              {NavLinks.map((link, index) => (
                <li
                  key={index}
                  className="font-medium text-xl leading-6 hover:text-primaryRed duration-300"
                >
                  <SheetClose asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </SheetClose>
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
      </section>
    </nav>
  );
};

export default NavBar;
