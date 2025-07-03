import React from "react";
import StatusBoxes from "../_components/StatusBoxes";
import { IStatusData } from "@/interfaces";
import PagesHeader from "../_components/PagesHeader";
import { DataTableDemo } from "./components/ShelvesTable";

const InventoryStatusData: IStatusData[] = [
  {
    src: "/images/inventoryAvailableProducts.svg",
    name: "Available Shelves",
    number: 500,
    numberColor: "#24A855",
    numberUnite: "shelves",
    percent: 7,
    percentIncreased: true,
  },
  {
    src: "/images/inventoryLowOfStock.svg",
    name: "Low Of Stock Shelves",
    number: 300,
    numberColor: "#F99141",
    numberUnite: "shelves",
    percent: 7,
    percentIncreased: true,
  },
  {
    src: "/images/inventoryOutofStock.svg",
    name: "Out Of Stock Shelves",
    number: 250,
    numberColor: "#ED1C24",
    numberUnite: "shelves",
    percent: -5,
    percentIncreased: false,
  },
];

const Page = () => {
  return (
    <div className="py-5 space-y-10">
      <PagesHeader page={"shelves"} />
      <StatusBoxes statusData={InventoryStatusData} />
      <DataTableDemo />
    </div>
  );
};

export default Page;
