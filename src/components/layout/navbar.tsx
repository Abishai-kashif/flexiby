"use client";

import NavLinks from "./nav-links";
import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { useShoppingCart } from "use-shopping-cart";
import Logo from "./logo";

function Navbar() {
    const { handleCartClick } = useShoppingCart();

    return (
        <header className="mb-8 border-b sticky top-0 bg-white z-50">
            <div className="flex items-center justify-between mx-auto max-w-2xl lg:max-w-7xl px-4 sm:px-6">
                {/* logo */}
                <Logo />

                {/* navlinks */}
                <NavLinks className="hidden lg:block" />

                {/* btn */}
                <div className="flex divide-x border-r sm:border-l">
                    <Button
                        variant={"outline"}
                        className="p-4 flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
                        onClick={() => handleCartClick()}
                    >
                        <ShoppingBag />
                        <span className="hidden sm:block text-xs font-semibold text-gray-500">
                            Cart
                        </span>
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
