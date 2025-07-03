// RowActions.tsx
import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Eye, PenIcon, Trash } from "lucide-react";
import { ProductDialog } from "../inventory/[action]/_components/ProductDialog";
import { deleteProduct } from "@/app/api/actions/productActions";
import toast from "react-hot-toast";

export function RowActions({ id }: { id: string }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      {isDialogOpen && (
        <ProductDialog
          key={id}
          id={id}
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => setIsDialogOpen(true)}>
            <Eye className="mr-2 h-4 w-4" />
            View
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              className="flex items-center"
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
            }}
          >
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
