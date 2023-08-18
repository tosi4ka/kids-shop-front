'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useModals } from '../../context/ModalsProvider'
import headerSliderText from '../../data/headerSliderText.json'
import navigationData from '../../data/navigation.json'
import logo from '../../public/icons/logo.svg'
import MiniSlider from '../Sliders/MiniSlider'
import ProfileMenu from './ProfileMenu'
import SubHeader from './SubHeader'
import style from './style.module.scss'

const TheHeader = () => {
	const data = useModals()
	const [userInfoOpen, setUserInfoOpem] = useState(false)

	const handleToggleSignUpModal = () => {
		data?.SignInModalChangeVisibility(!data.signIn)
	}

	const handleOpenUserInfo = () => {
		setUserInfoOpem(!userInfoOpen)
	}

	const handleSingOut = () => {
		data?.setUserName('')
	}

	const session = useSession()

	const { header, subHeader } = navigationData
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
						<li className={style.user_nav__list_item}>
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
							Кошик (0)
						</li>
						<li className={style.user_nav__list_item}>
							<svg
								width='36'
								height='36'
								viewBox='0 0 36 36'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className={`${style.list_item_icon} ${style.list_item_icon_stroke}`}
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
							Сподобалось (0)
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
