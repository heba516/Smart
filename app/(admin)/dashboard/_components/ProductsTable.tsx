"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  Row,
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

function getStatusVal(row: Row<IProduct>) {
  const stock: number = row.getValue("stock");
  if (stock >= 100) return "Available";
  else if (stock > 0) return "Low";
  else return "Out";
}

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
    cell: ({ row }) => {
      const statusVal = getStatusVal(row);
      return (
        <div
          className={cn(
            "lowercase",
            statusVal === "Out" && "text-primaryRed",
            statusVal === "Low" && "text-[#FF8714]"
          )}
        >
          {row.getValue("title")}
        </div>
      );
    },
  },
  {
    accessorKey: "_id",
    header: "Product ID",
    cell: ({ row }) => {
      const statusVal = getStatusVal(row);
      return (
        <div
          className={cn(
            "capitalize",
            statusVal === "Out" && "text-primaryRed",
            statusVal === "Low" && "text-[#FF8714]"
          )}
        >
          {row.getValue("_id")}
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
      const statusVal = getStatusVal(row);
      return (
        <div
          className={cn(
            "font-medium flex items-center",
            formatted === "0" && "text-primaryRed",
            statusVal === "Low" && "text-[#FF8714]",
            statusVal === "Out" && "text-primaryRed"
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
    cell: ({ row }) => {
      const stock: number = row.getValue("stock");
      const statusVal = getStatusVal(row);
      console.log({ stock, statusVal });

      return (
        <div
          className={cn(
            "capitalize flex items-center text-white w-fit rounded-lg",
            statusVal === "Available" && "text-green-500",
            statusVal === "Low" && "bg-[#FF8714] px-2 py-1",
            statusVal === "Out" && "bg-primaryRed px-2 py-1"
          )}
        >
          {statusVal === "Low" && (
            <Icon
              icon="si:warning-line"
              width="17"
              height="17"
              className="mr-1.5"
            />
          )}
          {statusVal === "Out" && (
            <Icon
              icon="fluent-mdl2:error-badge"
              width="17"
              height="17"
              className="mr-1.5"
            />
          )}
          {statusVal}
        </div>
      );
    },
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
              table.getRowModel().rows.map((row) => {
                const statusVal = getStatusVal(row);
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className={cn(
                          "font-medium text-base",
                          statusVal === "Low" && "bg-[#FFF3E9]",
                          statusVal === "Out" && "bg-[#FFEDED]"
                        )}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
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
