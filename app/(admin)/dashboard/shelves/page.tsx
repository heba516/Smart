import React from "react";
// import StatusBoxes from "../_components/StatusBoxes";
import PagesHeader from "../_components/PagesHeader";
import { DataTableDemo } from "./components/ShelvesTable";
import { ShelvesStatus } from "./components/ShelvesStatus";

const Page = () => {
  return (
    <div className="py-5 space-y-10">
      <PagesHeader page={"shelves"} />
      {/* <StatusBoxes statusData={InventoryStatusData} /> */}
      <ShelvesStatus />
      <DataTableDemo />
    </div>
  );
};

export default Page;
