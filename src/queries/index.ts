// queries/products.ts
export const GET_NEWEST_PRODUCTS = `*[_type == "product"][0...4] | order(_createdAt desc) {
    _id,
    product,
    price,
    "slug": slug.current,
    "categoryName": category->category,
    images,
    description,
    price_id,
}`;

export const GET_SLUG_QUERY = (slug: string) => {
	return `* [_type == "product" && slug.current == "${slug}"] {
            _id,
            product,
            price,
            "categoryName": category->category,
            images,
            description,
        price_id
        }[0]`;
};
