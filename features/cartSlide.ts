import { ProductTypes } from '@/types/productsTypes'
import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit'

// const addToCart = createAction<ProductTypes>('addToCart')

const initialState: { products: ProductTypes[] } = {
	products: []
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
			state.products = filteredCartProducts
		}
	}
})

export const { addToCart, removeProduct } = cartSlise.actions
export default cartSlise.reducer
export const selectCart = (state: any) => state.cart.products
