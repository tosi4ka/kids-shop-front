import { FiltersTypes, ProductTypes } from '@/types/productsTypes'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit'

const initialState: {
	filters: FiltersTypes
} = {
	filters: {}
}

const filtersSlice = createSlice({
	name: '@@favorite',
	initialState,
	reducers: {
		addFilter: (
			state,
			action: PayloadAction<{
				key: string
				value: string | number | boolean
			}>
		) => {
			const filters = state.filters as FiltersTypes

			if (filters.hasOwnProperty(action.payload.key)) {
				filters[action.payload.key] = action.payload.value
			} else {
				filters[action.payload.key] = action.payload.value
			}
		},
		removeFilter: (state, action) => {
			const filters = state.filters as FiltersTypes

			delete filters[action.payload]
		},
		resetFilter: (state, action) => {
			state.filters = action.payload
		}
	}
})

export const { addFilter, removeFilter, resetFilter } = filtersSlice.actions
export default filtersSlice.reducer
export const selectFilters = (state: any) => state.filters.filters
