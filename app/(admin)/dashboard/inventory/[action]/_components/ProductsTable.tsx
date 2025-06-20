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
// import { socket } from '@/socket';
import { io, Socket } from "socket.io-client";



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

  
  useEffect(() => {
    const socketInstance = io("https://faint-ilyse-iot-based-smart-retail-system-897f175c.koyeb.app", {
      transports: ['websocket']
    });

    
    socketInstance.on("connect", () => {
      console.log("Socket connected successfully:", socketInstance.id);
    });

    socketInstance.on('shelf-state-update', (updatedProduct: IProduct) => {
      setProducts(prev =>
        prev.map(product =>
          product._id === updatedProduct._id
            ? { ...product, ...updatedProduct }
            : product
        )
    );
    });

    return () => {
      socketInstance.disconnect();
  };
  },[])


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

  return <DataTables table={table} page={"products"} />;
}
