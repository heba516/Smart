import React from "react";
import { SecurityTable } from "./_components/SecurityTable";
import FormHeader from "../inventory/[action]/_components/FormHeader";

const page = () => {
  return (
    <div className="py-5">
      <FormHeader page={"security"} />
      <SecurityTable />
    </div>
  );
};

export default page;
