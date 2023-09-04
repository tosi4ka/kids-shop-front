import style from './sttyle.module.scss'
import Image from 'next/image'
import Select from 'react-select'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import maleIcon from '../../public/icons/maleIcon.svg'
import femaleIcon from '../../public/icons/femaleIcon.svg'
import { selectIsItemInFavorite } from '@/features/favoriteSlice'
import { ProductTypes } from '@/types/productsTypes'
import { useAppDispatch } from '@/store'
import {
	addProductColor,
	addProductSize,
	changeProductCount
} from '@/features/cartSlice'
import { getUniqueLetterSizes } from '../functions/getUniqueLetterSizes'

interface CheckoutProductCardTypes {
	item: ProductTypes
	addToFavorite: (data: ProductTypes) => void
	removeProductFromCart: (id: number) => void
	activeColor: () => string
	activeSize: () => string
	count: () => number
}

interface Option {
	value: string
	label: string
}

const CheckoutProductCard: React.FC<CheckoutProductCardTypes> = props => {
	const [selectedOption, setSelectedOption] = useState<Option>()
	const [count, setCount] = useState(props.count)
	const dispatch = useAppDispatch()

	const activeColor = props.activeColor()
	const activeSize = props.activeSize()
	const isItemInFavorite = useSelector(selectIsItemInFavorite(props.item.id))

	const Options: Option[] = getUniqueLetterSizes(props.item.product_size).map(
		item => ({ value: item, label: item })
	)

	const onChange = (selectedOptions: any) => {
		const selectedOption: Option = selectedOptions
		setSelectedOption(selectedOption)
		dispatch(addProductSize({ id: props.item.id, size: selectedOption.value }))
	}

	const handleAddColor = (color: string) => {
		dispatch(addProductColor({ id: props.item.id, color: color }))
	}

	useEffect(() => {
		setSelectedOption({ value: activeSize, label: activeSize })
	}, [])

	const handleDecrement = () => {
		setCount(prev => (prev > 1 ? prev - 1 : prev))
		dispatch(changeProductCount({ id: props.item.id, type: 'dec' }))
	}

	const handleIncrement = () => {
		setCount(prev => prev + 1)
		dispatch(changeProductCount({ id: props.item.id, type: 'inc' }))
	}

	return (
		<div className={style.cart_product}>
			<div className={style.title__row}>
				<h3 className={style.title}>{props.item.name}</h3>
				<div className={style.title_buttons}>
					<span
						className={style.text_with_icon}
						onClick={() => props.addToFavorite(props.item)}
					>
						<svg
							width='40'
							height='40'
							viewBox='0 0 40 40'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M20 28C20 28 11 22.9091 11 16.7273C11.0002 15.6347 11.375 14.5759 12.0607 13.7308C12.7464 12.8858 13.7007 12.3068 14.7613 12.0921C15.8219 11.8775 16.9233 12.0405 17.8784 12.5535C18.8334 13.0665 19.5831 13.8977 20 14.9059L20 14.9059C20.4169 13.8977 21.1666 13.0665 22.1216 12.5535C23.0767 12.0405 24.1781 11.8775 25.2387 12.0921C26.2993 12.3068 27.2536 12.8858 27.9393 13.7308C28.625 14.5759 28.9998 15.6347 29 16.7273C29 22.9091 20 28 20 28Z'
								stroke='#CD9EFF'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						{isItemInFavorite ? 'Додано до обранного' : 'Додати до обранного'}
					</span>
					<span
						className={style.text_with_icon}
						onClick={() => props.removeProductFromCart(props.item.id)}
					>
						<svg
							width='40'
							height='40'
							viewBox='0 0 40 40'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M14.9231 15L15.6282 26.7273C15.6617 27.4627 16.1359 28 16.7564 28H23.2436C23.8666 28 24.332 27.4627 24.3718 26.7273L25.0769 15M14 15H26M17.9487 14.5455V12.9545C17.9484 12.8291 17.9681 12.7048 18.0067 12.5888C18.0452 12.4728 18.1019 12.3675 18.1734 12.2788C18.2448 12.1901 18.3298 12.1198 18.4232 12.0719C18.5167 12.0241 18.6168 11.9996 18.7179 12H21.2821C21.3832 11.9996 21.4833 12.0241 21.5768 12.0719C21.6702 12.1198 21.7552 12.1901 21.8266 12.2788C21.8981 12.3675 21.9548 12.4728 21.9933 12.5888C22.0319 12.7048 22.0516 12.8291 22.0513 12.9545V14.5455'
								stroke='#CD9EFF'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						Видалити
					</span>
				</div>
			</div>
			<span className={style.brand__text}>{props.item.brand.name}</span>
			<div className={style.main__product_info}>
				<div className={style.image_block}>
					<Image
						src={props.item.product_images[0].product_image}
						alt={props.item.name}
						fill
						sizes='100vw'
						style={{ objectFit: 'cover' }}
					/>
					<div className={style.indicator_for}>
						<Image
							src={props.item.male ? maleIcon : femaleIcon}
							alt='sex icon'
						/>
					</div>
				</div>
				<div className={style.order_info}>
					<div className={style.upper_row}>
						<div className={style.left_block}>
							<span className={style.left_block_text}>Розмір</span>
							<Select
								value={selectedOption}
								classNamePrefix='custom__select'
								onChange={onChange}
								options={Options}
							/>
						</div>
						<div className={style.price_block}>
							<span className={style.price}>{`${props.item.price * count} ₴`}</span>
							<div className={style.count_block}>
								<div
									className={style.controls_button_inc}
									onClick={handleDecrement}
								>
									<svg
										width='8'
										height='2'
										viewBox='0 0 8 2'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g clipPath='url(#clip0_597_7318)'>
											<rect width='8' height='2' rx='1' fill='#7F7C83' />
										</g>
										<defs>
											<clipPath id='clip0_597_7318'>
												<rect width='8' height='2' fill='white' />
											</clipPath>
										</defs>
									</svg>
								</div>
								<span className={style.count_value}>{count}</span>
								<div
									className={style.controls_button_dec}
									onClick={handleIncrement}
								>
									<svg
										width='8'
										height='8'
										viewBox='0 0 8 8'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g clipPath='url(#clip0_597_7321)'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M4.79688 0.8C4.79688 0.358172 4.4387 0 3.99688 0C3.55505 0 3.19688 0.358172 3.19688 0.8V3.19922H0.8C0.358172 3.19922 0 3.55739 0 3.99922C0 4.44105 0.358172 4.79922 0.8 4.79922H3.19688V7.2C3.19688 7.64183 3.55505 8 3.99688 8C4.4387 8 4.79688 7.64183 4.79688 7.2V4.79922H7.2C7.64183 4.79922 8 4.44105 8 3.99922C8 3.55739 7.64183 3.19922 7.2 3.19922H4.79688V0.8Z'
												fill='#7F7C83'
											/>
										</g>
										<defs>
											<clipPath id='clip0_597_7321'>
												<rect width='8' height='8' fill='white' />
											</clipPath>
										</defs>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className={style.upper_row}>
						<div className={style.left_block}>
							<span className={style.left_block_text}>Колір</span>
							<div className={style.circle_wrapp}>
								{props.item.color.map((item, index) => (
									<div
										className={`${style.circle} ${
											activeColor === item.name ? style.circle_active : ''
										}`}
										style={{
											backgroundColor: item.name
										}}
										data-color={item.name}
										key={index}
										onClick={() => handleAddColor(item.name)}
									></div>
								))}
							</div>
						</div>
						<div className={style.bottom_price_block}>
							<span className={style.price_block_title}>Ціна</span>
							<span className={style.price}>{props.item.price}</span>
							<span className={style.price_crossed_out}>
								{props.item.price + 200}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CheckoutProductCard
