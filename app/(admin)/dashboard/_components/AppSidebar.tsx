"use client";
import { Icon } from "@iconify/react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { logout } from "@/app/api/actions/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SidebarSkeleton } from "./skeleton/AppSidebarSkeleton";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: "material-symbols-light:home-rounded",
  },
  {
    title: "Customers",
    url: "/dashboard/customers",
    icon: "fa-solid:users",
  },
  {
    title: "Sales",
    url: "/dashboard/sales",
    icon: "healthicons:money-bag",
  },
  {
    title: "Inventory",
    url: "/dashboard/inventory",
    icon: "solar:box-bold",
  },
  {
    title: "Shelves",
    url: "/dashboard/shelves",
    icon: "bi:bookshelf",
  },
  // {
  //   title: "Employee",
  //   url: "/dashboard/employee",
  //   icon: "basil:user-solid",
  // },
  {
    title: "Security",
    url: "/dashboard/security",
    icon: "fluent:video-security-24-filled",
  },
  // {
  //   title: "Support & Help",
  //   url: "/dashboard/support",
  //   icon: "ri:customer-service-fill",
  // },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: "solar:settings-bold",
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const onLogOut = () => {
    logout();
    console.log("logout");
    router.push("/login");
  };
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <SidebarSkeleton />;
  return (
    <Sidebar>
      <SidebarContent className="py-9 h-full">
        <SidebarGroup className="flex flex-col h-full">
          <SidebarGroupLabel>
            <Image
              className="mx-auto w-9 h-9 md:w-11 md:h-11"
              src={"/images/logo.png"}
              width={45}
              height={45}
              alt="logo"
              loading="lazy"
            />
          </SidebarGroupLabel>
          <SidebarSeparator className="mt-5" />
          <SidebarGroupContent className="flex flex-col h-full justify-between">
            <SidebarMenu>
              {items.map((item) => {
                const isActive =
                  pathname === item.url ||
                  pathname === `${item.url}/add` ||
                  pathname.startsWith(`${item.url}/edit`);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.url} className="flex items-center">
                        <Icon icon={item.icon} width="24" height="24" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>

            <SidebarFooter className="p-1 mt-1">
              <SidebarMenuButton onClick={onLogOut}>
                <Icon icon="tabler:logout" width="24" height="24" />
                <span>LogOut</span>
              </SidebarMenuButton>
            </SidebarFooter>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
