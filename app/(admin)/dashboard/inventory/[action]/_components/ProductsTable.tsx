"use client";
import React, { useEffect } from "react";
import { IProduct } from "@/interfaces";
import { getAllProducts } from "@/app/api/actions/productActions";
import { ProductTableSkeleton } from "../../../_components/ProductTableSkeleton";
import DataTables from "../../../_components/DataTable";
import { productsColumns as columns } from "../../../_components/DataColumns";
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

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const [data, setProducts] = React.useState<IProduct[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const res = await getAllProducts();
        console.log(res?.data.data);

        setProducts(res?.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

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

  if (loading) return <ProductTableSkeleton />;

  return <DataTables table={table} edit={true} />;
}
