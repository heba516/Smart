"use client";
import * as React from "react";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import { ISecurity } from "@/interfaces";
// import { useEffect } from "react";
// import { getAllProducts } from "@/app/api/actions/productActions";
// import { ProductTableSkeleton } from "../../_components/ProductTableSkeleton";
import DataTables from "../../_components/DataTable";
import { securityColumns as columns } from "../../_components/DataColumns";
import { ISecurity } from "@/interfaces";

const data: ISecurity[] = [
  {
    title: "Unauthorized Access Attempt",
    loction: "Main Entrance",
    time: 1045,
    date: 20250419,
    status: "Critical",
  },
  {
    title: "Camera Offline",
    loction: "Parking Lot",
    time: 2200,
    date: 20250418,
    status: "Under Review",
  },
  {
    title: "Suspicious Activity Detected",
    loction: "Warehouse Section B",
    time: 1300,
    date: 20250417,
    status: "Resolved",
  },
  {
    title: "Fire Alarm Triggered",
    loction: "2nd Floor",
    time: 1300,
    date: 20250416,
    status: "Critical",
  },
  {
    title: "Door Left Open",
    loction: "Back Exit",
    time: 1830,
    date: 20250415,
    status: "Resolved",
  },
];

export function SecurityTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  // const [data, setProducts] = React.useState<ISecurity[]>([]);
  // const [loading, setLoading] = React.useState(true);

  // useEffect(() => {
  //   async function loadProducts() {
  //     try {
  //       setLoading(true);
  //       const res = await getAllProducts();
  //       console.log(res?.data.data);

  //       setProducts(res?.data.data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   loadProducts();
  // }, []);

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  // if (loading) return <ProductTableSkeleton />;

  return <DataTables table={table} page={"security"} />;
}
