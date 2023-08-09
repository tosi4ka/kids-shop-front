'use client'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import ProfileItem from './ProfileItem'
import style from './style.module.scss'

const ProfileMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()
	const session = useSession()

	const toggleOpen = useCallback(() => {
		setIsOpen(value => !value)
	}, [])

	return (
		<div>
			<div className={style.WrapperMenu}>
				<div onClick={toggleOpen} className={style.TextWrap}>
					{session.data.user?.name}
				</div>
			</div>
			{isOpen && (
				<div className={style.MenuOpen}>
					<div className={style.OpenPosition}>
						<>
							<ProfileItem
								onClick={() => {
									router.push('/profile')
								}}
								label='Увійти до профілю'
							/>
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
