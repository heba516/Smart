import React from "react";
<<<<<<< HEAD

const page = () => {
  return <div>Customers</div>;
=======
import FormHeader from "../inventory/[action]/_components/FormHeader";
import { CustomersTable } from "./components/CustomersTable";

const page = () => {
  return <div className="py-5 space-y-10">
    <FormHeader page={"customers"} />
    <CustomersTable />
  </div>;
>>>>>>> ceace74e382eb631f6b01db592711370451365fe
};

export default page;
