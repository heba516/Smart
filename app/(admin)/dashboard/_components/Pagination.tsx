"use client";
import { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  visiblePageCount?: number;
}

export function DataTablePagination<TData>({
  table,
  visiblePageCount = 10,
}: DataTablePaginationProps<TData>) {
  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;
  const pageSize = table.getState().pagination.pageSize;
  const totalRows = table.getFilteredRowModel().rows.length;

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalRows);

  let startPage = Math.max(1, currentPage - Math.floor(visiblePageCount / 2));
  const endPage = Math.min(pageCount, startPage + visiblePageCount - 1);

  if (endPage - startPage + 1 < visiblePageCount) {
    startPage = Math.max(1, endPage - visiblePageCount + 1);
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className="flex items-center justify-center space-x-5 px-2 mt-5">
      <div className="text-lg font-medium text-grayColor">
        Result {startItem}-{endItem} of {totalRows}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeft />
        </Button>

        {pages.map((page) => (
          <Button
            key={page}
            variant={page === currentPage ? "default" : "outline"}
            className={cn(
              "h-9 w-9 p-0 text-base",
              page === currentPage && "bg-primaryRed"
            )}
            onClick={() => table.setPageIndex(page - 1)}
          >
            {page}
          </Button>
        ))}

        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
