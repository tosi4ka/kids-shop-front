'use client'

import { useSelector } from 'react-redux'

import style from './style.module.scss'
import Title from '@/components/SectionTitle'
import { selectFavoriteProducts } from '@/features/favoriteSlice'
import { ProductTypes } from '@/types/productsTypes'
import ProductCard from '@/components/ProductCard'
import Offers from '../../modules/Offers'
import lamaImage from '../../public/MainPage/Offers.png'
import Link from 'next/link'
import EmptyProducts from '@/modules/EmptyProducts'

const FavoritePage = () => {
	const favoriteProducts: ProductTypes[] = useSelector(selectFavoriteProducts)

	return (
		<>
			{favoriteProducts.length > 0 ? (
				<>
					<section className={style.wrapper}>
						<Title
							title={`Сподобалось (${formatText(favoriteProducts.length)})`}
						/>
						<div className={style.products__wrapper}>
							{favoriteProducts.map((item, index) => (
								<ProductCard data={item} key={index} isFavorite={false} />
							))}
						</div>
					</section>
					<Offers
						title='Бажаєте отримувати цікаві пропозиції?'
						text='Підписуйтесь на нашу розсилку'
						image={lamaImage}
						placeholderText='Електронна пошта'
					/>
				</>
			) : (
				<EmptyProducts
					btnLink='/'
					btnText='До каталогу'
					cart={false}
					text='Додайте товари, що сподобалися і завжди будете мати до них швидкий
                доступ'
					title='У вас поки немає товарів у списку “Сподобалось”'
				/>
			)}
		</>
	)
}

export default FavoritePage

function formatText(number: number) {
	const remainder10 = number % 10
	const remainder100 = number % 100

	if (remainder10 === 1 && remainder100 !== 11) {
		return `${number} товар`
	} else if (
		remainder10 >= 2 &&
		remainder10 <= 4 &&
		(remainder100 < 10 || remainder100 >= 20)
	) {
		return `${number} товара`
	} else {
		return `${number} товарів`
	}
}
