import { ProductTypes } from '@/types/productsTypes'

export const getTotalCost = (
	cart: ProductTypes[],
	cartProductsCount?: { id: number; count: number }[]
) => {
	const totalCost: number = cart.reduce((accumulator, currentValue, index) => {
		if (cartProductsCount) {
			return accumulator + currentValue.price * cartProductsCount[index].count
		} else return accumulator + currentValue.price
		
	}, 0)
	return totalCost
}
