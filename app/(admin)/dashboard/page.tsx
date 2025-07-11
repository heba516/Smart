import Image from "next/image";
import Link from "next/link";
import { IStatusData } from "@/interfaces";
import { Button, SidebarSeparator } from "@/components/ui";
import { ChartBoxes } from "./_components/ChartBoxes";
import { SalesLineChart } from "./sales/components/SalesLineChart";
import StockStatus from "./_components/StockStatus";
import StatusBoxes from "./_components/StatusBoxes";
import { ProductTable } from "./inventory/[action]/_components/ProductsTable";
import DashboardHeader from "./_components/DashboardHeader";

const DashboardStatusData: IStatusData[] = [
  {
    src: "/images/dashboardActiveCustomers.svg",
    name: "Active Customers",
    number: 300,
    numberUnite: "users",
    numberColor: "#24A855",
    percent: 7,
    percentIncreased: true,
  },
  {
    src: "/images/dashboardTotalCustomers.svg",
    name: "Total Customers",
    number: 2321,
    numberUnite: "users",
    numberColor: "#24A855",
    percent: 7,
    percentIncreased: true,
  },
  {
    src: "/images/dashboardTotalProductssaled.svg",
    name: " Total Products saled",
    number: 892,
    numberUnite: "products",
    numberColor: "#24A855",
    percent: -3,
    percentIncreased: false,
  },
  {
    src: "/images/dashboardTotalSales.svg",
    name: "Total Sales",
    number: 32.123,
    numberUnite: "EGP",
    numberColor: "#24A855",
    percent: 7,
    percentIncreased: true,
  },
];

const page = () => {
  return (
    <div>
      {/* <header className="mx-1 py-9 flex items-center justify-between">
        <div>
          <h1 className="text-black text-2xl font-semibold">SMART Dashboard</h1>
          <p className="text-medGray text-base font-medium">
            Hi Heba Here’s a rSeview to your smart markat ..
          </p>
        </div>

        <div className="flex items-center space-x-2 xl:space-x-5">
          <Button className="bg-primaryRed text-white text-base font-semibold rounded-xl h-12">
            <Icon icon="solar:export-bold" width={35} height={35} />
            Export PDF
          </Button>

          <CalendarDateRangePicker />
        </div>
      </header> */}
      <DashboardHeader />

      <SidebarSeparator className="w-[75%] mx-auto" />

      <StatusBoxes statusData={DashboardStatusData} />

      <section className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4">
        <Link href={"/dashboard/sales"} className="xl:w-[70%]">
          <SalesLineChart />
        </Link>
        <div className="xl:w-[30%]">
          <ChartBoxes title="Stock Status" desc="Secondary text">
            <StockStatus />
            <Button
              asChild
              className="bg-primaryRed text-white text-base font-semibold rounded-xl py-3 w-[270px] mt-6 mx-auto"
            >
              <Link href={"/dashboard/inventory"}>
                View Stock
                <Image
                  src="/images/viewStockArrow.svg"
                  width={19}
                  height={19}
                  alt="arrow"
                />
              </Link>
            </Button>
          </ChartBoxes>
        </div>
      </section>

      <section className="mt-10 max-w-full">
        <ProductTable />
      </section>
    </div>
  );
};

export default page;
