"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { ProductCart } from "@/types";
import { urlFor } from "@/lib/sanity";

function CheckOutNow({
    name,
    price,
    description,
    currency,
    image,
    price_id,
}: ProductCart) {
    const { checkoutSingleItem } = useShoppingCart();

    const buyNow = (id: string) => {
        checkoutSingleItem(id);
    };

    // preparing the product to be added to cart
    const product = {
        name,
        description,
        price,
        currency,
        image: urlFor(image).url(),
        price_id,
    };
    return (
        <Button
            variant={"outline"}
            className="border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => buyNow(product.price_id)}
        >
            Checkout Now
        </Button>
    );
}

export default CheckOutNow;
