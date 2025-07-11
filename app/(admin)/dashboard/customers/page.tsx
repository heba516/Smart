import React from "react";
import PagesHeader from "../_components/PagesHeader";
import { CustomersTable } from "./components/CustomersTable";
import { IStatusData } from "@/interfaces";
import StatusBoxes from "../_components/StatusBoxes";

const CustomersStatusData: IStatusData[] = [
  {
    src: "/images/customersTotalCustomers.svg",
    name: "Total Customers",
    number: 20,
    numberUnite: "customers",
    numberColor: "black",
    percent: 7,
    percentIncreased: true,
  },
  {
    src: "/images/customersActiveCustomers.svg",
    name: "Active Customers",
    number: 8,
    numberUnite: "customers",
    numberColor: "black",
    percent: 7,
    percentIncreased: true,
  },
  {
    src: "/images/customersNewCustomers.svg",
    name: "New Customers",
    number: 5,
    numberUnite: "customers",
    numberColor: "black",
    percent: 7,
    percentIncreased: true,
  },
  {
    src: "/images/customersVIPCustomers.svg",
    name: "VIP Customers",
    number: 6,
    numberUnite: "customers",
    numberColor: "black",
    percent: 7,
    percentIncreased: true,
  },
];

const page = () => {
  return (
    <div className="py-5 space-y-10">
      <PagesHeader page={"customers"} />
      <StatusBoxes statusData={CustomersStatusData} />
      <CustomersTable />
    </div>
  );
};

export default page;
