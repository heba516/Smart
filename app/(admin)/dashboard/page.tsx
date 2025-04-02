import { Button } from "@/components/ui";
import { SidebarSeparator } from "@/components/ui/sidebar";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <section className="w-[86%] mx-auto py-9 flex items-center justify-between">
        <div>
          <h1 className="text-black text-2xl font-semibold">SMART Dashboard</h1>
          <p className="text-medGray text-base font-medium">
            Hi Heba Here’s a review to your smart markat ..
          </p>
        </div>

        <div className="flex items-center space-x-5">
          <Button className="bg-primaryRed text-white text-base font-semibold rounded-xl h-12">
            <Image
              src={"/images/export.png"}
              width={24}
              height={24}
              alt="date"
              loading="lazy"
            />
            Export PDF
          </Button>
          <Button className="bg-[#F8F8F8] text-black text-sm font-semibold rounded-xl h-[52px] flex items-center px-4">
            <div className="bg-primaryRed rounded-xl flex items-center justify-center w-8 h-8">
              <Image
                src={"/images/export.png"}
                width={20}
                height={20}
                alt="date"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center text-start pl-2 leading-tight">
              <span>Filter Period</span>
              <span className="font-medium">2 Jan 2025 - 4 Mar 2025</span>
            </div>
          </Button>
        </div>
      </section>
      <SidebarSeparator className="w-[75%] mx-auto" />
    </div>
  );
};

export default page;
