"use client";
import { useEffect, useState } from "react";
import { IProduct } from "@/interfaces";
import {
  deleteProduct,
  getAllProducts,
} from "@/app/api/actions/productActions";
import { ProductTableSkeleton } from "../../../_components/ProductTableSkeleton";
import DataTables from "../../../_components/DataTable";
// import { productsColumns as columns } from "../../../_components/DataColumns";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { io } from "socket.io-client";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { ProductDialog } from "./ProductDialog";
import { MoreHorizontal, Eye, PenIcon, Trash } from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";

export function ProductTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const [data, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string>("");

  const columns: ColumnDef<IProduct>[] = [
    {
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <Button
            className="p-0 text-black text-base font-semibold"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Product Name
            <Icon icon="fa6-solid:sort" width="14" height="14" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const statusVal = row.getValue("state");
        return (
          <div
            className={cn(
              "capitalize",
              statusVal === "out" && "text-primaryRed",
              statusVal === "low" && "text-[#FF8714]"
            )}
          >
            {row.getValue("title")}
          </div>
        );
      },
    },
    {
      accessorKey: "barcode",
      header: "Barcode",
      cell: ({ row }) => {
        const statusVal = row.getValue("state");
        return (
          <div
            className={cn(
              "capitalize",
              statusVal === "out" && "text-primaryRed",
              statusVal === "low" && "text-[#FF8714]"
            )}
          >
            {row.getValue("barcode")}
          </div>
        );
      },
    },
    {
      accessorKey: "shelfNumber",
      header: "Shelf No.",
      cell: ({ row }) => {
        // const statusVal = row.getValue("state");
        return (
          <div
            className="ml-5"
            // className={cn(
            //   "capitalize",
            //   statusVal === "out" && "text-primaryRed",
            //   statusVal === "low" && "text-[#FF8714]"
            // )}
          >
            {row.getValue("shelfNumber")}
          </div>
        );
      },
    },
    {
      accessorKey: "price",
      header: ({ column }) => {
        return (
          <Button
            className="p-0 text-black text-base font-semibold"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Price
            <Icon icon="fa6-solid:sort" width="14" height="14" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("price"));

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "EGP",
        }).format(amount);

        return <div className="font-medium">{formatted}</div>;
      },
    },
    {
      accessorKey: "stock",
      header: ({ column }) => {
        return (
          <Button
            className="p-0 text-black text-base font-semibold"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Stock
            <Icon icon="fa6-solid:sort" width="14" height="14" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("stock"));

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "decimal",
        }).format(amount);
        const statusVal = row.getValue("state");
        return (
          <div className="font-medium flex items-center text-medGray">
            {formatted === "0" && (
              <Icon
                icon="fluent-mdl2:error-badge"
                width="18"
                height="18"
                className="text-primaryRed mr-1.5"
              />
            )}
            <span
              className={cn(
                formatted === "0" && "text-primaryRed",
                statusVal === "available" && "text-black",
                statusVal === "low" && "text-[#FF8714]",
                statusVal === "out" && "text-primaryRed"
              )}
            >
              {formatted} pcs
            </span>
            /400
          </div>
        );
      },
    },
    {
      accessorKey: "categories",
      header: ({ column }) => {
        return (
          <Button
            className="p-0 text-black text-base font-semibold"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Category
            <Icon icon="fa6-solid:sort" width="14" height="14" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize ml-3">{row.getValue("categories")}</div>
      ),
    },
    {
      accessorKey: "state",
      header: "State",
      cell: ({ row }) => {
        const statusVal = row.getValue("state");

        return (
          <div
            className={cn(
              "capitalize flex items-center text-white w-fit rounded-lg text-base font-semibold",
              statusVal === "available" && "text-green-500",
              statusVal === "low" && "bg-[#FFDBB980] text-[#FF7D00] px-2 py-1",
              statusVal === "out" && "bg-[#FFECEC] text-primaryRed px-2 py-1"
            )}
          >
            {statusVal === "low" && (
              <Icon
                icon="si:warning-line"
                width="17"
                height="17"
                className="mr-1.5"
              />
            )}
            {statusVal === "out" && (
              <Icon
                icon="fluent-mdl2:error-badge"
                width="17"
                height="17"
                className="mr-1.5"
              />
            )}
            {row.getValue("state")}
          </div>
        );
      },
    },
    {
      accessorKey: " ",
      // header: "State",
      cell: ({ row }) => {
        const statusVal = row.getValue("state");

        return (
          <div
            className={cn(
              "capitalize flex items-center text-medGray cursor-pointer",
              // statusVal === "available" && "text-green-500",
              statusVal === "low" && "text-[#FF8714]",
              statusVal === "out" && "text-primaryRed"
            )}
          >
            <Icon
              icon="dashicons:update"
              width="23"
              height="23"
              className="mr-[6px]"
            />
            Restock
          </div>
        );
      },
    },
    {
      accessorKey: "Actions",
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const id = row.original._id as string;

        return (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem
                  onSelect={() => {
                    setIsDialogOpen(true);
                    setSelectedProductId(id);
                  }}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    className="flex items-center w-full"
                    href={`/dashboard/inventory/edit/${id}`}
                  >
                    <PenIcon className="mr-2 h-4 w-4" />
                    Edit
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    deleteProduct(id);
                    toast.success("Product deleted successfully");
                    setProducts((prev) => prev.filter((itm) => itm._id !== id));
                  }}
                >
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* {isDialogOpen && (
              <ProductDialog
                key={selectedProductId}
                id={selectedProductId}
                open={isDialogOpen}
                onOpenChange={setIsDialogOpen}
              />
            )} */}
          </>
        );
      },
    },
  ];

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const res = await getAllProducts();

        setProducts(res?.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  console.log({ columns });

  const SOCKET_URL =
    "https://faint-ilyse-iot-based-smart-retail-system-897f175c.koyeb.app/shelf";

  useEffect(() => {
    console.log("🔌 Initializing socket...");

    const socket = io(SOCKET_URL, {
      transports: ["websocket"],
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
  if (isDialogOpen)
    return (
      <ProductDialog
        key={selectedProductId}
        id={selectedProductId}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    );

  return <DataTables table={table} page={"products"} />;
}
