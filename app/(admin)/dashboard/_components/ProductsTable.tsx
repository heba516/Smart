"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Eye, MoreHorizontal, PenIcon, Plus, Trash } from "lucide-react";
import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Input,
} from "@/components/ui";
import { DataTablePagination } from "../_components/Pagination";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IProduct } from "@/interfaces";

// const data: IProduct[] = [
//   {
//     title: "Lay's Classic Potato Chips",
//     _id: "#CHP12345678",
//     price: 15,
//     stock: 120,
//     categories: ["Snacks"],
//     status: "Available",
//     image_url: "",
//   },
//   {
//     title: "Pepsi 2L Bottle",
//     _id: "#PEPSI24680",
//     price: 25,
//     stock: 5,
//     categories: ["Beverages"],
//     status: "Low",
//     image_url: "",
//   },
//   {
//     title: "Nescafé Classic 50g",
//     _id: "#COFFEE13579",
//     price: 45,
//     stock: 0,
//     categories: ["Coffee"],
//     status: "Out",
//     image_url: "",
//   },
//   {
//     title: "Heinz Ketchup 500g",
//     _id: "#KETCHUP1122",
//     price: 55,
//     stock: 32,
//     categories: ["Condiments"],
//     status: "Available",
//     image_url: "",
//   },
//   {
//     title: "Doritos Nacho Cheese",
//     _id: "#DORITOS3344",
//     price: 18,
//     stock: 2,
//     categories: ["Snacks"],
//     status: "Low",
//     image_url: "",
//   },
//   {
//     title: "Red Bull Energy Drink",
//     _id: "#REDBULL5566",
//     price: 35,
//     stock: 0,
//     categories: ["Beverages"],
//     status: "Out",
//     image_url: "",
//   },
//   {
//     title: "Nutella Hazelnut Spread",
//     _id: "#NUTELLA7788",
//     price: 95,
//     stock: 15,
//     categories: ["Spread"],
//     status: "Available",
//     image_url: "",
//   },
//   {
//     title: "Pringles Original",
//     _id: "#PRINGLES9900",
//     price: 30,
//     stock: 1,
//     categories: ["Snacks"],
//     status: "Low",
//     image_url: "",
//   },
//   {
//     title: "Lindt Excellence 70% Cocoa",
//     _id: "#LINDT112233",
//     price: 65,
//     stock: 0,
//     categories: ["Chocolate"],
//     status: "Out",
//     image_url: "",
//   },
//   {
//     title: "Quaker Oats 1kg",
//     _id: "#OATS445566",
//     price: 75,
//     stock: 28,
//     categories: ["Breakfast"],
//     status: "Available",
//     image_url: "",
//   },
//   {
//     title: "Coca-Cola Zero 1.5L",
//     _id: "#COKE778899",
//     price: 22,
//     stock: 3,
//     categories: ["Beverages"],
//     status: "Low",
//     image_url: "",
//   },
//   {
//     title: "Kellogg's Corn Flakes",
//     _id: "#CORNFLAKES001",
//     price: 85,
//     stock: 0,
//     categories: ["Breakfast"],
//     status: "Out",
//     image_url: "",
//   },
//   {
//     title: "Toblerone Milk Chocolate",
//     _id: "#TOBLERONE002",
//     price: 50,
//     stock: 42,
//     categories: ["Chocolate"],
//     status: "Available",
//     image_url: "",
//   },
//   {
//     title: "M&M's Peanut",
//     _id: "#MMPEANUT003",
//     price: 20,
//     stock: 4,
//     categories: ["Candy"],
//     status: "Low",
//     image_url: "",
//   },
//   {
//     title: "KitKat Chunky",
//     _id: "#KITKAT004",
//     price: 15,
//     stock: 0,
//     categories: ["Chocolate"],
//     status: "Out",
//     image_url: "",
//   },
//   {
//     title: "Philadelphia Cream Cheese",
//     _id: "#PHILLY005",
//     price: 65,
//     stock: 18,
//     categories: ["Dairy"],
//     status: "Available",
//     image_url: "",
//   },
//   {
//     title: "Oreo Original Cookies",
//     _id: "#OREO006",
//     price: 25,
//     stock: 2,
//     categories: ["Biscuits"],
//     status: "Low",
//     image_url: "",
//   },
//   {
//     title: "Twix Chocolate Bar",
//     _id: "#TWIX007",
//     price: 12,
//     stock: 0,
//     categories: ["Chocolate"],
//     status: "Out",
//     image_url: "",
//   },
//   {
//     title: "Nestlé Pure Life Water 1.5L",
//     _id: "#WATER008",
//     price: 10,
//     stock: 56,
//     categories: ["Water"],
//     status: "Available",
//     image_url: "",
//   },
//   {
//     title: "Cheetos Crunchy",
//     _id: "#CHEETOS009",
//     price: 16,
//     stock: 1,
//     categories: ["Snacks"],
//     status: "Low",
//     image_url: "",
//   },
//   {
//     title: "Milka Alpine Milk Chocolate",
//     _id: "#MILKA010",
//     price: 30,
//     stock: 0,
//     categories: ["Chocolate"],
//     status: "Out",
//     image_url: "",
//   },
//   {
//     title: "Hellmann's Mayonnaise",
//     _id: "#MAYO011",
//     price: 45,
//     stock: 22,
//     categories: ["Condiments"],
//     status: "Available",
//     image_url: "",
//   },
//   {
//     title: "Snickers Chocolate Bar",
//     _id: "#SNICKERS012",
//     price: 12,
//     stock: 3,
//     categories: ["Chocolate"],
//     status: "Low",
//     image_url: "",
//   },
//   {
//     title: "Mountain Dew 1L",
//     _id: "#DEW013",
//     price: 18,
//     stock: 0,
//     categories: ["Beverages"],
//     status: "Out",
//     image_url: "",
//   },
//   {
//     title: "Cadbury Dairy Milk",
//     _id: "#CADBURY014",
//     price: 28,
//     stock: 37,
//     categories: ["Chocolate"],
//     status: "Available",
//     image_url: "",
//   },
//   {
//     title: "Pringles Sour Cream",
//     _id: "#PRINGLES015",
//     price: 30,
//     stock: 2,
//     categories: ["Snacks"],
//     status: "Low",
//     image_url: "",
//   },
//   {
//     title: "7UP 1.5L",
//     _id: "#7UP016",
//     price: 20,
//     stock: 0,
//     categories: ["Beverages"],
//     status: "Out",
//     image_url: "",
//   },
//   {
//     title: "Kinder Bueno",
//     _id: "#KINDER017",
//     price: 25,
//     stock: 19,
//     categories: ["Chocolate"],
//     status: "Available",
//     image_url: "",
//   },
//   {
//     title: "Lipton Yellow Label Tea",
//     _id: "#TEA018",
//     price: 55,
//     stock: 4,
//     categories: ["Tea"],
//     status: "Low",
//     image_url: "",
//   },
//   {
//     title: "Fanta Orange 1L",
//     _id: "#FANTA019",
//     price: 15,
//     stock: 0,
//     categories: ["Beverages"],
//     status: "Out",
//     image_url: "",
//   },
//   {
//     title: "Hershey's Chocolate Syrup",
//     _id: "#HERSHEYS020",
//     price: 40,
//     stock: 12,
//     categories: ["Condiments"],
//     status: "Available",
//   },
// ];

export const columns: ColumnDef<IProduct>[] = [
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
    cell: ({ row }) => (
      <div
        className={cn(
          "lowercase",
          row.getValue("status") === "Out" && "text-primaryRed",
          row.getValue("status") === "Low" && "text-[#FF8714]"
        )}
      >
        {row.getValue("title")}
      </div>
    ),
  },
  {
    accessorKey: "_id",
    header: "Product ID",
    cell: ({ row }) => (
      <div
        className={cn(
          "capitalize",
          row.getValue("status") === "Out" && "text-primaryRed",
          row.getValue("status") === "Low" && "text-[#FF8714]"
        )}
      >
        {row.getValue("_id")}
      </div>
    ),
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

      return (
        <div
          className={cn(
            "font-medium flex items-center",
            formatted === "0" && "text-primaryRed",
            row.getValue("status") === "Low" && "text-[#FF8714]"
          )}
        >
          {formatted === "0" && (
            <Icon
              icon="fluent-mdl2:error-badge"
              width="18"
              height="18"
              className="text-primaryRed mr-1.5"
            />
          )}
          {formatted} pcs
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
          Categories
          <Icon icon="fa6-solid:sort" width="14" height="14" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("categories")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div
        className={cn(
          "capitalize flex items-center text-white w-fit rounded-lg",
          row.getValue("status") === "Available" && "text-green-500",
          row.getValue("status") === "Low" && "bg-[#FF8714] px-2 py-1",
          row.getValue("status") === "Out" && "bg bg-primaryRed px-2 py-1"
        )}
      >
        {row.getValue("status") === "Low" && (
          <Icon
            icon="si:warning-line"
            width="17"
            height="17"
            className="mr-1.5"
          />
        )}
        {row.getValue("status") === "Out" && (
          <Icon
            icon="fluent-mdl2:error-badge"
            width="17"
            height="17"
            className="mr-1.5"
          />
        )}
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "Actions",
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger
            className="hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            asChild
          >
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product._id)}
            >
              <Eye /> View
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PenIcon /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTableDemo({ data }: { data: IProduct[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  //   const [rowSelection, setRowSelection] = React.useState({});

  // const [data, setData] = React.useState<Product[]>(products);

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
    // onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      //   rowSelection,
    },
  });

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <h2 className="text-xl font-semibold mr-5">Products</h2>
        <Input
          placeholder="Search Products..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm h-[45px] bg-[#F2F2F2] rounded-xl outline-none px-4 border-none"
        />

        <div className="ml-auto space-x-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="border-none border-lg text-black bg-[#F2F2F2] focus-visible:ring-0 focus-visible:ring-offset-0">
                <Icon icon="hugeicons:filter" width="20" height="20" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="border-none border-lg text-black bg-[#F2F2F2]">
            <Icon icon="solar:export-bold" width="20" height="20" />
            Export
          </Button>

          <Button className="bg-primaryRed rounded-lg" asChild>
            <Link href={"/dashboard/inventory/add"}>
              <Plus /> Add New Product
            </Link>
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table className="w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-input">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-black text-base font-semibold"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        "font-medium text-base",
                        cell.row.getValue("status") === "Low" && "bg-[#FFF3E9]",
                        cell.row.getValue("status") === "Out" && "bg-[#FFEDED]"
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
