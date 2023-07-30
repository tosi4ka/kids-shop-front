'use client'
import { signOut } from 'next-auth/react'
import { useCallback, useState } from 'react'
import ProfileItem from './ProfileItem'
import style from './style.module.scss'

const ProfileMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = useCallback(() => {
		setIsOpen(value => !value)
	}, [])

	return (
		<div>
			<div className={style.WrapperMenu}>
				<div onClick={toggleOpen} className={style.TextWrap}>
					Here was userName
				</div>
			</div>
			{isOpen && (
				<div className={style.MenuOpen}>
					<div className={style.OpenPosition}>
						<>
							<ProfileItem onClick={() => {}} label='Увійти до профілю' />
							<ProfileItem
								onClick={() => signOut({ callbackUrl: '/' })}
								label='Вийти'
							/>
						</>
					</div>
				</div>
			)}
		</div>
	)
}

export default ProfileMenu
