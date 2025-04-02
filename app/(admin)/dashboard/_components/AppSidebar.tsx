"use client";
import { Icon } from "@iconify/react";
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
    title: "Employee",
    url: "/dashboard/employee",
    icon: "basil:user-solid",
  },
  {
    title: "Security",
    url: "/dashboard/security",
    icon: "fluent:video-security-24-filled",
  },
  {
    title: "Support & Help",
    url: "/dashboard/support",
    icon: "ri:customer-service-fill",
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: "solar:settings-bold",
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
                      <a href={item.url} className="flex items-center">
                        <Icon icon={item.icon} width="24" height="24" />
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
