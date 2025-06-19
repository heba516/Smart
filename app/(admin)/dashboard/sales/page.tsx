<<<<<<< HEAD
import React from "react";

const page = () => {
  return <div>page</div>;
=======
"use client"
import FormHeader from "../inventory/[action]/_components/FormHeader";
import { SalesLineChart } from "./components/SalesLineChart";
const page = () => {
  return <div className="py-5 space-y-10">
    <FormHeader page={"sales"} />
    <SalesLineChart />
  </div>;
>>>>>>> ceace74e382eb631f6b01db592711370451365fe
};

export default page;
