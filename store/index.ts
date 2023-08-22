import cartSlise from '@/features/cartSlide'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const store = configureStore({
	reducer: {
		cart: cartSlise
	},
	devTools: true
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
