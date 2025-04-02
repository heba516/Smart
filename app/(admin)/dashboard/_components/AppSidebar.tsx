"use client";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
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

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Customers",
    url: "/dashboard/customers",
    icon: Inbox,
  },
  {
    title: "Sales",
    url: "/dashboard/sales",
    icon: Calendar,
  },
  {
    title: "Inventory",
    url: "/dashboard/inventory",
    icon: Search,
  },
  {
    title: "Employee",
    url: "/dashboard/employee",
    icon: Settings,
  },
  {
    title: "Security",
    url: "/dashboard/security",
    icon: Settings,
  },
  {
    title: "Support & Help",
    url: "/dashboard/support",
    icon: Settings,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarContent className="py-9">
        <SidebarGroup>
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
          <SidebarSeparator className="mt-9" />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
