import { ProductTypes } from '@/types/productsTypes'
import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit'

const initialState: {
	products: ProductTypes[]
	selectedColors: {
		id: number
		color: string
	}[]

	selectedSizes: {
		id: number
		color: string
	}[]
} = {
	products: [],
	selectedColors: [],
	selectedSizes: []
}

const cartSlise = createSlice({
	name: '@@cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.products.length === 0 ? state.products.push(action.payload) : null
			const existingItem = state.products.find(
				item => item.id === action.payload.id
			)
			!existingItem ? state.products.push(action.payload) : null
		},
		removeProduct: (state, action) => {
			const filteredCartProducts = state.products.filter(
				item => item.id !== action.payload
			)
			const filteredCOlors = state.selectedColors.filter(item => {
				item.id !== action.payload
			})
			state.products = filteredCartProducts
			state.selectedColors = filteredCOlors
		},
		addProductColor: (state, action) => {
			state.selectedColors.push({
				id: action.payload.id,
				color: action.payload.color
			})
		},
		addProductSize: (state, action) => {
			state.selectedSizes.push({
				id: action.payload.id,
				color: action.payload.color
			})
		}
	}
})

export const { addToCart, removeProduct, addProductColor, addProductSize } =
	cartSlise.actions
export default cartSlise.reducer
export const selectCart = (state: any) => state.cart.products
export const selectIsItemInCart = (itemId: number) =>
	createSelector(selectCart, items =>
		items.some((item: ProductTypes) => item.id === itemId)
	)

export const selectActiveColorOnCart = (itemId: number) =>
	createSelector(selectCart, items =>
		items.some((item: ProductTypes) => item.id === itemId)
	)
