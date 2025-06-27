"use client";
import { AdminProfile } from "./AdminProfile";
import { VerticalSeparator } from "./VerticalSeparator";
import { DateAndTime } from "./Date&Time";
import { useState, useEffect } from "react";
import { NavBarSkeleton } from "./skeleton/NavBarSkeleton";
import GlobalSearch from "./GlobalSearch";
import Notifications from "./Notifications";



const NavBar = () => {
    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <NavBarSkeleton />;

    return (
        <nav className="flex items-center justify-center space-x-3 2xl:space-x-9">

            <GlobalSearch />

            <VerticalSeparator />

            <DateAndTime />

            <VerticalSeparator />

            <Notifications />

            <VerticalSeparator />

            <AdminProfile />
        </nav>
    );
};

export default NavBar;
