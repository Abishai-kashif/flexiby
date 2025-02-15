import { client } from "@/lib/sanity";
import { CustomError } from "@/types";

export default async function getData(query: string) {
	try {
		const data = await client.fetch(
			query,
			{},
			{
				cache: "force-cache",
			}
		);

		return data;
	} catch (error: any) {
		console.error("Error fetching data:", error.message);

		// Return a consistent error structure
		return {
			message: error.message || "An error occurred while fetching data",
		};
	}
}

export function isError(obj: any): obj is CustomError {
	if ("message" in obj) {
		return true;
	}
	return false;
}
