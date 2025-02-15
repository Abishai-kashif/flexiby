"use client";

import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "./ui/badge";

function SmallImages({
    images,
    containerClasses,
    imageClasses,
    onImageClick,
}: {
    images: any;
    containerClasses: string;
    imageClasses: string;
    onImageClick: (image: any) => void;
}) {
    return (
        <ul className={containerClasses}>
            {images.map((image: any, idx: number) => (
                <li key={idx} className={imageClasses}>
                    <Image
                        src={urlFor(image).url()}
                        width={200}
                        height={200}
                        alt={`image ${idx + 1}`}
                        className="h-full w-full object-cover object-center cursor-pointer"
                        onClick={() => onImageClick(image)}
                    />
                </li>
            ))}
        </ul>
    );
}

function MainImage({ image, classes }: { image: any; classes: string }) {
    return (
        <div className={classes}>
            <Image
                src={urlFor(image).url()}
                width={500}
                height={500}
                alt="main image"
                className="h-full w-full object-cover object-center"
            />

            <Badge variant={"tag"}>Sale</Badge>
        </div>
    );
}

function ImageGallery({ images }: { images: any }) {
    const [mainImage, setMainImage] = useState(images[0]);

    const HandleImageClick = (image: any) => {
        setMainImage(image);
    };

    return (
        <div className="grid gap-6 lg:grid-cols-5">
            <SmallImages
                images={images}
                containerClasses="order-last lg:order-none flex lg:flex-col gap-4"
                imageClasses="overflow-hidden rounded-lg bg-gray-100"
                onImageClick={HandleImageClick}
            />

            <MainImage
                image={mainImage}
                classes="lg:col-span-4 relative overflow-hidden rounded-lg bg-gray-100"
            />
        </div>
    );
}

export default ImageGallery;
