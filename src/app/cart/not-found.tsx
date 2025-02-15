import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";
import Link from "next/link";

function NotFound() {
    return (
        <main className="flex min-h-[480px] sm:min-h-[400px] flex-col items-center justify-center gap-2 px-7">
            <div className="flex flex-col items-center justify-center">
                <CircleX
                    className="w-16 h-16 mb-4 animate-bounce text-red-700"
                    strokeWidth={1.6}
                />

                <h1 className="text-3xl font-semibold">404 - Cart Not Found</h1>
                <p className="text-center">
                    It looks like your cart is empty. Add some products to your
                    cart first.
                </p>
                <Button asChild className="mt-4">
                    <Link href="/all">Go back to shop</Link>
                </Button>
            </div>
        </main>
    );
}

export default NotFound;
