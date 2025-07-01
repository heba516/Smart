"use client";
import { useEffect, useState } from "react";
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
// import { socket } from '@/socket';
import { io } from "socket.io-client";

export function ProductTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const [data, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const res = await getAllProducts();
        // console.log(res?.data.data);

        setProducts(res?.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  useEffect(() => {
    console.log("🔌 Initializing socket...");

    const socket = io(
      "https://faint-ilyse-iot-based-smart-retail-system-897f175c.koyeb.app/shelf",
      {
        transports: ["websocket"], // Critical for fallback
      }
    );

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

    socket.on("product-states-update", (response) => {
      if (response.success) {
        console.log("Updated product state counts:", response.stateCounts);
        // response.stateCounts example:
        // { available: 4, outOfStock: 2, lowStock: 3 }
        // Update your dashboard/statistics panel accordingly
      } else {
        console.error("Failed to receive product state counts:", response);
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

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

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

  return <DataTables table={table} page={"products"} />;
}
