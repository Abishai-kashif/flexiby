import { CustomError, Product } from "@/types";
import getData, { isError } from "@/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Products from "../products";
import ErrorMessage from "../error-message";
import { GET_NEWEST_PRODUCTS } from "@/queries";

async function Newest() {
    const data: Product[] | CustomError = await getData(GET_NEWEST_PRODUCTS);

    if (!data) {
        return <ErrorMessage message="Failed to load newest products" />;
    }

    if (isError(data)) {
        return <ErrorMessage message={data.message} />;
    }

    return (
        <Products
            productsHeader={
                <>
                    <h2 className="text-2xl font-bold tracking-tight  text-gray-900">
                        Our Newest Products
                    </h2>

                    <Link
                        className="text-primary flex items-center gap-x-1"
                        href={"/all"}
                    >
                        See All{" "}
                        <span>
                            <ArrowRight />
                        </span>
                    </Link>
                </>
            }
            products={data}
            className="max-w-2xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        />
    );
}

export default Newest;
