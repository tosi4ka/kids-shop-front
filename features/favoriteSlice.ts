import { ProductTypes } from '@/types/productsTypes'
import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit'

const initialState: {
	products: ProductTypes[]
} = {
	products: []
}

const favoriteSlice = createSlice({
	name: '@@favorite',
	initialState,
	reducers: {
		addToFavorite: (state, action) => {
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
			state.products = filteredCartProducts
		}
	}
})

export const { addToFavorite, removeProduct} =
favoriteSlice.actions
export default favoriteSlice.reducer
export const selectFavoriteProducts = (state: any) => state.favorite.products
export const selectIsItemInFavorite = (itemId: number) =>
	createSelector(selectFavoriteProducts, items =>
		items.some((item: ProductTypes) => item.id === itemId)
	)
