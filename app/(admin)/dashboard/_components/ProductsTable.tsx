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

const data: Product[] = [
  {
    productName: "Lay's Classic Potato Chips",
    productId: "#CHP12345678",
    price: 15,
    stock: 120,
    categories: "Snacks",
    status: "Available",
  },
  {
    productName: "Pepsi 2L Bottle",
    productId: "#PEPSI24680",
    price: 25,
    stock: 5,
    categories: "Beverages",
    status: "Low",
  },
  {
    productName: "Nescafé Classic 50g",
    productId: "#COFFEE13579",
    price: 45,
    stock: 0,
    categories: "Coffee",
    status: "Out",
  },
  {
    productName: "Heinz Ketchup 500g",
    productId: "#KETCHUP1122",
    price: 55,
    stock: 32,
    categories: "Condiments",
    status: "Available",
  },
  {
    productName: "Doritos Nacho Cheese",
    productId: "#DORITOS3344",
    price: 18,
    stock: 2,
    categories: "Snacks",
    status: "Low",
  },
  {
    productName: "Red Bull Energy Drink",
    productId: "#REDBULL5566",
    price: 35,
    stock: 0,
    categories: "Beverages",
    status: "Out",
  },
  {
    productName: "Nutella Hazelnut Spread",
    productId: "#NUTELLA7788",
    price: 95,
    stock: 15,
    categories: "Spread",
    status: "Available",
  },
  {
    productName: "Pringles Original",
    productId: "#PRINGLES9900",
    price: 30,
    stock: 1,
    categories: "Snacks",
    status: "Low",
  },
  {
    productName: "Lindt Excellence 70% Cocoa",
    productId: "#LINDT112233",
    price: 65,
    stock: 0,
    categories: "Chocolate",
    status: "Out",
  },
  {
    productName: "Quaker Oats 1kg",
    productId: "#OATS445566",
    price: 75,
    stock: 28,
    categories: "Breakfast",
    status: "Available",
  },
  {
    productName: "Coca-Cola Zero 1.5L",
    productId: "#COKE778899",
    price: 22,
    stock: 3,
    categories: "Beverages",
    status: "Low",
  },
  {
    productName: "Kellogg's Corn Flakes",
    productId: "#CORNFLAKES001",
    price: 85,
    stock: 0,
    categories: "Breakfast",
    status: "Out",
  },
  {
    productName: "Toblerone Milk Chocolate",
    productId: "#TOBLERONE002",
    price: 50,
    stock: 42,
    categories: "Chocolate",
    status: "Available",
  },
  {
    productName: "M&M's Peanut",
    productId: "#MMPEANUT003",
    price: 20,
    stock: 4,
    categories: "Candy",
    status: "Low",
  },
  {
    productName: "KitKat Chunky",
    productId: "#KITKAT004",
    price: 15,
    stock: 0,
    categories: "Chocolate",
    status: "Out",
  },
  {
    productName: "Philadelphia Cream Cheese",
    productId: "#PHILLY005",
    price: 65,
    stock: 18,
    categories: "Dairy",
    status: "Available",
  },
  {
    productName: "Oreo Original Cookies",
    productId: "#OREO006",
    price: 25,
    stock: 2,
    categories: "Biscuits",
    status: "Low",
  },
  {
    productName: "Twix Chocolate Bar",
    productId: "#TWIX007",
    price: 12,
    stock: 0,
    categories: "Chocolate",
    status: "Out",
  },
  {
    productName: "Nestlé Pure Life Water 1.5L",
    productId: "#WATER008",
    price: 10,
    stock: 56,
    categories: "Water",
    status: "Available",
  },
  {
    productName: "Cheetos Crunchy",
    productId: "#CHEETOS009",
    price: 16,
    stock: 1,
    categories: "Snacks",
    status: "Low",
  },
  {
    productName: "Milka Alpine Milk Chocolate",
    productId: "#MILKA010",
    price: 30,
    stock: 0,
    categories: "Chocolate",
    status: "Out",
  },
  {
    productName: "Hellmann's Mayonnaise",
    productId: "#MAYO011",
    price: 45,
    stock: 22,
    categories: "Condiments",
    status: "Available",
  },
  {
    productName: "Snickers Chocolate Bar",
    productId: "#SNICKERS012",
    price: 12,
    stock: 3,
    categories: "Chocolate",
    status: "Low",
  },
  {
    productName: "Mountain Dew 1L",
    productId: "#DEW013",
    price: 18,
    stock: 0,
    categories: "Beverages",
    status: "Out",
  },
  {
    productName: "Cadbury Dairy Milk",
    productId: "#CADBURY014",
    price: 28,
    stock: 37,
    categories: "Chocolate",
    status: "Available",
  },
  {
    productName: "Pringles Sour Cream",
    productId: "#PRINGLES015",
    price: 30,
    stock: 2,
    categories: "Snacks",
    status: "Low",
  },
  {
    productName: "7UP 1.5L",
    productId: "#7UP016",
    price: 20,
    stock: 0,
    categories: "Beverages",
    status: "Out",
  },
  {
    productName: "Kinder Bueno",
    productId: "#KINDER017",
    price: 25,
    stock: 19,
    categories: "Chocolate",
    status: "Available",
  },
  {
    productName: "Lipton Yellow Label Tea",
    productId: "#TEA018",
    price: 55,
    stock: 4,
    categories: "Tea",
    status: "Low",
  },
  {
    productName: "Fanta Orange 1L",
    productId: "#FANTA019",
    price: 15,
    stock: 0,
    categories: "Beverages",
    status: "Out",
  },
  {
    productName: "Hershey's Chocolate Syrup",
    productId: "#HERSHEYS020",
    price: 40,
    stock: 12,
    categories: "Condiments",
    status: "Available",
  },
];

export type Product = {
  productName: string;
  productId: string;
  price: number;
  stock: number;
  categories: string;
  status: "Available" | "Out" | "Low";
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "productName",
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
        {row.getValue("productName")}
      </div>
    ),
  },
  {
    accessorKey: "productId",
    header: "Product ID",
    cell: ({ row }) => (
      <div
        className={cn(
          "capitalize",
          row.getValue("status") === "Out" && "text-primaryRed",
          row.getValue("status") === "Low" && "text-[#FF8714]"
        )}
      >
        {row.getValue("productId")}
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
          <DropdownMenuTrigger className="hover:bg-transparent" asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.productId)}
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

export function DataTableDemo() {
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

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <h2 className="text-xl font-semibold mr-5">Products</h2>
        <Input
          placeholder="Search Products..."
          value={
            (table.getColumn("productName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("productName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm h-[45px] bg-[#F2F2F2] rounded-xl outline-none px-4 border-none"
        />

        <div className="ml-auto space-x-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="border-none border-lg text-black bg-[#F2F2F2]">
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

          <Button className="bg-primaryRed rounded-lg">
            <Plus /> Add New Product
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
