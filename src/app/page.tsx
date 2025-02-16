import Hero from "@/components/sections/hero";
import Newest from "@/components/sections/newest";
import HeroSectionSkeleton, {
    NewestSectionSkeleton,
} from "@/components/ui/skeleton";
import { Suspense } from "react";

export default async function Home() {
    return (
        <main className="bg-white pb-6 sm:pb-8 lg:pb-12">
            <Suspense fallback={<HeroSectionSkeleton />}>
                <Hero />
            </Suspense>
            <Suspense fallback={<NewestSectionSkeleton />}>
                <Newest />
            </Suspense>
        </main>
    );
}
