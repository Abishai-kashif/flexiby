"use client";

import { Button } from "@/components/ui/button";

function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    if (error) {
    }
    console.error("Error: ", error);
    return (
        <main className="text-center w-full my-32 overflow-x-hidden">
            <h2 className="text-3xl font-semibold ">Something went wrong!</h2>
            <Button
                onClick={() => reset()}
                className="mt-5 font-semibold text-md text-white"
            >
                Try again
            </Button>
        </main>
    );
}

export default Error;
