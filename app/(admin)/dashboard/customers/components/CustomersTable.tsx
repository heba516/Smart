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
import { customersColumns as columns } from "../../_components/DataColumns";
import { ICustomer } from "@/interfaces";

const data: ICustomer[] = [
  { title: "Heba Yasser", id: "CUST001", total_orders: 12, phone: "01012345678", status: "VIP" },
  { title: "Emma Davis", id: "CUST002", total_orders: 0, phone: "01098765432", status: "Inactive" },
  { title: "Noah Wilson", id: "CUST003", total_orders: 30, phone: "01122334455", status: "Active" },
  { title: "Olivia Smith", id: "CUST004", total_orders: 5, phone: "01234567891", status: "Active" },
  { title: "Ava Brown", id: "CUST005", total_orders: 3, phone: "01011223344", status: "Active" },
  { title: "Isabella Garcia", id: "CUST006", total_orders: 0, phone: "01055667788", status: "Inactive" },
  { title: "Sophia Martinez", id: "CUST007", total_orders: 22, phone: "01199887766", status: "VIP" },
  { title: "Mia Rodriguez", id: "CUST008", total_orders: 7, phone: "01222334455", status: "Active" },
  { title: "Charlotte Lee", id: "CUST009", total_orders: 0, phone: "01033445566", status: "Inactive" },
  { title: "Amelia Walker", id: "CUST010", total_orders: 17, phone: "01144556677", status: "VIP" },
  { title: "James Allen", id: "CUST011", total_orders: 4, phone: "01066778899", status: "Active" },
  { title: "Benjamin Young", id: "CUST012", total_orders: 0, phone: "01077889900", status: "Inactive" },
  { title: "Lucas Hernandez", id: "CUST013", total_orders: 35, phone: "01211223344", status: "VIP" },
  { title: "Mason King", id: "CUST014", total_orders: 8, phone: "01155667788", status: "Active" },
  { title: "Elijah Wright", id: "CUST015", total_orders: 1, phone: "01299887766", status: "Active" },
  { title: "Logan Scott", id: "CUST016", total_orders: 0, phone: "01088776655", status: "Inactive" },
  { title: "Alexander Green", id: "CUST017", total_orders: 29, phone: "01177665544", status: "VIP" },
  { title: "Daniel Adams", id: "CUST018", total_orders: 6, phone: "01233445566", status: "Active" },
  { title: "Matthew Nelson", id: "CUST019", total_orders: 0, phone: "01044556677", status: "Inactive" },
  { title: "Henry Baker", id: "CUST020", total_orders: 18, phone: "01166778899", status: "VIP" },
];

export function CustomersTable() {
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

  return <DataTables table={table} page={"customers"} />;
}
