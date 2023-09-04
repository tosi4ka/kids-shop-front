import { selectCartProductsCount } from '@/features/cartSlice'
import { ProductTypes } from '@/types/productsTypes'
import { useSelector } from 'react-redux/es/hooks/useSelector'

export const getTotalCost = (cart: ProductTypes[]) => {
	const productsCount: { id: number; count: number }[] = useSelector(
		selectCartProductsCount
	)

	const totalCost: number = cart.reduce(
		(accumulator, currentValue, index) =>
			accumulator + currentValue.price * productsCount[index].count,
		0
	)
	return totalCost
}
