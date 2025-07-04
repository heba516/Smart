import React from "react";
// import StatusBoxes from "../_components/StatusBoxes";
// import { IStatusData } from "@/interfaces";
import { ProductTable } from "./[action]/_components/ProductsTable";
import PagesHeader from "../_components/PagesHeader";
import StatusBoxes from "../_components/StatusBoxes";
import { IStatusData } from "@/interfaces";

const InventoryStatusData: IStatusData[] = [
  {
    src: "/images/inventoryAvailableProducts.svg",
    name: "Available Products",
    number: 10320,
    numberColor: "#24A855",
    numberUnite: "products",
    percent: 7,
    percentIncreased: true,
  },
  {
    src: "/images/inventoryLowOfStock.svg",
    name: "Low Of Stock",
    number: 5073,
    numberColor: "#F99141",
    numberUnite: "products",
    percent: 7,
    percentIncreased: true,
  },
  {
    src: "/images/inventoryOutofStock.svg",
    name: "Out Of Stock",
    number: 893,
    numberColor: "#ED1C24",
    numberUnite: "products",
    percent: -5,
    percentIncreased: false,
  },
];

const Page = () => {
  return (
    <div className="py-5 space-y-10">
      <PagesHeader page={"inventory"} />
      {/* <InventoryStatus /> */}
      <StatusBoxes statusData={InventoryStatusData} />
      <ProductTable />
    </div>
  );
};

export default Page;
