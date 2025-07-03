"use client";
import { IStatusData } from "@/interfaces";
import PagesHeader from "../_components/PagesHeader";
import { SalesLineChart } from "./components/SalesLineChart";
import { SalesTopProducts } from "./components/SalesTopProducts";
import StatusBoxes from "../_components/StatusBoxes";

const SalesStatusData: IStatusData[] = [
  {
    src: "/images/salesTotalSalesToday.svg",
    name: "Total Sales Today",
    number: 10320,
    numberColor: "black",
    numberUnite: "EGP",
    percent: 7,
    percentIncreased: true,
  },
  {
    src: "/images/salesNumofTransactions.svg",
    name: "Num of Transactions",
    number: 230,
    numberColor: "black",
    numberUnite: "transncitions",
    percent: 7,
    percentIncreased: true,
  },
  {
    src: "/images/salesAvgBasketValue.svg",
    name: "Avg. Basket Value",
    number: 893,
    numberColor: "black",
    numberUnite: "products",
    percent: -5,
    percentIncreased: false,
  },
];

const page = () => {
  return (
    <div className="py-5 space-y-10">
      <PagesHeader page={"sales"} />
      <StatusBoxes statusData={SalesStatusData} />
      <SalesLineChart />
      <SalesTopProducts />
    </div>
  );
};

export default page;
