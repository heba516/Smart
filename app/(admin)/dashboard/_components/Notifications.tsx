"use client";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";


export default function Notifications() {
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState<"all" | "unread">("all");

    const notifications = [
        {
            id: 1,
            title: "Sales Notifications",
            message: "Product Edita Molto Croissant reached 100 sales today",
            time: "New",
            icon: "/images/salesNotifications.svg",
            read: false,
        },
        {
            id: 2,
            title: "Inventory Notifications",
            message:
                "Product Edita Molto Croissant has been out of stock for 2 days",
            time: "New",
            icon: "/images/inventoryNotifications.svg",
            read: false,
        },
        {
            id: 3,
            title: "Customer Activity",
            message:
                "Customer Sara M.ali just completed her 5th purchase consider marking as VIP",
            time: "Yesterday",
            icon: "/images/customerNotifications.svg",
            read: true,
        },
        {
            id: 4,
            title: "Security & Theft Detection",
            message: "Suspicious behavior detected near shelf A3 at 4:15 PM",
            time: "Earlier",
            icon: "/images/securityNotifications.svg",
            read: true,
        },
    ];

    const unreadCount = notifications.filter((n) => !n.read).length;
    const allCount = notifications.length;

    // Simplified filter logic
    const filteredNotifications =
        filter === "all" ? notifications : notifications.filter((n) => !n.read);

    // Group notifications by time
    const groupedNotifications = {
        new: filteredNotifications.filter((n) => n.time === "New"),
        yesterday: filteredNotifications.filter((n) => n.time === "Yesterday"),
        earlier: filteredNotifications.filter((n) => n.time === "Earlier"),
    };

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="relative h-12 w-12 p-2 bg-lightGray rounded-xl"
                >
                    <span className="absolute -right-1.5 -top-1.5 flex items-center justify-center bg-primaryRed w-[22px] h-[22px] text-white text-[13px] font-semibold rounded-full">
                        {unreadCount}
                    </span>
                    <Image
                        src={
                            open
                                ? "/images/notificationOpen.svg"
                                : "/images/notificationClose.svg"
                        }
                        width={20}
                        height={20}
                        alt="Notifications"
                    />
                    

                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="w-[500px] rounded-lg p-0 shadow-lg"
                align="end"
                forceMount
            >
                {/* Header */}
                <div className="border-b p-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Notifications</h3>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal
                                size={18}
                                className="text-gray-400"
                            />
                        </Button>
                    </div>

                    {/* Filters */}
                    <div className="flex items-center justify-between">
                        <div className="mt-3 flex gap-4">
                            <Button
                                variant="link"
                                size="sm"
                                className={`h-8 ${
                                    filter === "all"
                                        ? "text-primaryRed underline"
                                        : "text-[#989797]"
                                }`}
                                onClick={() => setFilter("all")}
                            >
                                All{" "}
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primaryRed text-xs font-semibold text-white">
                                    {allCount}
                                </span>
                            </Button>
                            <Button
                                variant="link"
                                size="sm"
                                className={`h-8 ${
                                    filter === "unread"
                                        ? "text-primaryRed underline"
                                        : "text-[#989797]"
                                }`}
                                onClick={() => setFilter("unread")}
                            >
                                Unread
                            </Button>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 text-[#989797]"
                        >
                            View All <ChevronRight size={16} className="ml-1" />
                        </Button>
                    </div>
                </div>

                {/* Notifications List */}

                <div className="max-h-[400px] overflow-y-auto">
                    {groupedNotifications.new.length > 0 && (
                        <div className="text-center mt-3">
                            <span className="text-xs font-medium  text-[#666666] ">
                                New
                            </span>
                        </div>
                    )}
                    {/* New Notifications */}
                    {groupedNotifications.new.map((notification) => (
                        <div
                            key={notification.id}
                            className="border-b bg-[#FFEDED] p-4 mx-4 my-3 rounded-lg last:border-b-0  pe-7"
                        >
                            <div className="flex  items-center gap-3 relative">
                                <Image
                                    src="/images/notificationsDot.svg"
                                    width={7}
                                    height={7}
                                    alt="dot"
                                    className="absolute top-2 right-0"
                                />
                                <Image
                                    src={notification.icon}
                                    width={45}
                                    height={45}
                                    alt={notification.title}
                                    className="mt-1"
                                />
                                <div className="pe-7">
                                    <h4 className="font-semibold text-[#484C52]">
                                        {notification.title}
                                    </h4>
                                    <p className="mt-1 text-sm font-medium">
                                        {notification.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Yesterday Separator */}
                    {groupedNotifications.yesterday.length > 0 && (
                        <div className=" text-center">
                            <span className="text-xs font-medium  text-[#666666] ">
                                Yesterday
                            </span>
                        </div>
                    )}

                    {/* Yesterday Notifications */}
                    {groupedNotifications.yesterday.map((notification) => (
                        <div
                            key={notification.id}
                            className="border-b bg-lightGray p-4 mx-4 my-3 last:border-b-0 rounded-lg pe-5"
                        >
                            <div className="flex items-center gap-3">
                                <Image
                                    src={notification.icon}
                                    width={45}
                                    height={45}
                                    alt={notification.title}
                                    className="mt-1"
                                />
                                <div className="pe-7">
                                    <h4 className="font-semibold text-[#484C52]">
                                        {notification.title}
                                    </h4>
                                    <p className="mt-1 text-sm font-medium">
                                        {notification.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Earlier Separator */}
                    {groupedNotifications.earlier.length > 0 && (
                        <div className="text-center">
                            <span className="text-xs font-medium  text-[#666666] ">
                                Earlier
                            </span>
                        </div>
                    )}

                    {/* Earlier Notifications */}
                    {groupedNotifications.earlier.map((notification) => (
                        <div
                            key={notification.id}
                            className="border-b bg-lightGray p-4 mx-4 my-3 last:border-b-0 rounded-lg pe-5"
                        >
                            <div className="flex items-center gap-3">
                                <Image
                                    src={notification.icon}
                                    width={45}
                                    height={45}
                                    alt={notification.title}
                                    className="mt-1"
                                />
                                <div className="pe-7">
                                    <h4 className="font-semibold text-[#484C52]">
                                        {notification.title}
                                    </h4>
                                    <p className="mt-1 text-sm font-medium">
                                        {notification.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
