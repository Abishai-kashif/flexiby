"use client";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import React from "react";
import Link from "next/link";

function ShoppingCardModel() {
    const {
        cartCount,
        shouldDisplayCart,
        handleCartClick,
        cartDetails,
        removeItem,
        totalPrice,
        setItemQuantity,
        redirectToCheckout,
    } = useShoppingCart();

    async function handleCheckoutClick(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        event.preventDefault();

        try {
            await redirectToCheckout();
        } catch (error) {
            console.error(error);
            // throw new Error((error as Error).message);
        }
    }

    return (
        <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
            <SheetContent className="sm:max-w-lg w-[90vw]">
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>

                <div className="h-full flex flex-col justify-between">
                    <div className="mt-8 flex-1 overflow-y-auto">
                        <ul className="-my-6 divide-y divide-gray-200">
                            {cartCount == 0 ? (
                                <h2 className="py-6">
                                    You don&apos;t have any items
                                </h2>
                            ) : (
                                <>
                                    {Object.values(cartDetails ?? {}).map(
                                        (entry: any) => (
                                            <li
                                                key={entry.id}
                                                className="flex py-6"
                                            >
                                                {/* img */}
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                                                    <Image
                                                        src={entry.image}
                                                        alt={
                                                            entry.name + "image"
                                                        }
                                                        width={100}
                                                        height={100}
                                                    />
                                                </div>

                                                {/* details */}
                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                {entry.name}
                                                            </h3>
                                                            <p className="ml-4">
                                                                $
                                                                {entry.price.toFixed(
                                                                    1
                                                                )}
                                                            </p>
                                                        </div>

                                                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                                                            {entry.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-1 items-center justify-between text-sm mt-1">
                                                        {/* Quantity controls */}
                                                        <div className="flex items-center gap-x-[0.40rem] mx-2">
                                                            <Button
                                                                type="button"
                                                                onClick={() =>
                                                                    setItemQuantity(
                                                                        entry.id,
                                                                        Math.max(
                                                                            entry.quantity -
                                                                                1,
                                                                            1
                                                                        )
                                                                    )
                                                                }
                                                                className="p-1 w-5 h-5 font-bold flex items-center justify-center text-primary"
                                                                variant={
                                                                    "secondary"
                                                                }
                                                            >
                                                                -
                                                            </Button>
                                                            <p className="text-gray-500">
                                                                {entry.quantity}
                                                            </p>
                                                            <Button
                                                                type="button"
                                                                onClick={() =>
                                                                    setItemQuantity(
                                                                        entry.id,
                                                                        entry.quantity +
                                                                            1
                                                                    )
                                                                }
                                                                variant={
                                                                    "secondary"
                                                                }
                                                                className="p-1 w-5 h-5 font-bold flex items-center justify-center text-primary"
                                                            >
                                                                +
                                                            </Button>
                                                        </div>
                                                        <div className="flex">
                                                            <button
                                                                type="button"
                                                                className="font-medium text-primary
                                                                
                                                                hover:text-primary/80"
                                                                onClick={() =>
                                                                    removeItem(
                                                                        entry.id
                                                                    )
                                                                }
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    )}
                                </>
                            )}
                        </ul>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal:</p>
                            <p>${totalPrice?.toFixed(1)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                            Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6 flex items-center justify-between gap-5">
                            <Button
                                className="flex-1"
                                onClick={handleCheckoutClick}
                            >
                                Checkout
                            </Button>

                            <Button asChild variant={"outline"}>
                                <Link href={"/cart"} className="flex-1">
                                    View Cart
                                </Link>
                            </Button>
                        </div>

                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                OR{"  "}
                                <button
                                    className="font-medium text-primary hover:text-primary/80"
                                    onClick={() => handleCartClick()}
                                >
                                    Continue Shopping
                                    <span aria-hidden="true"></span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default ShoppingCardModel;
