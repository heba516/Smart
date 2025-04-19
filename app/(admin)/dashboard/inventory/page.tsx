import React from "react";
import InventoryStatus from "../_components/InventoryStatus";
import ProductPage from "../_components/FetchProducts";

const page = async () => {
  return (
    <div>
      <h1 className="text-black text-[32px] font-semibold border-l-4 border-primaryRed px-4 my-2">
        Inventory
      </h1>
      <InventoryStatus />
      <ProductPage />
    </div>
  );
};

export default page;
