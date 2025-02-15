import ProductCard from "@/components/product-card";
import { Product } from "../../types";
import getData from "../../utils";

async function AllPage() {
    const query = `*[_type == "product"] {
        _id,
        product,
        price,
        images, 
        "slug": slug.current,         
        "categoryName": category->category,
        description,
        price_id
    }`;

    const data: Product[] = await getData(query);
    return (
        <div className="bg-white">
            <div className="max-w-2xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Our Products for All
                    </h2>
                </div>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-8 gap-y-10">
                    {data.map((product) => (
                        <li key={product._id}>
                            <ProductCard
                                name={product.product}
                                price={product.price}
                                categoryName={product.categoryName}
                                href={"/product/" + product.slug}
                                image={product.images[0]}
                                description={product.description}
                                price_id={product.price_id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AllPage;
