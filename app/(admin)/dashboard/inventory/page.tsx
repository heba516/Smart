"use client"
import React, { useState } from "react";
import StatusBoxes from "../_components/StatusBoxes";
import { IStatusData } from "@/interfaces";
import { DataTableDemo } from "./[action]/_components/ProductsTable";
import FormHeader from "./[action]/_components/FormHeader";
import { RestockShelf } from "./[action]/_components/RestockShelf";

const InventoryStatusData: IStatusData[] = [
  {
    src: "/images/inventoryAvailableProducts.svg",
    name: "Available Products",
    number: "10,320",
    numberColor: "#24A855",
    numberUnite: "products",
    percent: 7,
    percentIncreased: true,
  },
  {
    src: "/images/inventoryLowOfStock.svg",
    name: "Low Of Stock",
    number: "5073",
    numberColor: "#F99141",
    numberUnite: "products",
    percent: 7,
    percentIncreased: true,
  },
  {
    src: "/images/inventoryOutofStock.svg",
    name: "Out Of Stock",
    number: "893",
    numberColor: "#ED1C24",
    numberUnite: "products",
    percent: -5,
    percentIncreased: false,
  },
];

const Page = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
      <div className="py-5 space-y-10">
          <FormHeader page={"inventory"} />
          <StatusBoxes statusData={InventoryStatusData} />
          <DataTableDemo />
          <RestockShelf
              open={isDialogOpen}
              onOpenChange={setIsDialogOpen}
              productName="Cadbury Hot Chocolate"
              currentStock={123}
              maxStock={400}
              status="low"
              onRestock={(newQuantity) => {
                  // Handle restock logic
                  console.log(`Restocking with ${newQuantity} units`);
              }}
          />
      </div>
  );
};

export default Page;
