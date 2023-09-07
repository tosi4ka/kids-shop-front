'use client'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import iconArrow from '../../../public/icons/Arrow.svg'
import iconExit from '../../../public/icons/exit.svg'
import { IRootState } from '../../../store'
import ProfileItem from './ProfileItem'
import style from './style.module.scss'

const ProfileMenu = () => {
	const [open, setOpen] = useState<boolean>(false)
	const dropdownRef = useRef<HTMLDivElement>(null)
	const handleDropDownFocus = (state: boolean) => {
		setOpen(!state)
	}
	const handleClickOutsideDropdown = (e: any) => {
		if (open && !dropdownRef.current?.contains(e.target as Node)) {
			setOpen(false)
		}
	}
	window.addEventListener('click', handleClickOutsideDropdown)

	const router = useRouter()
	const session = useSession()

	const profile = useSelector(
		(state: IRootState) => state.auth.profileData.profile
	)
	const email = profile?.email

	return (
		<div className={style.position}>
			<div className={style.WrapperMenu} ref={dropdownRef}>
				<button
					onClick={e => handleDropDownFocus(open)}
					className={style.TextWrap}
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
							fill='#C18170'
						/>
					</svg>
					{email}
					{session.data?.user?.name}
				</button>
			</div>
			{open && (
				<div className={style.MenuOpen}>
					<div className={style.OpenPosition}>
						<>
							<button
								onClick={e => handleDropDownFocus(open)}
								className={style.drop__btn}
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
										fill='#C18170'
									/>
								</svg>
								{email}
								{session.data?.user?.name}
							</button>

							<div className={style.ItemWithBorder}>
								<ProfileItem
									onClick={() => {
										router.push('/profile')
									}}
									label='До профілю'
								/>
								<Image src={iconArrow} alt='arrow' />
							</div>
							<div className={style.ItemProfile}>
								<ProfileItem
									onClick={() => signOut({ callbackUrl: '/' })}
									label='Вийти'
								/>
								<Image src={iconExit} alt='exit' className={style.iconExit} />
							</div>
						</>
					</div>
				</div>
			)}
		</div>
	)
}

export default ProfileMenu
