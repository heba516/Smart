"use client";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductTableSkeleton() {
  return (
    <div>
      <div className="flex items-center py-4">
        <Skeleton className="h-7 w-[120px] mr-5 rounded-md" />

        <Skeleton className="w-[384px] h-[45px] rounded-xl" />

        <div className="ml-auto space-x-5 flex">
          <Skeleton className="h-[45px] w-[90px] rounded-lg" />
          <Skeleton className="h-[45px] w-[90px] rounded-lg" />
          <Skeleton className="h-[45px] w-[160px] rounded-lg" />
        </div>
      </div>

      <div className="rounded-lg border">
        <div className="space-y-2 p-4">
          <div className="w-full flex space-x-4 mb-5">
            <Skeleton className="h-12 w-full rounded-sm" />
          </div>

          <div className="space-y-3 mt-4">
            {[...Array(5)].map((_, rowIdx) => (
              <div key={rowIdx} className="flex space-x-4">
                <Skeleton className="h-10 w-full my-1 rounded-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
