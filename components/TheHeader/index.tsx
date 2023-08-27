'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import style from './style.module.scss'

import { useModals } from '../../context/ModalsProvider'
import { ProductTypes } from '@/types/productsTypes'
import { useAppDispatch } from '@/store'
import { removeProduct, selectCart } from '@/features/cartSlice'
import MiniSlider from '../Sliders/MiniSlider'
import ProfileMenu from './ProfileMenu'
import SubHeader from './SubHeader'
import SaleMarker from '../ProductCard/SaleMarker'
import navigationData from '../../data/navigation.json'
import headerSliderText from '../../data/headerSliderText.json'

import boyIcon from '../../public/icons/Sex_indicators_boy_12x12.svg'
import girlIcon from '../../public/icons/Sex_indicators_girl_12x12.svg'
import logo from '../../public/icons/logo.svg'
import { selectFavoriteProducts } from '@/features/favoriteSlice'

const TheHeader = () => {
	const [userInfoOpen, setUserInfoOpem] = useState(false)
	const [cartProducts, setCartProducts] = useState(0)
	const data = useModals()
	const dispatch = useAppDispatch()
	const session = useSession()
	const cart: ProductTypes[] = useSelector(selectCart)
	const favorite: ProductTypes[] = useSelector(selectFavoriteProducts)
	const { header, subHeader } = navigationData

	const handleToggleSignUpModal = () => {
		data?.SignInModalChangeVisibility(!data.signIn)
	}

	const handleOpenUserInfo = () => {
		setUserInfoOpem(!userInfoOpen)
	}

	const handleSingOut = () => {
		data?.setUserName('')
	}

	const handleRemoveItemFromCart = (id: number) => {
		dispatch(removeProduct(id))
	}

	const getTotalCost = () => {
		const totalCost: number = cart.reduce(
			(accumulator, currentValue) => accumulator + currentValue.price,
			0
		)
		return totalCost
	}

	useEffect(() => {
		setCartProducts(cart.length)
	}, [cart])

	return (
		<header className={style.header}>
			<MiniSlider data={headerSliderText} slideToShow={1} style='header' />
			<div className={style.header__wrapper}>
				<nav className={style.header__nav}>
					<ul className={style.header__nav_list}>
						{header.leftLinks.map((item, index) => (
							<li className={style.list_item} tabIndex={index + 1} key={index}>
								<Link href={item.link}>{item.text}</Link>
							</li>
						))}
					</ul>
				</nav>
				<Link href='/'>
					<Image
						src={logo}
						alt='Lama Shop logo'
						width={100}
						height={42}
						priority={true}
					/>
				</Link>
				<nav className={style.header__user_nav}>
					<ul className={style.user_nav__list}>
						<li
							className={`${style.user_nav__list_item} ${
								cartProducts ? style.user_nav__cart : style.user_nav__empty_cart
							}`}
						>
							<Link href="/checkout">
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
								Кошик ({cart.length})
							</Link>
							<div className={style.cart_menu}>
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
											Кошик ({cart.length})
										</span>
									</div>
									<div className={style.cart_menu__total_wrapper}>
										<span className={style.cart_menu__total_text}>
											Загальна сума
										</span>
										<span className={style.cart_menu__total_count}>
											{`${getTotalCost()}₴`}
										</span>
									</div>
								</div>
								<div className={style.cart_products_wrapper}>
									{cart.map((item, index) => (
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
													<span className={style.product__info_name}>
														{item.name}
													</span>
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
														<SaleMarker
															absolute={false}
															text={item.discount?.name}
														/>
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
							</div>
						</li>
						<li className={style.user_nav__list_item}>
							<Link href='/favorite'>
								<svg
									width='36'
									height='36'
									viewBox='0 0 36 36'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className={style.list_item_icon_stroke}
								>
									<path
										d='M18 26C18 26 9 20.9091 9 14.7273C9.00018 13.6347 9.37499 12.5759 10.0607 11.7308C10.7464 10.8858 11.7007 10.3068 12.7613 10.0921C13.8219 9.8775 14.9233 10.0405 15.8784 10.5535C16.8334 11.0665 17.5831 11.8977 18 12.9059L18 12.9059C18.4169 11.8977 19.1666 11.0665 20.1216 10.5535C21.0767 10.0405 22.1781 9.8775 23.2387 10.0921C24.2993 10.3068 25.2536 10.8858 25.9393 11.7308C26.625 12.5759 26.9998 13.6347 27 14.7273C27 20.9091 18 26 18 26Z'
										fill='transparent'
										stroke='#CD9EFF'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
								Сподобалось ({favorite.length})
							</Link>
						</li>
						{!session?.data && (
							<li
								className={style.user_nav__list_item}
								onClick={handleToggleSignUpModal}
							>
								<svg
									width='36'
									height='36'
									viewBox='0 0 36 36'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className={style.list_item_icon}
								>
									<path
										d='M8.35107 25.6235C8.14323 25.9818 8.26519 26.4407 8.62348 26.6486C8.98177 26.8564 9.44072 26.7344 9.64856 26.3762L8.35107 25.6235ZM26.3511 26.3763C26.5589 26.7346 27.0178 26.8566 27.3761 26.6488C27.7344 26.4409 27.8564 25.982 27.6486 25.6237L26.3511 26.3763ZM9.64856 26.3762C10.4949 24.9173 11.7119 23.7055 13.1779 22.8629L12.4304 21.5624C10.7367 22.5359 9.32973 23.9364 8.35107 25.6235L9.64856 26.3762ZM13.1779 22.8629C14.6438 22.0203 16.3069 21.5765 17.9999 21.5766L17.9999 20.0766C16.0448 20.0765 14.124 20.5889 12.4304 21.5624L13.1779 22.8629ZM17.9999 21.5766C19.6929 21.5766 21.3559 22.0203 22.8218 22.863L23.5694 21.5625C21.8757 20.589 19.9549 20.0766 17.9999 20.0766L17.9999 21.5766ZM22.8218 22.863C24.2877 23.7056 25.5048 24.9174 26.3511 26.3763L27.6486 25.6237C26.6699 23.9366 25.263 22.5361 23.5694 21.5625L22.8218 22.863ZM23.1872 14.9133C23.1872 17.762 20.8677 20.0766 17.9999 20.0766V21.5766C21.6904 21.5766 24.6872 18.5962 24.6872 14.9133H23.1872ZM17.9999 20.0766C15.132 20.0766 12.8123 17.762 12.8123 14.9133H11.3123C11.3123 18.5962 14.3094 21.5766 17.9999 21.5766V20.0766ZM12.8123 14.9133C12.8123 12.0646 15.1319 9.75 17.9998 9.75V8.25C14.3093 8.25 11.3123 11.2304 11.3123 14.9133H12.8123ZM17.9998 9.75C20.8676 9.75 23.1872 12.0646 23.1872 14.9133H24.6872C24.6872 11.2304 21.6902 8.25 17.9998 8.25V9.75Z'
										fill='#CD9EFF'
									/>
								</svg>
								Авторизація
							</li>
						)}
						{session?.data && (
							<li className={style.user_nav__list_item}>
								<ProfileMenu />
							</li>
						)}
					</ul>
				</nav>
			</div>
			<SubHeader navigationData={subHeader} />
		</header>
	)
}
export { TheHeader }
