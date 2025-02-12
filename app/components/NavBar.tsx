"use client";
import Image from "next/image";
import Link from "next/link";
import SmartLogo from "../../components/SmartLogo";
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
} from "../../components/ui";
import { Icon } from "@iconify/react";
import { useSession, signOut } from "next-auth/react";
import Cookies from "js-cookie";
import { logout } from "@/app/api/actions/auth";
import { userNameSplitFun } from "@/lib/utils";

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

    const isLoggedIn = !!Cookies.get("token");
    const getUserName = Cookies.get("userName");
    const userName = getUserName ? JSON.parse(getUserName) : null;

    const isAuthenticated = session || isLoggedIn;

    return (
        <nav className="flex justify-between items-center bg-white px-5 md:px-7 lg:px-20 w-full h-16 md:h-24">
            <SmartLogo />
            <ul className="xl:flex flex-1 justify-start items-center space-x-9 hidden ml-14">
                {NavLinks.map((link, index) => (
                    <li
                        key={index}
                        className="font-medium text-xl hover:text-primaryRed leading-6 duration-300"
                    >
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>

            <section className="flex items-center space-x-2 md:space-x-[22px]">
                {isAuthenticated ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center space-x-2 font-semibold text-lg md:text-xl">
                                <span className="bg-primaryRed p-2 md:p-3 rounded-full text-white uppercase cursor-pointer">
                                    {isLoggedIn
                                        ? userNameSplitFun(userName)
                                        : userNameSplitFun(session?.user?.name)}
                                </span>
                                <p className="xl:flex items-center hidden cursor-pointer">
                                    Welcome,{" "}
                                    {userName?.split(" ")[0] ||
                                        session?.user?.name?.split(" ")[0]}{" "}
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
                                    className="w-full cursor-pointer"
                                    onClick={() => {
                                        logout();
                                        signOut({ callbackUrl: "/login" });
                                    }}
                                >
                                    Logout
                                </span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <div className="xl:block space-x-[14px] hidden">
                        <Button
                            size={"lg"}
                            className="bg-primaryRed hover:bg-secondaryRed rounded-lg w-32 duration-300"
                        >
                            <Link
                                href={"/signup"}
                                className="font-semibold text-xl"
                            >
                                Sign up
                            </Link>
                        </Button>
                        <Button
                            variant={"outline"}
                            size={"lg"}
                            className="hover:border-primaryRed hover:bg-transparent rounded-lg w-32 hover:text-primaryRed duration-300"
                        >
                            <Link
                                href={"/login"}
                                className="font-semibold text-xl"
                            >
                                Login
                            </Link>
                        </Button>
                    </div>
                )}

                <div className="xl:flex space-x-3 hidden">
                    {Icons.map((icon, index) => (
                        <Link
                            href={session ? `${icon.href}` : `/login`}
                            key={index}
                            className="border-medGray hover:border-primaryRed p-[9px] border rounded-full w-11 h-11 duration-300 cursor-pointer"
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
                            className="xl:hidden w-10 md:w-[51px] h-10 md:h-[51px] cursor-pointer"
                            loading="lazy"
                        />
                    </SheetTrigger>
                    <SheetTitle></SheetTitle>
                    <SheetContent side="top" className="h-screen text-center">
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
                                        <Link href={link.href}>
                                            {link.label}
                                        </Link>
                                    </SheetClose>
                                </li>
                            ))}
                        </ul>
                        {!isAuthenticated && (
                            <section className="space-y-9 mx-auto py-9 border-b border-lightGray">
                                <p className="font-normal text-base text-darkGray">
                                    Want to benefit from a personalized
                                    experience and access exclusive content?
                                </p>

                                <div className="space-x-5">
                                    <Button
                                        size={"lg"}
                                        className="bg-primaryRed hover:bg-secondaryRed rounded-lg w-32 duration-300"
                                    >
                                        <Link
                                            href={"/signup"}
                                            className="font-semibold text-xl"
                                        >
                                            Sign up
                                        </Link>
                                    </Button>
                                    <Button
                                        variant={"outline"}
                                        size={"lg"}
                                        className="hover:border-primaryRed hover:bg-transparent rounded-lg w-32 hover:text-primaryRed duration-300"
                                    >
                                        <Link
                                            href={"/login"}
                                            className="font-semibold text-xl"
                                        >
                                            Login
                                        </Link>
                                    </Button>
                                </div>

                                <div className="flex space-x-5 mx-auto w-fit">
                                    {Icons.map((icon, index) => (
                                        <Link
                                            href={icon.href}
                                            key={index}
                                            className="border-medGray hover:border-primaryRed p-[9px] border rounded-full w-11 h-11 hover:text-primaryRed duration-300 cursor-pointer"
                                        >
                                            <Icon
                                                icon={icon.label}
                                                width="25"
                                                height="26"
                                            />
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
