"use client";
import React, { useEffect } from "react";
import { IProduct } from "@/interfaces";
import { getAllProducts } from "@/app/api/actions/productActions";

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
// import { socket } from '@/socket';
import { io } from "socket.io-client";
import { ProductTableSkeleton } from "../../_components/ProductTableSkeleton";
import DataTables from "../../_components/DataTable";
import { shelvesColumns as columns } from "../../_components/DataColumns";

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

  const SOCKET_URL =
    "https://faint-ilyse-iot-based-smart-retail-system-897f175c.koyeb.app/shelf";

  useEffect(() => {
    console.log("🔌 Initializing socket...");

    const socket = io(SOCKET_URL, {
      transports: ["websocket"], // Critical for fallback
    });

    socket.on("connect", () => {
      console.log("🔗 Connected to shelf socket: ", socket.id);
    });

    // Listen for shelf updates
    socket.on("shelf-state-update", (response) => {
      if (response.success) {
        const updatedProduct = response.product;
        console.log("Shelf updated:", updatedProduct);
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === updatedProduct._id
              ? {
                  ...product,
                  state: updatedProduct.shelfState,
                }
              : product
          )
        );
      } else {
        console.error("Shelf update failed:", response);
      }
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("Disconnected from shelf socket");
    });

    return () => {
      socket.disconnect();
    };
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

  return <DataTables table={table} page={"shelves"} />;
}
