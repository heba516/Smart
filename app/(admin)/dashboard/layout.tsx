import type { Metadata } from "next";
import { AppSidebar } from "./_components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import TheftAlert from "./security/_components/TheftAlert";
import NavBar from "./_components/NavBar";
import { DashboardProvider } from "@/context/dashboardContext";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Dashboard",
  },
  description: "",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Dashboard",
    description: "Dashboard",
    images: {
      url: "/images/logo.png",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashboardProvider>
      <SidebarProvider>
        <AppSidebar />
        <TheftAlert />
        <main className="w-[95%] xl:w-10/12 p-6">
          <NavBar />
          {children}
        </main>
      </SidebarProvider>
    </DashboardProvider>
  );
}
