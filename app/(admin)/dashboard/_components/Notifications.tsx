"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui";
import { MoreHorizontal } from "lucide-react";
import { io, Socket } from "socket.io-client";
import { Icon } from "@iconify/react";

type Notification = {
  _id: string;
  title: string;
  message: string;
  createdAt: string;
  isRead: boolean;
  type: string;
};

const SOCKET_URL =
  "https://faint-ilyse-iot-based-smart-retail-system-897f175c.koyeb.app/notifications";
const TOKEN =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2ZjMGY4MWQwNTc0OThkZjNjNTA1NDEiLCJlbWFpbCI6Inlhc21lZW5heXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiWWFzbWVlbiIsImxhc3ROYW1lIjoiRWxfQXp6YXppIiwicGhvbmVOdW1iZXIiOiIwMTU1NzIxNjI3NiIsInJvbGUiOiJ1c2VyIiwidmVyaWZpY2F0aW9uQ29kZUV4cGlyZXMiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjUtMDQtMTNUMTk6MjQ6NDkuNzU3WiIsInVwZGF0ZWRBdCI6IjIwMjUtMDQtMTlUMDE6MTE6MDkuNzkzWiIsImlhdCI6MTc1MTg3NTA3OSwiZXhwIjoxNzUxOTYxNDc5fQ.eDMzivDnyERuoIF6KWC_6Ghzqw4hwVN2VP8CiCn7K_BHVWi_c38NygLeXqMZEjHJVuHJsx56bOJGMviOomeTr6mj3MBAn_Rl0ibsai_p-u_-7sFcovotcrd-jRz0JNr7QM48mHKLw7dPLs1ckI3S-Mcfzrhad20lVYvInBPwxthJWG-99D7Si3TEabPmTiJYxjheDJdNxj-nIoyuaVGBLjFNw3QKXJg35KtIQcHAKFPq9ArbBs03TO5KTqh4qWWsTzBlg5v7f2s8wAQVrjQyTa4-O5mlGQuVB9XFtneKtEhHFGmN7hdPRL4UgYQh4ssyrVjaFqclUovq67e40j_sMQ";

export default function Notifications() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState<number>(0);

  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    console.log("🔌 Initializing socket...");

    const socket = io(SOCKET_URL, {
      auth: { token: TOKEN },
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("✅ Connected to socket:", socket.id);
      socket.emit("get-notifications");
    });

    socket.on("notifications", (data: Notification[]) => {
      console.log("📦 Notifications received:", data);
      setNotifications(data);
      setUnreadCount(data.filter((n) => !n.isRead).length);
    });

    socket.on("new-notification", (data: Notification) => {
      console.log("🔔 New notification:", data);
      setNotifications((prev) => {
        const updated = [data, ...prev];
        setUnreadCount(updated.filter((n) => !n.isRead).length);
        return updated;
      });
    });

    socket.on("notification-cleared", (id: string) => {
      console.log("🗑️ Notification cleared:", id);
      setNotifications((prev) => {
        const updated = prev.filter((n) => n._id !== id);
        setUnreadCount(updated.filter((n) => !n.isRead).length);
        return updated;
      });
    });

    socket.on("notifications-marked-read", () => {
      console.log("✅ All notifications marked as read!");
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
      setUnreadCount(0);
    });

    socket.on("error", (err) => {
      console.error("🚨 Socket error:", err);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  function getNotifications() {
    socketRef.current?.emit("get-notifications");
  }

  function clearAllNotifications() {
    socketRef.current?.emit("clear-all-notifications");
    setNotifications([]);
  }

  function clearOne(id: string) {
    socketRef.current?.emit("clear-notification", id);
  }

  function markAllAsRead() {
    socketRef.current?.emit("mark-all-as-read");
    // setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    // console.log("read");
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "sales_notification":
        return "/images/salesNotifications.svg";
      case "inventory_alert":
        return "/images/inventoryNotifications.svg";
      case "customer_activity":
        return "/images/customerNotifications.svg";
      case "security_alert":
        return "/images/securityNotifications.svg";
      default:
        return "/images/inventoryNotifications.svg";
    }
  };

  const getTimeLabel = (dateString: string): string => {
    const now = new Date();
    const date = new Date(dateString);
    const diffHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    if (diffHours < 24) return "New";
    if (diffHours < 48) return "Yesterday";
    return "Earlier";
  };

  // const unreadCount = notifications.filter((n) => !n.isRead).length;
  const allCount = notifications.length;

  const filteredNotifications =
    filter === "all" ? notifications : notifications.filter((n) => !n.isRead);

  const groupedNotifications = {
    new: filteredNotifications.filter(
      (n) => getTimeLabel(n.createdAt) === "New"
    ),
    yesterday: filteredNotifications.filter(
      (n) => getTimeLabel(n.createdAt) === "Yesterday"
    ),
    earlier: filteredNotifications.filter(
      (n) => getTimeLabel(n.createdAt) === "Earlier"
    ),
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          onClick={getNotifications}
          variant="ghost"
          size="icon"
          className="relative h-12 w-10 lg:w-[7%] p-2 bg-lightGray rounded-xl"
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
            className="w-auto h-auto"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[500px] rounded-lg p-0 shadow-lg"
        align="end"
        forceMount
      >
        <div className="border-b p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal size={18} className="text-gray-400" />
            </Button>
          </div>
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
            <div className="mt-3 flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-[#989797]"
                onClick={clearAllNotifications}
              >
                Clear All
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-[#989797]"
                onClick={markAllAsRead}
              >
                Mark all as read
              </Button>
            </div>
          </div>
        </div>

        {!notifications.length ? (
          <div className="p-4 text-red-500 text-center">No Notifications</div>
        ) : (
          <div className="max-h-[400px] overflow-y-auto">
            {Object.entries(groupedNotifications).map(([group, items]) =>
              items.length > 0 ? (
                <div key={group}>
                  <div className="text-center mt-3">
                    <span className="text-xs font-medium text-[#666666]">
                      {group.charAt(0).toUpperCase() + group.slice(1)}
                    </span>
                  </div>
                  {items.map((notification) => (
                    <div
                      key={notification._id}
                      className={`border-b ${
                        group === "new" ? "bg-[#FFEDED]" : "bg-lightGray"
                      } p-4 mx-4 my-3 rounded-lg last:border-b-0 pe-7`}
                    >
                      <div className="flex items-center gap-3 relative">
                        {!notification.isRead && (
                          <Image
                            src="/images/notificationsDot.svg"
                            width={7}
                            height={7}
                            alt="dot"
                            className="absolute top-2 right-0"
                          />
                        )}
                        <Image
                          src={getNotificationIcon(notification.type)}
                          width={45}
                          height={45}
                          alt={notification.title}
                          className="mt-1 w-auto h-auto"
                        />
                        <div className="pe-7">
                          <h4 className="font-semibold text-[#484C52]">
                            {notification.title}
                          </h4>
                          <p className="mt-1 text-sm font-medium">
                            {notification.message}
                          </p>
                        </div>
                        <Icon
                          icon="line-md:trash"
                          width="20"
                          height="20"
                          onClick={() => clearOne(notification._id)}
                          className="absolute bottom-2 -right-[7px] hover:text-primaryRed transition duration-200 cursor-pointer"
                        />
                        {/* <Trash
                          size={18}
                          className="absolute bottom-2 -right-1.5 hover:text-primaryRed transition duration-200 cursor-pointer"
                        /> */}
                        {/* {!notification.isRead && (
                          <Icon
                            icon="streamline:check-solid"
                            width={15}
                            height={15}
                            className="absolute bottom-2 right-6 hover:text-green-600 transition duration-200 cursor-pointer"
                          />
                        )} */}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null
            )}
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
