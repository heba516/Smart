import React from "react";
import StatusBoxes from "../_components/StatusBoxes";
import { IStatusData } from "@/interfaces";
import { DataTableDemo } from "./[action]/_components/ProductsTable";
import { AddProductConfirm } from "./[action]/_components/AddProductConfirm";
import FormHeader from "./[action]/_components/FormHeader";

const InventoryStatusData: IStatusData[] = [
  {
    src: "/images/inventoryAvailableProducts.svg",
    name: "available products",
    number: "10,320",
    numberColor: "#24A855",
    numberUnite: "products",
    percent: 7,
    percentIncreased: true,
  },
  {
    src: "/images/inventoryLowOfStock.svg",
    name: "low of stock",
    number: "5073",
    numberColor: "#F99141",
    numberUnite: "products",
    percent: 7,
    percentIncreased: true,
  },
  {
    src: "/images/inventoryOutofStock.svg",
    name: "out of stock",
    number: "893",
    numberColor: "#ED1C24",
    numberUnite: "products",
    percent: -5,
    percentIncreased: false,
  },
];

const Page = () => {
  return (
    <div className="py-5">
      <FormHeader page={"inventory"} />
      <StatusBoxes statusData={InventoryStatusData} />
      <DataTableDemo />

      <AddProductConfirm />
    </div>
  );
};

export default Page;
