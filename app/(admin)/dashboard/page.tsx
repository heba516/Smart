import { Button } from "@/components/ui";
import { SidebarSeparator } from "@/components/ui/sidebar";
import { Icon } from "@iconify/react";
import { CalendarDateRangePicker } from "./_components/Calender";
import { TopProducts } from "./_components/TopProducts";
import { ChartBoxes } from "./_components/ChartBoxes";
import { SpreadOfSales } from "./_components/SpreadOfSales";
import Statistics from "./_components/Statistics";
import StockStatus from "./_components/StockStatus";
import Image from "next/image";

const page = () => {
    return (
        <div>
            <section className="w-[86%] mx-auto py-9 flex items-center justify-between">
                <div>
                    <h1 className="text-black text-2xl font-semibold">
                        SMART Dashboard
                    </h1>
                    <p className="text-medGray text-base font-medium">
                        Hi Heba Here’s a review to your smart markat ..
                    </p>
                </div>

                <div className="flex items-center space-x-5">
                    <Button className="bg-primaryRed text-white text-base font-semibold rounded-xl h-12">
                        <Icon icon="solar:export-bold" width={40} height={40} />
                        Export PDF
                    </Button>

                    <CalendarDateRangePicker />
                </div>
            </section>

            <SidebarSeparator className="w-[75%] mx-auto" />

            <Statistics />

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
                                <span className="w-2 h-2 bg-primaryRed rounded-full mr-1 text-sm"></span>
                                Product {index + 1}
                            </div>
                        ))}
                    </div>
                </ChartBoxes>

                <ChartBoxes title="Stock Status" desc="Secondary text">
                    <StockStatus />
                    <Button className="bg-primaryRed text-white text-base font-semibold rounded-xl py-3 w-[270px] mt-12 ">
                        View Stock
                        <Image
                            className=""
                            src="/images/viewStockArrow.svg"
                            width={19}
                            height={19}
                            alt="arrow"
                        />
                    </Button>
                </ChartBoxes>
            </section>
        </div>
    );
};

export default page;
