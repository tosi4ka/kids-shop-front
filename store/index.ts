import cartSlise from '@/features/cartSlice'
import favoriteSlice from '@/features/favoriteSlice'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const store = configureStore({
	reducer: {
		cart: cartSlise,
		favorite: favoriteSlice
	},
	devTools: true
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
