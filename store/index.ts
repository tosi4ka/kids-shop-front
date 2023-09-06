import cartSlise from '@/features/cartSlice'
import favoriteSlice from '@/features/favoriteSlice'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import authReducer from './auth/authReducer'

import logger from 'redux-logger'

const store = configureStore({
	reducer: {
		cart: cartSlise,
		favorite: favoriteSlice,
		auth: authReducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			...(process.env.NODE_ENV !== 'production' ? [logger] : [])
		),
	devTools: true
})

export type IRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
