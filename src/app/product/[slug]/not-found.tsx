import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";
import Link from "next/link";

function NotFound() {
    return (
        <main className="flex min-h-[480px] sm:min-h-[400px] flex-col items-center justify-center gap-2">
            <Frown
                className="w-16 h-16 mb-4 animate-bounce text-red-700"
                strokeWidth={1.6}
            />
            <h2 className="text-3xl font-semibold">404 Not Found</h2>
            <p>Could not find the requested Product.</p>
            <Button asChild className="mt-2">
                <Link href="/all">Go Back</Link>
            </Button>
        </main>
    );
}

export default NotFound;
