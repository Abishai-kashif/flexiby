import { CustomError, Product } from "@/types";
import getData, { isError } from "@/utils";
import AddToCart from "@/components/add-to-cart";
import ImageGallery from "@/components/image-gallery";
import { Badge } from "@/components/ui/badge";
import { Star, Truck } from "lucide-react";
import React from "react";
import CheckOutNow from "@/components/checkout-now";
import { notFound } from "next/navigation";
import { GET_SLUG_QUERY } from "@/queries";
import ErrorMessage from "@/components/error-message";

async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const query = GET_SLUG_QUERY(slug);

    const data: Product | CustomError = await getData(query);
    await new Promise((resolve) => setTimeout(resolve, 4000));

    if (!data) {
        notFound();
    }

    if (isError(data)) {
        return <ErrorMessage message={data.message} />;
    }

    const { images, categoryName, product, price, _id, price_id, description } =
        data;

    return (
        <main className="min-h-screen">
            <div className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    {/* product */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* product images */}
                        <ImageGallery images={images} />

                        {/* product content */}
                        <div className="md:py-8">
                            {/* product title */}
                            <div className="mb-2 md:mb-3">
                                <span className="mb-0.5 inline-block text-gray-500">
                                    {categoryName}
                                </span>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                                    {product}
                                </h2>
                            </div>

                            {/* product rating */}
                            <div className="mb-6 md:mb-10 flex items-center gap-3">
                                <Badge className="flex items-center gap-x-2 px-4 py-2">
                                    <span className="text-sm">4.8</span>
                                    <Star className="h-4 w-4" />
                                </Badge>

                                <span className="text-sm text-gray-500">
                                    55 Ratings
                                </span>
                            </div>

                            {/* product price */}
                            <div className="mb-4">
                                <div className="flex items-end gap-2">
                                    <ins className="text-xl md:text-2xl  font-bold text-gray-800 no-underline">
                                        ${price}
                                    </ins>

                                    <del className="mb-0.5 text-red-500">
                                        ${price + 30}
                                    </del>
                                </div>

                                <span className="text-sm text-gray-500">
                                    Incl. Vat plus shipping
                                </span>
                            </div>

                            <div className="mb-6 flex items-center gap-2 text-gray-500">
                                <Truck className="w-6 h-6" />
                                <span className="text-sm">
                                    2-4 Day Shipping
                                </span>
                            </div>

                            <div className="flex gap-2.5">
                                <AddToCart
                                    key={_id}
                                    currency="USD"
                                    description={description}
                                    image={images[0]}
                                    price={price}
                                    name={product}
                                    price_id={price_id}
                                />
                                <CheckOutNow
                                    currency="USD"
                                    description={description}
                                    image={images[0]}
                                    price={price}
                                    name={product}
                                    // id={_id}
                                    price_id={price_id}
                                />
                            </div>

                            {/* description */}
                            <p className="mt-12 text-base text-gray-500 tracking-wide">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page;
