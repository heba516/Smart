import { Skeleton } from "@/components/ui/skeleton";

export function NavBarSkeleton() {
  return (
    <nav className="flex items-center justify-center space-x-3 2xl:space-x-9">
      {/* Search Input */}
      <Skeleton className="h-[45px] w-[350px] xl:w-[500px] rounded-xl" />

      {/* Separator */}
      <Skeleton className="h-8 w-[2px]" />

      {/* Date and Time */}
      <Skeleton className="h-[45px] w-[260px] rounded-xl" />

      {/* Separator */}
      <Skeleton className="h-8 w-[2px]" />

      {/* Notification Icon */}
      <Skeleton className="h-[45px] w-[45px] rounded-xl" />

      {/* Separator */}
      <Skeleton className="h-8 w-[2px]" />

      {/* Admin Profile */}
      <Skeleton className="h-[45px] w-[150px] rounded-xl" />
    </nav>
  );
}
