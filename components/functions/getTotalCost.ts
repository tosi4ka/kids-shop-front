import {ProductTypes} from '@/types/productsTypes'

export const getTotalCost = (
    cart: ProductTypes[],
    cartProductsCount?: { id: number; count: number }[]
) => {
    const totalCost: number = cart.reduce((accumulator, currentValue, index) => {
        if (cartProductsCount) {
            let cartProductsCountElement = cartProductsCount[index];
            if (cartProductsCountElement === undefined) {
                return accumulator
            } else {
                return accumulator + currentValue.price * cartProductsCountElement.count
            }
        } else return accumulator + currentValue.price

    }, 0)
    return totalCost
}

export const getTotalCount = (
    cartProductsCount?: { id: number; count: number }[]
) => {
    if (cartProductsCount) {
        return cartProductsCount
            .map(it => it.count)
            .reduce((sum, e) => sum + e, 0);
    } else {
        return 0;
    }

}