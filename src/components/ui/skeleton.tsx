import { cn } from "@/lib/utils";
import Products from "../products";
import { ArrowRight, Loader2 } from "lucide-react";
import { Badge } from "./badge";

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

function ProductCardSkeleton() {
    return (
        <article className="group relative">
            {/* Image skeleton */}
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 relative">
                <Skeleton className="w-full h-full" />
            </div>

            {/* Content skeleton */}
            <div className="mt-4 flex justify-between">
                <div>
                    <Skeleton className="h-4 w-3/4 mb-2" />
                    <Skeleton className="h-3 w-1/2" />
                </div>
                <Skeleton className="h-4 w-1/4" />
            </div>
        </article>
    );
}

function ProductsSkeleton({ count = 4 }: { count?: number }) {
    return (
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-8 gap-y-10">
            {Array.from({ length: count }).map((_, i) => (
                <li key={i}>
                    <ProductCardSkeleton />
                </li>
            ))}
        </ul>
    );
}

function NewestSectionSkeleton() {
    return (
        <Products
            productsHeader={
                <>
                    <h2 className="text-2xl font-bold tracking-tight  text-gray-900">
                        Our Newest Products
                    </h2>

                    <p className="text-primary flex items-center gap-x-1 cursor-not-allowed">
                        See All{" "}
                        <span>
                            <ArrowRight />
                        </span>
                    </p>
                </>
            }
            className="max-w-2xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        >
            <ProductsSkeleton />
        </Products>
    );
}

function ImageGallerySkeleton() {
    return (
        <div className="grid gap-6 lg:grid-cols-5">
            <div className="order-last lg:order-none flex lg:flex-col gap-4">
                <Skeleton className="h-20 w-20 rounded-lg" />
                <Skeleton className="h-20 w-20 rounded-lg" />
                <Skeleton className="h-20 w-20 rounded-lg" />
            </div>
            <div className="lg:col-span-4 relative overflow-hidden rounded-lg bg-gray-100">
                <Skeleton className="h-96 w-full" />
            </div>
        </div>
    );
}

function SingleProductPageSkeleton() {
    return (
        <main className="min-h-screen">
            <div className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    {/* Product */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Product images skeleton */}
                        <ImageGallerySkeleton />

                        {/* Product content skeleton */}
                        <div className="md:py-8">
                            {/* product title */}
                            <div className="mb-2 md:mb-3 space-y-2">
                                {/* category name */}
                                <Skeleton className="h-4 w-10" />

                                {/* product name */}
                                <Skeleton className="h-8 w-1/2" />
                            </div>

                            {/* product rating */}
                            <div className="mb-6 md:mb-10 flex items-center gap-3">
                                <Badge className="px-4 py-2 bg-muted animate-pulse w-14 h-9"></Badge>

                                <span className="text-sm text-gray-500 animate-pulse flex items-center gap-2">
                                    <Loader2 className="animate-spin size-5" />{" "}
                                    Ratings
                                </span>
                            </div>

                            {/* product price */}
                            <div className="mb-4">
                                <div className="flex items-end gap-2">
                                    <Skeleton className="h-6 w-1/6" />

                                    <Skeleton className="h-6 w-1/3" />
                                </div>

                                <Skeleton className="h-6 w-1/3" />
                            </div>

                            <div className="mb-6 flex items-center gap-2 mt-2">
                                <Skeleton className="h-6 w-1/4" />
                            </div>

                            {/* buttons */}
                            <div className="flex gap-2.5">
                                <Skeleton className="h-12 w-1/3" />
                                <Skeleton className="h-12 w-1/3" />
                            </div>

                            {/* product description */}

                            <div className="mt-6 space-y-2">
                                <Skeleton className="h-4 w-1/2" />
                                <Skeleton className="h-4 w-1/2" />
                                <Skeleton className="h-4 w-1/2" />
                                <Skeleton className="h-4 w-1/3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default function HeroSectionSkeleton() {
    return (
        <section className="mx-auto max-w-2xl lg:max-w-7xl px-4 lg:px-8 sm:pb-6">
            <div className="mb-8 md:mb-16 flex flex-wrap justify-between">
                {/* Hero text skeleton */}
                <div className="mb-6 sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48 flex flex-col w-full justify-center">
                    <Skeleton className="mb-4 h-12 w-3/4" />
                    <Skeleton className="h-6 w-5/6" />
                    <Skeleton className="h-6 w-2/3" />
                </div>

                {/* Hero images skeleton */}
                <div className="w-full lg:w-2/3 mb-12 md:mb-16 flex">
                    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg relative left-12 md:left-16 top-12 md:top-16 z-10 -ml-12 lg:ml-0 rotate-3">
                        <Skeleton className="h-64 w-64 md:h-80 md:w-80" />
                    </div>
                    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <Skeleton className="h-64 w-64 md:h-80 md:w-80" />
                    </div>
                </div>
            </div>

            {/* Links skeleton */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
                    <Skeleton className="w-1/3 h-full" />
                    <Skeleton className="w-1/3 h-full" />
                    <Skeleton className="w-1/3 h-full" />
                </div>
            </div>
        </section>
    );
}

export {
    Skeleton,
    ProductCardSkeleton,
    ProductsSkeleton,
    NewestSectionSkeleton,
    SingleProductPageSkeleton,
};
