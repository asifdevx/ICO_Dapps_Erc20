import { cn } from "@/utils/cn";
import React from "react";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-neutral-200 dark:bg-neutral-800",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-neutral-600/20" />
    </div>
  );
}

const BuyTokenSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-2xl shadow-md border border-neutral-200 dark:border-neutral-800">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-8 w-3/4" />
      </div>

      {/* Input Fields */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
        <div className="w-full space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
      </div>

      {/* Button */}
      <Skeleton className="h-10 w-full rounded-lg" />

      {/* Add Token Section */}
      <div className="flex justify-between items-center mt-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-24 rounded-md" />
      </div>
    </div>
  );
};

export default BuyTokenSkeleton;

