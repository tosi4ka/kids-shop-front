import { ProductTypes } from '@/types/productsTypes'

export const getTotalCost = (cart: ProductTypes[]) => {
	const totalCost: number = cart.reduce(
		(accumulator, currentValue) => accumulator + currentValue.price,
		0
	)
	return totalCost
}
