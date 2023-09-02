'use client'

import { useSelector } from 'react-redux'
import { useState } from 'react'

import style from './style.module.scss'
import Title from '@/components/SectionTitle'
import { selectFavoriteProducts } from '@/features/favoriteSlice'
import { ProductTypes } from '@/types/productsTypes'
import ProductCard from '@/components/ProductCard'
import Offers from '../../modules/Offers'
import EmptyProducts from '@/modules/EmptyProducts'
import PopUpMessage from '@/components/PopupMessage'
import { outProductsTextByCount } from '@/components/functions/formatText'

import lamaImage from '../../public/MainPage/Offers.png'
import ButtonBackToCatalog from '@/components/Buttons/BackToCatalog'

interface StateProps {
	show: boolean
	isAddToCart: boolean
}

const initialObj = {
	show: false,
	isAddToCart: false
}

const FavoritePage = () => {
	const [showMessage, setShowMessage] = useState<StateProps>(initialObj)
	const favoriteProducts: ProductTypes[] = useSelector(selectFavoriteProducts)

	return (
		<section className={style.favorite}>
			{favoriteProducts.length > 0 ? (
				<>
					<div className={style.favorite__wrapper}>
						<Title
							title={`Сподобалось (${outProductsTextByCount(
								favoriteProducts.length
							)})`}
						/>
						<div className={style.products__wrapper}>
							{favoriteProducts.map((item, index) => (
								<ProductCard
									data={item}
									key={index}
									isFavorite={false}
									setShowMessage={setShowMessage}
								/>
							))}
						</div>
						<div className={style.back_to_catalog}>
							<ButtonBackToCatalog btn_text='Назад до каталогу' />
						</div>
					</div>
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
			{showMessage.show && (
				<PopUpMessage
					text={`${
						showMessage.isAddToCart
							? 'Товар перенесено до кошику'
							: 'Товар видалено з улюбленого'
					}`}
				/>
			)}
		</section>
	)
}

export default FavoritePage
