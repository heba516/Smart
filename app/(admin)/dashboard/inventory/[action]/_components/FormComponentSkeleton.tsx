"use client";
import { Skeleton } from "@/components/ui/skeleton";

const FormComponentSkeleton = () => {
  return (
    <div className="space-y-8 mt-10">
      <div className="flex items-center justify-between">
        <Skeleton className="h-10 w-60 rounded-xl" />
        <div className="flex space-x-4">
          <Skeleton className="h-10 w-48 rounded-xl" />
          <Skeleton className="h-10 w-48 rounded-xl" />
        </div>
      </div>

      <div className="h-px bg-border" />

      {/* General Information & Product Images */}
      <div className="flex space-x-5">
        <div className="w-[60%] space-y-6">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-10 w-full rounded-lg" />
          <Skeleton className="h-5 w-48 mt-4" />
          <Skeleton className="h-24 w-full rounded-lg" />
        </div>
        <div className="w-[40%] space-y-4">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-60 w-full rounded-lg" />
        </div>
      </div>

      {/* Pricing & Inventory */}
      <div className="flex space-x-5">
        <div className="w-[60%] space-y-4">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-10 w-full rounded-lg" />
          <div className="flex space-x-4">
            <div className="w-1/2 space-y-2">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
            <div className="w-1/2 space-y-2">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
          </div>
        </div>

        <div className="w-[40%] space-y-4">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-10 w-full rounded-lg" />
          <Skeleton className="h-5 w-48 mt-4" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
      </div>

      {/* Category Selects */}
      <div className="space-y-4">
        <Skeleton className="h-5 w-48" />
        <div className="flex space-x-5">
          <Skeleton className="h-10 w-1/3 rounded-lg" />
          <Skeleton className="h-10 w-1/3 rounded-lg" />
          <Skeleton className="h-10 w-1/3 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default FormComponentSkeleton;
