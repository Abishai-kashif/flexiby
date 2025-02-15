export interface HeroImages {
	image1: unknown;
	image2: unknown;
}

export interface Product {
	_id: string;
	product: string;
	images: any;
	price: number;
	slug: string;
	categoryName: string;
	description: string;
	price_id: string;
}

export interface ProductCart {
	// id: string;
	name: string;
	price: number;
	description: string;
	currency: string;
	image: any;
	price_id: string;
}

export interface CustomError {
	message: string;
}
