import { cn } from "@/lib/utils";

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-muted", className)}
            {...props}
        />
    );
}

function ProductSkeleton() {
    return (
        <div>
            {/* image */}
            <Skeleton className="w-full overflow-hidden rounded-md lg:h-80" />

            {/* content */}
            <div className="mt-4 flex justify-between">
                <div>
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/3" />
                </div>
                <Skeleton className="h-4 w-1/4" />
            </div>
        </div>
    );
}

function ProductsSkeleton({ count = 4 }: { count?: number }) {
    return (
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-8 gap-y-10">
            {Array.from({ length: count }).map((_, i) => (
                <li key={i}>
                    <ProductSkeleton />
                </li>
            ))}
        </ul>
    );
}

export { Skeleton, ProductSkeleton, ProductsSkeleton };
