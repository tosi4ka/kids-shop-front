'use client'

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import style from './style.module.scss'

import { ProductTypes } from '@/types/productsTypes'
import { outProductsTextByCount } from '@/components/functions/formatText'
import {
	removeProduct,
	selectCart,
	selectCartColors,
	selectCartProductsCount,
	selectCartSizes
} from '@/features/cartSlice'
import { getTotalCost } from '@/components/functions/getTotalCost'
import { addToFavorite } from '@/features/favoriteSlice'
import { useAppDispatch } from '@/store'
import Title from '@/components/SectionTitle'
import EmptyProducts from '@/modules/EmptyProducts'
import FormPromoCode from '@/components/FormPromoCode'
import CheckoutProductCard from '@/components/CheckoutProductCard'
import ButtonBackToCatalog from '@/components/Buttons/BackToCatalog'
import getProducts from '@/components/functions/getProducts'
import MainPageOurTop from '../../modules/MainPageOurTop'

const FavoritePage = () => {
	const [ourTopData, setOurTopData] = useState()
	const cartProducts: ProductTypes[] = useSelector(selectCart)
	const cartProductsCount: { id: number; count: number }[] = useSelector(
		selectCartProductsCount
	)
	const dispatch = useAppDispatch()

	const cartProductsSizes: { id: number; size: string }[] =
		useSelector(selectCartSizes)

	const cartColors: { id: number; color: string }[] =
		useSelector(selectCartColors)

	const handleAddToFavorite = (data: ProductTypes) => {
		dispatch(addToFavorite(data))
	}

	const handleRemoveItemFromCart = (id: number) => {
		dispatch(removeProduct(id))
	}

	const setActiveColor = (id: number): string => {
		let activeColor = ''
		cartColors.map(item => {
			item.id === id ? (activeColor = item.color) : null
		})
		return activeColor
	}

	const setActiveSize = (id: number): string => {
		let activeSize = ''
		cartProductsSizes.map(item => {
			item.id === id ? (activeSize = item.size) : null
		})
		return activeSize
	}

	const setCount = (id: number): number => {
		let res = 0
		cartProductsCount.forEach(item => {
			if (item.id === id) {
				return (res = item.count)
			}
		})
		return res
	}

	useEffect(() => {
		getProducts().then(data => setOurTopData(data))
	}, [])

	return (
		<>
			{cartProducts.length > 0 ? (
				<>
					<section className={style.wrapper}>
						<Title
							title={`Сподобалось (${outProductsTextByCount(
								cartProducts.length
							)})`}
						/>
						<div className={style.content__wrapper}>
							<div className={style.products__wrapper}>
								{cartProducts.map((item, index) => (
									<CheckoutProductCard
										item={item}
										key={index}
										activeColor={() => setActiveColor(item.id)}
										activeSize={() => setActiveSize(item.id)}
										count={() => setCount(item.id)}
										addToFavorite={handleAddToFavorite}
										removeProductFromCart={handleRemoveItemFromCart}
									/>
								))}
								<div className={style.back_to_catalog}>
									<ButtonBackToCatalog btn_text='Назад до каталогу' />
									<button className={style.btn_to_order}>
										Оформити замовлення
									</button>
								</div>
							</div>
							<aside className={style.side__panel}>
								<FormPromoCode placeholderText='Промокод' type='text' />
								<div className={style.price__info}>
									<div className={style.cart_price_row}>
										<span>Всього</span>
										<span>{`${getTotalCost(cartProducts)}₴`}</span>
									</div>
									<div className={style.cart_price_row}>
										<span className={style.sale_text}>Знижка</span>
										<span className={style.sale_text}>0 ₴</span>
									</div>
									<div className={style.cart_price_row}>
										<span className={style.sale_text}>Доставка</span>
										<span className={style.sale_text}>0 ₴</span>
									</div>
								</div>
								<div className={style.cart_price_row}>
									<span className={style.total_price_with_sale}>
										Сума до сплати
									</span>
									<span>{`${getTotalCost(cartProducts)}₴`}</span>
								</div>
								<button className={style.btn_to_order}>
									Оформити замовлення
								</button>
							</aside>
						</div>

						{ourTopData && (
							<MainPageOurTop
								title='Розпродаж'
								data={ourTopData}
								slideToShow={4}
							/>
						)}
					</section>
				</>
			) : (
				<EmptyProducts
					btnLink='/'
					btnText='До каталогу'
					cart={false}
					text='Подивіться наші актуальні пропозиції. Ми впевнені, Ви знайдете щось цікаве!'
					title='Ваш кошик порожній'
				/>
			)}
		</>
	)
}

export default FavoritePage
