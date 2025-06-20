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
    title: "Motion Detected After Hours",
    location: "Storage Room",
    time: 2315,
    date: 20250420,
    state: "Under Review",
  },
  {
    title: "Window Break Detected",
    location: "Ground Floor Office",
    time: 410,
    date: 20250419,
    state: "Critical",
  },
  {
    title: "Unauthorized Device Connected",
    location: "IT Room",
    time: 1125,
    date: 20250418,
    state: "Under Review",
  },
  {
    title: "Emergency Exit Opened",
    location: "North Wing",
    time: 1530,
    date: 20250417,
    state: "Resolved",
  },
  {
    title: "Power Interruption",
    location: "Main Control Room",
    time: 900,
    date: 20250416,
    state: "Critical",
  },
  {
    title: "Tampering Detected on Camera",
    location: "Loading Dock",
    time: 1235,
    date: 20250415,
    state: "Under Review",
  },
  {
    title: "Smoke Detected",
    location: "Cafeteria",
    time: 745,
    date: 20250414,
    state: "Critical",
  },
  {
    title: "Access Denied Multiple Times",
    location: "Server Room",
    time: 2000,
    date: 20250413,
    state: "Resolved",
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
