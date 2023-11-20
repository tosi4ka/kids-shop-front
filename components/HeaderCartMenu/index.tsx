import Link from 'next/link'
import Image from 'next/image'

import style from './style.module.scss'

import { ProductTypes } from '@/types/productsTypes'
import {getTotalCost, getTotalCount} from '../functions/getTotalCost'
import {removeProduct, selectCartProductsCount} from '@/features/cartSlice'
import { useAppDispatch } from '@/store'
import SaleMarker from '../ProductCard/SaleMarker'

import boyIcon from '../../public/icons/Sex_indicators_boy_12x12.svg'
import girlIcon from '../../public/icons/Sex_indicators_girl_12x12.svg'
import {useSelector} from "react-redux";

interface HeaderCartMenuProps {
	cart: ProductTypes[]
}

const HeaderCartMenu: React.FC<HeaderCartMenuProps> = props => {

	const cartProductsCount: { id: number; count: number }[] = useSelector(
		selectCartProductsCount
	)

	const dispatch = useAppDispatch()

	const handleRemoveItemFromCart = (id: number) => {
		dispatch(removeProduct(id))
	}

	return (
		<>
			<div className={style.cart_menu_header}>
				<div className={style.cart_menu__title_wrapper}>
					<svg
						width='36'
						height='36'
						viewBox='0 0 36 36'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={style.list_item_icon_stroke}
					>
						<path
							d='M14.25 12.913C14.25 11.8752 14.6451 10.8799 15.3483 10.1461C16.0516 9.41227 17.0054 9 18 9C18.9946 9 19.9484 9.41227 20.6517 10.1461C21.3549 10.8799 21.75 11.8752 21.75 12.913M9.75 12.913H26.25C26.6642 12.913 27 13.2634 27 13.6957V26.2174C27 26.6496 26.6642 27 26.25 27H9.75C9.33579 27 9 26.6496 9 26.2174V13.6957C9 13.2634 9.33579 12.913 9.75 12.913Z'
							stroke='#CD9EFF'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					<span className={style.cart_menu__title}>
						Кошик ({getTotalCount(cartProductsCount)})
					</span>
				</div>
				<div className={style.cart_menu__total_wrapper}>
					<span className={style.cart_menu__total_text}>Загальна сума</span>
					<span className={style.cart_menu__total_count}>
						{`${getTotalCost(props.cart, cartProductsCount)}₴`}
					</span>
				</div>
			</div>
			<div className={style.cart_products_wrapper}>
				{props.cart.map((item, index) => (
					<div className={style.cart_product} key={index}>
						<div className={style.cart_product__image}>
							<Image
								src={item.product_images[0].product_image}
								alt={item.name}
								fill
								sizes='100vw'
								style={{ objectFit: 'cover' }}
							/>
							<Image
								className={style.image_sex_Icon}
								src={item.male ? boyIcon : girlIcon}
								alt='sex icon'
								width={12}
								height={12}
							/>
						</div>
						<div className={style.cart_product__info}>
							<div className={style.product__info_name_block}>
								<span className={style.product__info_name}>{item.name}</span>
								<span className={style.product__info_brand}>
									{item.brand.name}
								</span>
							</div>
							<div className={style.product__info_price_block}>
								<span className={style.product__info_price}>
									{`${item.price}₴`}
								</span>
								<span className={style.product__info_price_old}>
									{`${item.price}₴`}
								</span>
								{item.is_sale ? (
									<SaleMarker absolute={false} text={item.discount?.name} />
								) : null}
							</div>
							<svg
								width='40'
								height='40'
								viewBox='0 0 40 40'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className={style.cart_product__remove_btn}
								onClick={() => handleRemoveItemFromCart(item.id)}
							>
								<path
									d='M14.9231 15L15.6282 26.7273C15.6617 27.4627 16.1359 28 16.7564 28H23.2436C23.8666 28 24.332 27.4627 24.3718 26.7273L25.0769 15M14 15H26M17.9487 14.5455V12.9545C17.9484 12.8291 17.9681 12.7048 18.0067 12.5888C18.0452 12.4728 18.1019 12.3675 18.1734 12.2788C18.2448 12.1901 18.3298 12.1198 18.4232 12.0719C18.5167 12.0241 18.6168 11.9996 18.7179 12H21.2821C21.3832 11.9996 21.4833 12.0241 21.5768 12.0719C21.6702 12.1198 21.7552 12.1901 21.8266 12.2788C21.8981 12.3675 21.9548 12.4728 21.9933 12.5888C22.0319 12.7048 22.0516 12.8291 22.0513 12.9545V14.5455'
									stroke='#CD9EFF'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					</div>
				))}
			</div>
			<div className={style.cart_menu_btn}>
				<Link href='/checkout' className={style.cart_menu_btn_text}>
					Переглянути кошик
				</Link>
			</div>
		</>
	)
}

export default HeaderCartMenu
