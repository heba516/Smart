import React from "react";
import FormHeader from "../inventory/[action]/_components/FormHeader";
import { CustomersTable } from "./components/CustomersTable";

const page = () => {
  return <div className="py-5 space-y-10">
    <FormHeader page={"customers"} />
    <CustomersTable />
  </div>;
};

export default page;
