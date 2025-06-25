import { Skeleton } from "@/components/ui/skeleton";

export function SidebarSkeleton() {
  return (
    <aside className="w-[256px] border-r bg-white px-4 py-8 flex flex-col h-screen">
      {/* Logo */}
      <div className="flex justify-center pt-2 pb-1">
        <Skeleton className="w-12 h-12 rounded-md" />
      </div>

      {/* Separator */}
      <Skeleton className="h-[1px] w-full my-5" />

      {/* Menu Items */}
      <div className="flex-1 space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex justify-center items-center space-x-2">
            <Skeleton className="h-12 w-[85%] rounded-xl" />
          </div>
        ))}
      </div>

      {/* Footer / Logout */}
      <div className="mt-auto pt-4">
        <div className="flex items-center space-x-2">
          <Skeleton className="w-6 h-6 rounded-md" />
          <Skeleton className="h-4 w-16 hidden md:block" />
        </div>
      </div>
    </aside>
  );
}
