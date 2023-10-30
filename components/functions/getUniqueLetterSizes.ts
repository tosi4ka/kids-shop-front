import { ProductSizeTypes } from "@/types/productsTypes"

export const getUniqueLetterSizes = (sizes: ProductSizeTypes[]): string[] => {
    const uniqueSizes = new Set<string>()
    const order = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']
    
    sizes?.forEach(size => {
        if (size.letter_size && !uniqueSizes.has(size.letter_size)) {
            uniqueSizes.add(size.letter_size)
        }
    })

    const uniqueSizesArray = Array.from(uniqueSizes).sort((a, b) => {
        return order.indexOf(a) - order.indexOf(b)
    })

    return uniqueSizesArray
}