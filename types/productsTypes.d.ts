export type ProductsTypes = ProductTypes[]

interface ProductTypes {
	id: number
	product_images: ProductImage[]
	category: ProductCategoryTypes
	section: ProductSectionTypes
	brand: ProductBrandTypes
	discount: ProductDiscountTypes | null
	color: ProductColorTypes[]
	name: string
	description: string
	item_number: string
	price: number
	rating: number
	product_size: ProductSizeTypes[]
	age: number
	male: boolean
	is_sale: boolean
}

interface ProductSizeTypes {
	brand_size: number,
	letter_size: string
  }

interface ProductCategoryTypes {
	id: number
	name: string
}

interface ProductSectionTypes {
	id: number
	name: string
}

interface ProductBrandTypes {
	id: number
	name: string
}

interface ProductDiscountTypes {
	id: number
	name: number
}

interface ProductColorTypes {
	id: number
	name: string
}

interface ProductImage {
	id: number
	product: number
	product_image: string
}
