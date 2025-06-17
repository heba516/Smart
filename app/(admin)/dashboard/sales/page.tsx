"use client"
import FormHeader from "../inventory/[action]/_components/FormHeader";
import { SalesLineChart } from "./components/SalesLineChart";
const page = () => {
  return <div className="py-5 space-y-10">
    <FormHeader page={"sales"} />
    <SalesLineChart />
  </div>;
};

export default page;
