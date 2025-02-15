import Image from "next/image";
import Link from "next/link";
import AddToCart from "./add-to-cart";
import { urlFor } from "@/lib/sanity";

function ProductCard({
    name,
    price,
    categoryName,
    description,
    href,
    image,
    price_id,
    className,
}: {
    name: string;
    price: number;
    href: string;
    categoryName: string;
    image: any;
    description: string;
    price_id: string;
    className?: string;
}) {
    return (
        <article className="group relative">
            {/* image */}
            <div
                className={`aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 ${className} group relative`}
            >
                <Image
                    src={urlFor(image).url()}
                    alt="Product image"
                    className="w-full h-full object-cover object-center"
                    width={300}
                    height={300}
                />

                <div className="absolute bottom-0 items-center justify-center hidden group-hover:flex h-fit w-full">
                    <AddToCart
                        // key={_id}
                        currency="USD"
                        description={description}
                        image={image}
                        price={price}
                        name={name}
                        price_id={price_id}
                        className="w-full rounded-t-none hover:bg-primary/100"
                    />
                </div>
            </div>

            {/* content */}
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link href={href}>{name}</Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{categoryName}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${price}</p>
            </div>
        </article>
    );
}

export default ProductCard;
