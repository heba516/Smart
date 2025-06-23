import type { Metadata } from "next";
import { AppSidebar } from "./_components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
// import { DateAndTime } from "./_components/Date&Time";
// import { VerticalSeparator } from "./_components/VerticalSeparator";
// import Image from "next/image";
// import { AdminProfile } from "./_components/AdminProfile";
import TheftAlert from "./security/_components/TheftAlert";
import NavBar from "./_components/NavBar";

// import TheftAlertClient from "@/app/(admin)/dashboard/_components/ClientWrapper";

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
    <SidebarProvider>
      <AppSidebar />
      <TheftAlert />
      <main className="w-10/12 p-6">
        <NavBar />
        {/* <header className="flex items-center justify-center space-x-3 2xl:space-x-9">
          <div className="relative">
            <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              className="w-[350px] xl:w-[450px] h-[45px] bg-[#F2F2F2] rounded-xl outline-none px-12"
              placeholder="Search Here..."
            />
          </div>

          <VerticalSeparator />

          <DateAndTime />

          <VerticalSeparator />

          <div className="relative p-2 2xl:p-3 bg-lightGray rounded-xl">
            <span className="absolute -right-1.5 -top-1.5 flex items-center justify-center bg-primaryRed w-[22px] h-[22px] text-white text-[13px] font-semibold rounded-full">
              12
            </span>
            <Image
              src={"/images/notification.png"}
              width={26}
              height={26}
              alt="date"
              loading="lazy"
            />
          </div>

          <VerticalSeparator />

          <AdminProfile />
        </header> */}
        {children}
      </main>
    </SidebarProvider>
  );
}
