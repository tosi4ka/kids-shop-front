import {ProductTypes} from "@/types/productsTypes";

export interface ProductsProps {
	count: number
	next: string
	previous: string
	results: ProductTypes[]
}

const getProductsByFilters = async (query: string) => {
	try {
		const response = await fetch(
			`http://localhost:8000/api/products${query ? `/?${query}` : ''}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			}
		)
		if (!response.ok) {
			return response.json()
		}

		return response.json()
	} catch (error) {
		console.log(error)
	}
}

export default getProductsByFilters
