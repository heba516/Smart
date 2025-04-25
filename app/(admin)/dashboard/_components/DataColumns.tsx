import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import { ColumnDef, Row } from "@tanstack/react-table";
import { Icon } from "@iconify/react";
import { IProduct, ISecurity } from "@/interfaces";
import { cn } from "@/lib/utils";
import { MoreHorizontal, Eye, PenIcon, Trash } from "lucide-react";
import Link from "next/link";

////////////Products Columns////////////
export function productStatus(row: Row<IProduct>) {
  const stock: number = row.getValue("stock");
  if (stock >= 100) return "Available";
  else if (stock > 0) return "Low";
  else return "Out";
}

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
      const statusVal = productStatus(row);
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
      const statusVal = productStatus(row);
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
      const statusVal = productStatus(row);
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
      const statusVal = productStatus(row);

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
            <DropdownMenuItem asChild>
              <Link
                className="flex items-center"
                href={`/dashboard/inventory/edit/${row.getValue("_id")}`}
              >
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

////////////Security Columns////////////
// export function securityStatus(row: Row<ISecurity>) {
//   const status = row.getValue("status");
//   if (status === "Under Review") return "Under Review";
//   else if (status === "Critical") return "Critical";
//   else return "Resolved";
// }

const securityStatus = (
  row: Row<ISecurity>
): "Resolved" | "Critical" | "Under Review" => {
  const status = row.getValue("status");
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
          Product Name
          <Icon icon="fa6-solid:sort" width="14" height="14" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.getValue("title")}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const statusVal = securityStatus(row);

      return (
        <div
          className={cn(
            "capitalize flex items-center text-white w-fit rounded-lg",
            statusVal === "Under Review" && "bg-[#FF8714] px-2 py-1",
            statusVal === "Critical" && "bg-primaryRed px-2 py-1"
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
          Categories
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
          Stock
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
