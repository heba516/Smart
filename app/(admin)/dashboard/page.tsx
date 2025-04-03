import { Button } from "@/components/ui";
import { SidebarSeparator } from "@/components/ui/sidebar";
import { Icon } from "@iconify/react";
import { CalendarDateRangePicker } from "./_components/Calender";
import { TopProducts } from "./_components/TopProducts";
import { ChartBoxes } from "./_components/ChartBoxes";
import { SpreadOfSales } from "./_components/SpreadOfSales";

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
            <Icon icon="solar:export-bold" width={40} height={40} />
            Export PDF
          </Button>
          {/* <Button className="bg-[#F8F8F8] text-black text-sm font-semibold rounded-xl h-[52px] flex items-center px-4">
            <div className="bg-primaryRed rounded-xl flex items-center justify-center w-8 h-8">
              <Icon
                icon="uis:calender"
                width="30"
                height="30"
                className="text-white"
              />
            </div>
            <div className="flex flex-col justify-center text-start pl-2 leading-tight">
              <span>Filter Period</span>
              <span className="font-medium">2 Jan 2025 - 4 Mar 2025</span>
            </div>
          </Button> */}

          <CalendarDateRangePicker />
        </div>
      </section>

      <SidebarSeparator className="w-[75%] mx-auto" />

      <section className="grid grid-cols-3 gap-6 mt-10">
        <ChartBoxes title="Spread of sales" desc="Secondary text">
          <SpreadOfSales />

          <div className="flex items-center mt-5 mx-4">
            <span className="w-2 h-2 bg-primaryRed rounded-full mr-2"></span>
            Product 1
          </div>
        </ChartBoxes>

        <ChartBoxes title="Top Products Sold" desc="Secondary text">
          <TopProducts />

          <div className="grid grid-cols-3 gap-2 mt-5 mx-4">
            {Array.from({ length: 4 }, (_, index) => (
              <div className="flex items-center" key={index}>
                <span className="w-2 h-2 bg-primaryRed rounded-full mr-2"></span>
                Product {index + 1}
              </div>
            ))}
          </div>
        </ChartBoxes>

        <ChartBoxes title="Stock Status" desc="Secondary text">
          <TopProducts />
        </ChartBoxes>
      </section>
    </div>
  );
};

export default page;
