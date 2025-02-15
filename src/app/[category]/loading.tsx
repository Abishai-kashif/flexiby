import Products from "@/components/products";
import { ProductsSkeleton } from "@/components/ui/skeleton";
import React from "react";

async function Loading() {
    return (
        <Products
            productsHeader={
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Our Products for All
                </h2>
            }
            className="max-w-2xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            <ProductsSkeleton />
        </Products>
    );
}

export default Loading;
