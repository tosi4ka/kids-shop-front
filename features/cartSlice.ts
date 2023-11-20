import {ProductTypes} from '@/types/productsTypes'
import {createSelector, createSlice} from '@reduxjs/toolkit'

interface initialStateTypes {
    products: ProductTypes[]
    selectedColors: {
        id: number
        color: string
    }[]
    productsCount: {
        id: number
        count: number
    }[]
    selectedSizes: {
        id: number
        size: string
    }[]
}

const initialState: initialStateTypes = {
    products: [],
    selectedColors: [],
    selectedSizes: [],
    productsCount: []
}

const cartSlise = createSlice({
    name: '@@cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.products.find(
                item => item.id === action.payload.id
            )
            if (!existingItem) {
                state.products.push(action.payload)
                state.productsCount.push({id: action.payload.id, count: 1})

            }
        },
        removeProduct: (state, action) => {
            console.log(JSON.stringify(state.productsCount))
            console.log(JSON.stringify(action.payload))

            const filteredCartProducts = state.products.filter(
                item => item.id !== action.payload
            )
            const filteredCOlors = state.selectedColors.filter(item =>
                item.id !== action.payload
            )

            const filteredProductCount = state.productsCount.filter(item =>
                item.id !== action.payload
            )

            state.products = filteredCartProducts
            state.selectedColors = filteredCOlors
            state.productsCount = filteredProductCount

            console.log(JSON.stringify(filteredProductCount))
        },

        addProductColor: (state, action) => {
            const existingColor = state.selectedColors.find(
                item => item.id === action.payload.id
            )

            const productsColor = state.selectedColors.map(item => {
                if (item.id === action.payload.id) {
                    if (item.color !== action.payload.color) {
                        return {
                            id: action.payload.id,
                            color: action.payload.color
                        }
                    } else return item
                } else return item
            })
            !existingColor
                ? state.selectedColors.push(action.payload)
                : (state.selectedColors = productsColor)
        },
        addProductSize: (state, action) => {
            const existingColor = state.selectedSizes.find(
                item => item.id === action.payload.id
            )

            const productsSizes = state.selectedSizes.map(item => {
                if (item.id === action.payload.id) {
                    if (item.size !== action.payload.size) {
                        return {
                            id: action.payload.id,
                            size: action.payload.size
                        }
                    } else return item
                } else return item
            })
            !existingColor
                ? state.selectedSizes.push(action.payload)
                : (state.selectedSizes = productsSizes)
        },
        changeProductCount: (state, action) => {
            const existingProduct = state.productsCount.find(
                item => item.id === action.payload.id
            )

            const productsCount = state.productsCount.map((item, index) => {
                if (item.id === action.payload.id) {
                    if (action.payload.type === 'dec') {
                        return {
                            id: action.payload.id,
                            count:
                                state.productsCount[index].count > 1
                                    ? state.productsCount[index].count - 1
                                    : state.productsCount[index].count
                        }
                    } else
                        return {
                            id: action.payload.id,
                            count: state.productsCount[index].count + 1
                        }
                } else return item
            })


            !existingProduct
                ? state.productsCount.push({id: action.payload.id, count: 1})
                : (state.productsCount = productsCount)
        }
    }
})

export const {
    addToCart,
    removeProduct,
    addProductColor,
    addProductSize,
    changeProductCount
} = cartSlise.actions
export default cartSlise.reducer
export const selectCart = (state: any) => state.cart.products
export const selectCartColors = (state: any) => state.cart.selectedColors
export const selectCartSizes = (state: any) => state.cart.selectedSizes
export const selectCartProductsCount = (state: any) => state.cart.productsCount
export const selectIsItemInCart = (itemId: number) =>
    createSelector(selectCart, items =>
        items.some((item: ProductTypes) => item.id === itemId)
    )

export const selectActiveColorOnCart = (itemId: number) =>
    createSelector(selectCart, items =>
        items.some((item: ProductTypes) => item.id === itemId)
    )
