"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { ProductCart } from "@/types";
import { urlFor } from "@/lib/sanity";

function AddToCart({
    name,
    price,
    description,
    currency,
    image,
    price_id,
    className,
}: ProductCart & { className?: string }) {
    const { addItem, handleCartClick } = useShoppingCart();

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
            className={className}
            onClick={() => {
                addItem(product), handleCartClick();
            }}
        >
            Add To Cart
        </Button>
    );
}

export default AddToCart;
