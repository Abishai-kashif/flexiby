import { Product } from "../../types";
import getData from "../../utils";
import Products from "@/components/products";

async function CategoryPage({
    params,
}: {
    params: Promise<{ category: string }>;
}) {
    const { category } = await params;
    const query = `*[_type == "product" && category->category == "${category}"] {
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
        <Products
            productsHeader={
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Our Products for {category}
                </h2>
            }
            products={data}
            className="max-w-2xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        />
    );
}

export default CategoryPage;
