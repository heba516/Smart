"use client";
import { Table, flexRender } from "@tanstack/react-table";
import {
  Button,
  DataTable,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Input,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { DataTablePagination } from "../_components/Pagination";
// import { cn } from "@/lib/utils";
import { ICustomer, IProduct, ISecurity, IShelves } from "@/interfaces";
// import { productStatus } from "./DataColumns";
import { Icon } from "@iconify/react";
import { Plus } from "lucide-react";
import Link from "next/link";

type DataTablesProps<T> = {
  table: Table<T>;
  page: "products" | "shelves" | "security" | "customers";
};

const DataTables = <T extends IProduct | IShelves | ISecurity | ICustomer>({
  table,
  page,
}: DataTablesProps<T>) => {
  return (
    <div className="max-w-full">
      <div className="flex flex-col lg:flex-row items-center pb-4">
        <h2 className="text-xl font-semibold mr-5 capitalize">
          {page === "security" ? "Security Incidents Log" : page}
        </h2>
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

          {page === "products" && (
            <Button className="bg-primaryRed rounded-lg" asChild>
              <Link href={"/dashboard/inventory/add"}>
                <Plus /> Add New Product
              </Link>
            </Button>
          )}
        </div>
      </div>
      <div className="rounded-md border">
        <DataTable className="w-full">
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
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => {
                // const statusVal = row.getValue("state") as string;
                // if ("_id" in row.original) {
                //   statusVal = row.getValue("state");
                //   // statusVal = productStatus(row as Row<IProduct>);
                // }

                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="font-medium text-base"
                        // {cn(
                        // "font-medium text-base",
                        // statusVal?.endsWith("low") && "bg-[#FFF3E9]",
                        //   ["Out", "Critical", "Under Review"].includes(
                        //     statusVal
                        //   ) && "bg-[#FFEDED]"
                        // )}
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
                  //   colSpan={table.column}
                  className="w-full h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </DataTable>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
};

export default DataTables;
