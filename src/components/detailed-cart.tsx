"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Frown, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function DetailedCart() {
    const { cartDetails, removeItem, totalPrice, redirectToCheckout } =
        useShoppingCart();
    const [isCartEmpty, setIsCartEmpty] = useState(true);
    const [products, setProducts] = useState<{ [key: string]: any }[]>([]);

    useEffect(() => {
        if (cartDetails && Object.keys(cartDetails).length > 0) {
            setIsCartEmpty(false);
            setProducts(Object.values(cartDetails));
        } else {
            setIsCartEmpty(true);
        }
    }, [cartDetails]);

    const handleCheckout = async () => {
        try {
            const response = await redirectToCheckout();
            if (response?.error) {
                console.error("Error: ", response.error);
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row overflow-x-hidden  items-center gap-x-7 gap-y-10 py-6 sm:py-8 lg:py-12">
            <table className="flex-1 border-collapse">
                <thead className="bg-primary text-white ">
                    <tr>
                        <th className="md:p-4"></th>
                        <th className="p-4 text-center md:text-start">
                            Product
                        </th>
                        <th className="p-4 text-end">Price</th>
                        <th className="p-4 text-end">Quantity</th>
                        <th className="p-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {!isCartEmpty ? (
                        products.map((prod) => {
                            return (
                                <tr key={prod.id}>
                                    <td className="md:p-4">
                                        <Image
                                            src={prod.image}
                                            alt={prod.name}
                                            height={64}
                                            width={64}
                                            className="w-16 h-16 object-cover object-center mr-auto rounded-md hidden md:block"
                                        />
                                    </td>
                                    <td className="p-4">
                                        <h3 className="font-semibold">
                                            {prod.name}
                                        </h3>
                                    </td>
                                    <td className="p-4 text-gray-600 text-end">
                                        ${prod.price}
                                    </td>
                                    <td className="p-4 text-center">
                                        <input
                                            type="text"
                                            defaultValue={prod.quantity}
                                            className="w-12 h-12 p-2 border rounded-md text-gray-600 text-center outline-none focus:border-2 border-gray-400 focus:border-primary"
                                            readOnly
                                        />
                                    </td>
                                    <td className="p-4 text-center">
                                        <Button
                                            onClick={() => removeItem(prod.id)}
                                            className="mx-auto hover:bg-transparent"
                                            variant={"ghost"}
                                            size={"icon"}
                                            asChild
                                        >
                                            <Trash className="fill-primary text-primary hover:fill-red-600 hover:text-red-600 cursor-pointer h-[25px] w-[30px] transition-all duration-200" />
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan={5}>
                                <h2 className="text-xl py-5 font-[550] text-center bg-gray-50 text-gray-700 flex items-center justify-center gap-x-3">
                                    No item found{" "}
                                    <Frown className="h-7 w-7 animate-bounce" />
                                </h2>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="w-full lg:w-[393px] bg-primary flex flex-col gap-4 items-center justify-center p-4">
                <h2 className="text-[30px] font-semibold text-white text-center">
                    {!isCartEmpty
                        ? "Cart Totals"
                        : "Your cart is currently empty."}
                </h2>

                {!isCartEmpty && (
                    <div className="flex justify-between items-center sm:text-left text-center sm:flex-row flex-col gap-x-4 w-full px-5 xl:px-12">
                        <span className="font-[550] tracking-wide text-gray-200">
                            Total
                        </span>
                        <span className="text-amber-400 text-[20px] font-semibold">
                            ${totalPrice?.toFixed(2)}
                        </span>
                    </div>
                )}

                {isCartEmpty ? (
                    <Button className="mx-auto rounded-none w-40 h-14 border-[1.3px] border-white text-white text-lg font-medium hover:bg-black bg-transparent hover:text-white my-5">
                        <Link href="/all">Go to Shop</Link>
                    </Button>
                ) : (
                    <Button
                        onClick={handleCheckout}
                        className="mx-auto rounded-none w-40 h-14 border-[1.3px] border-white text-white text-lg font-medium hover:bg-black bg-transparent hover:text-white my-5"
                    >
                        Check Out
                    </Button>
                )}
            </div>
        </div>
    );
}

export default DetailedCart;
