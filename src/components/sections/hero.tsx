import { HeroImages } from "@/types";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import getData from "@/utils";

async function Hero() {
    const query = `*[_type == "heroImages"] {
	    image1,
	    image2
	}[0]`;

    const data: HeroImages = await getData(query);

    return (
        <section className="mx-auto max-w-2xl lg:max-w-7xl px-4 lg:px-8 sm:pb-6">
            <div className="mb-8 md:mb-16 flex flex-wrap justify-between">
                {/* hero text */}
                <div className="mb-6 sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48 flex flex-col w-full justify-center ">
                    <h2 className="mb-4 text-4xl font-bold text-black/95 sm:text-5xl md:mb-8 md:text-6xl">
                        Top Fashion for a top price!
                    </h2>

                    <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                        We sell only the most exclusive and high quality
                        products for you. We are the best so come and shop with
                        us.
                    </p>
                </div>

                {/* hero images */}
                <div className="w-full lg:w-2/3 mb-12 md:mb-16 flex">
                    {/* image 1 */}
                    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg relative left-12 md:left-16 top-12 md:top-16 z-10 -ml-12 lg:ml-0 rotate-3">
                        <Image
                            src={urlFor(data.image1).url()}
                            alt="hero image"
                            width={500}
                            height={500}
                            className="h-full w-full object-cover object-center"
                            priority
                        />
                    </div>

                    {/* image 2 */}
                    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg ">
                        <Image
                            src={urlFor(data.image2).url()}
                            alt="hero image"
                            width={500}
                            height={500}
                            className="h-full w-full object-cover object-center"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* links */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
                <ul
                    className="flex h-12 w-64 
                divide-x
              overflow-hidden rounded-lg border"
                >
                    <li className="w-1/3">
                        <Link
                            href="/Men"
                            className="flex items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 w-full h-full"
                        >
                            Men
                        </Link>
                    </li>

                    <li className="w-1/3">
                        <Link
                            href="/Women"
                            className="flex items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 w-full h-full"
                        >
                            Women
                        </Link>
                    </li>

                    <li className="w-1/3">
                        <Link
                            href="/Teens"
                            className="flex items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 w-full h-full"
                        >
                            Teens
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Hero;
