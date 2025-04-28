import React from "react";
// import { DataTableDemo } from "../_components/ProductsTable";
import StatusBoxes from "../_components/StatusBoxes";
import ViewProduct from "../_components/ViewProduct";
import { IStatusData } from "@/interfaces";
// import InventoryStatus from "../_components/InventoryStatus";
import { DataTableDemo } from "./[action]/_components/ProductsTable";
import { AddProductConfirm } from "../_components/AddProductConfirm";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

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
        <div>
            <h1 className="text-black text-[32px] font-semibold border-l-4 border-primaryRed px-4 my-2">
                Inventory
            </h1>
            <StatusBoxes statusData={InventoryStatusData} />
            <DataTableDemo />
            <Dialog>
                        <DialogContent className="max-w-2xl">
                            <VisuallyHidden.Root>
                                <DialogTitle>View Product Details</DialogTitle>
                            </VisuallyHidden.Root>
                            <ViewProduct id="68014e41e3f3a3034148f8da" />
                        </DialogContent>
                    </Dialog>
            
            <AddProductConfirm/>
        </div>
    );
};

export default Page;
