"use client";
import { IStatusData } from "@/interfaces";
import React from "react";
import StatusBoxes from "../../../_components/StatusBoxes";
import { useDashboardContext } from "@/context/dashboardContext";

const InventoryStatus = () => {
  const { availableCount, lowStockCount, outOfStockCount } =
    useDashboardContext();

  const InventoryStatusData: IStatusData[] = [
    {
      src: "/images/inventoryAvailableProducts.svg",
      name: "Available Products",
      number: availableCount,
      numberColor: "#24A855",
      numberUnite: "products",
      percent: 7,
      percentIncreased: true,
    },
    {
      src: "/images/inventoryLowOfStock.svg",
      name: "Low Of Stock",
      number: lowStockCount,
      numberColor: "#F99141",
      numberUnite: "products",
      percent: 7,
      percentIncreased: true,
    },
    {
      src: "/images/inventoryOutofStock.svg",
      name: "Out Of Stock",
      number: outOfStockCount,
      numberColor: "#ED1C24",
      numberUnite: "products",
      percent: -5,
      percentIncreased: false,
    },
  ];
  return <StatusBoxes statusData={InventoryStatusData} />;
};

export default InventoryStatus;
