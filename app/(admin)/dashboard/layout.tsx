import type { Metadata } from "next";
import { AppSidebar } from "./_components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DateAndTime } from "./_components/Date&Time";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { VerticalSeparator } from "./_components/VerticalSeparator";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    template: "Dashboard - %s",
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
      <main className="w-10/12 p-6">
        <header className="flex items-center justify-center space-x-9">
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
              className=" w-[450px] h-[45px] bg-[#F2F2F2] rounded-xl outline-none px-12"
              placeholder="Search Here..."
            />
          </div>

          <VerticalSeparator />

          <DateAndTime />

          <VerticalSeparator />

          <div className="relative p-3 bg-[#FFDBDB] rounded-xl">
            <span className="absolute -right-1 -top-1 flex items-center justify-center bg-primaryRed w-5 h-5 text-white text-[13px] font-semibold rounded-full">
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

          <div className="flex items-center space-x-3 text-base font-semibold text-medGray">
            Hello, <span className="text-grayColor ml-1">Heba</span>
            <Avatar className="h-[50px] w-[50px]">
              <AvatarImage
                src="/images/avatar.avif"
                alt="@shadcn"
                className="border-2 border-primaryRed rounded-full"
              />
            </Avatar>
          </div>
        </header>
        {children}
      </main>
    </SidebarProvider>
  );
}
