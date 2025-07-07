import React from "react";

import { ProductTable } from "./[action]/_components/ProductsTable";
import PagesHeader from "../_components/PagesHeader";
// import { InventoryProvider } from "@/context/InventoryContext";
import InventoryStatus from "./[action]/_components/InventoryStatus";

const Page = () => {
  return (
    // <InventoryProvider>
    <div className="py-5 space-y-10">
      <PagesHeader page={"inventory"} />
      <InventoryStatus />

      <ProductTable />
    </div>
    // </InventoryProvider>
  );
};

export default Page;
