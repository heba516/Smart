import { ColumnDef, Row } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { ICustomer, IProduct, ISecurity } from "@/interfaces";
import Link from "next/link";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import { Icon } from "@iconify/react";
import { MoreHorizontal, Eye, PenIcon, Trash } from "lucide-react";
import { RowActions } from "./RowActions";

////////////Products Columns////////////
export const productsColumns: ColumnDef<IProduct>[] = [
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
            "lowercase",
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
    accessorKey: "shelfNumber",
    header: "Shelf Number",
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
          {row.getValue("shelfNumber")}
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
        <div
          className={cn(
            "font-medium flex items-center",
            formatted === "0" && "text-primaryRed",
            statusVal === "low" && "text-[#FF8714]",
            statusVal === "out" && "text-primaryRed"
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
          Category
          <Icon icon="fa6-solid:sort" width="14" height="14" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("categories")}</div>
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
            "capitalize flex items-center text-white w-fit rounded-lg",
            statusVal === "available" && "text-green-500",
            statusVal === "low" && "bg-[#FF8714] px-2 py-1",
            statusVal === "out" && "bg-primaryRed px-2 py-1"
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
    accessorKey: "Actions",
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <RowActions id={row.getValue("barcode")} />,
  },
];

////////////Security Columns////////////
const securityStatus = (
  row: Row<ISecurity>
): "Resolved" | "Critical" | "Under Review" => {
  const status = row.getValue("state");
  return (status as "Resolved" | "Critical" | "Under Review") || "Resolved";
};

export const securityColumns: ColumnDef<ISecurity>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 text-black text-base font-semibold"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <Icon icon="fa6-solid:sort" width="14" height="14" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.getValue("title")}</div>;
    },
  },
  {
    accessorKey: "state",
    header: "State",
    cell: ({ row }) => {
      const statusVal = securityStatus(row);

      return (
        <div
          className={cn(
            "capitalize flex items-center w-fit rounded-lg",
            statusVal === "Under Review" && "bg-[#FF8714] px-2 py-1 text-white",
            statusVal === "Critical" && "bg-primaryRed px-2 py-1 text-white"
          )}
        >
          {statusVal === "Under Review" && (
            <Icon
              icon="si:warning-line"
              width="17"
              height="17"
              className="mr-1.5"
            />
          )}
          {statusVal === "Critical" && (
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
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 text-black text-base font-semibold"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Location
          <Icon icon="fa6-solid:sort" width="14" height="14" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("location")}</div>
    ),
  },
  {
    accessorKey: "time",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 text-black text-base font-semibold"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Time
          <Icon icon="fa6-solid:sort" width="14" height="14" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const time: number = row.getValue("time");

      // Format the amount as a dollar amount
      const formatted = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(time);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 text-black text-base font-semibold"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <Icon icon="fa6-solid:sort" width="14" height="14" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date: number = parseFloat(row.getValue("date"));

      // Format the amount as a dollar amount
      const formatted = new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(date);

      return (
        <div className="font-medium flex items-center">
          {formatted === "0" && (
            <Icon
              icon="fluent-mdl2:error-badge"
              width="18"
              height="18"
              className="text-primaryRed mr-1.5"
            />
          )}
          {formatted}
        </div>
      );
    },
  },
  {
    accessorKey: "Actions",
    id: "actions",
    enableHiding: false,
    cell: () => {
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
            <DropdownMenuItem>
              <Eye /> View
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link className="flex items-center" href={`/dashboard/security`}>
                <PenIcon className="mr-2" /> Edit
              </Link>
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

////////////Customers Columns////////////
export const customersColumns: ColumnDef<ICustomer>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 text-black text-base font-semibold"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Customer Name
          <Icon icon="fa6-solid:sort" width="14" height="14" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.getValue("title")}</div>;
    },
  },
  {
    accessorKey: "id",
    header: () => {
      return (
        <div className="p-0 text-black text-base font-semibold">
          Customer ID
        </div>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "total_orders",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 text-black text-base font-semibold"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total Orders
          <Icon icon="fa6-solid:sort" width="14" height="14" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const total_orders: number = row.getValue("total_orders");

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "decimal",
      }).format(total_orders);

      return <div className="font-medium pl-10">{formatted}</div>;
    },
  },
  {
    accessorKey: "phone",
    header: () => {
      return (
        <div className="p-0 text-black text-base font-semibold">
          Phone Number
        </div>
      );
    },
    cell: ({ row }) => {
      const phone: string = row.getValue("phone");

      return <div className="font-medium flex items-center">{phone}</div>;
    },
  },
  {
    accessorKey: "state",
    header: "State",
    cell: ({ row }) => {
      const statusVal = row.getValue("state");
      return (
        <div
          className={cn(
            "capitalize flex items-center w-fit rounded-lg",
            statusVal === "Active" && "text-green-500",
            statusVal === "Inactive" && "text-grayColor",
            statusVal === "VIP" && "text-[#8407E3]"
          )}
        >
          {statusVal === "VIP" && (
            <Icon
              icon="mingcute:vip-1-fill"
              width="18"
              height="18"
              className="mr-1 text-[#8407E3]"
            />
          )}
          {statusVal as string}
        </div>
      );
    },
  },
  {
    accessorKey: "Actions",
    id: "actions",
    enableHiding: false,
    cell: () => {
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
            <DropdownMenuItem>
              <Eye /> View
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link className="flex items-center" href={`/dashboard/security`}>
                <PenIcon className="mr-2" /> Edit
              </Link>
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
