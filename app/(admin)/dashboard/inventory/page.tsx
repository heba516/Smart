import React from "react";
import { DataTableDemo } from "../_components/ProductsTable";
import InventoryStatus from "../_components/InventoryStatus";

const page = () => {
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
