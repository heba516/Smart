import React from "react";
import InventoryStatus from "../_components/InventoryStatus";
import { DataTableDemo } from "../_components/ProductsTable";

const page = async () => {
  return (
    <div>
      <h1 className="text-black text-[32px] font-semibold border-l-4 border-primaryRed px-4 my-2">
        Inventory
      </h1>
      <InventoryStatus />
      <DataTableDemo />
    </div>
  );
};

export default page;
