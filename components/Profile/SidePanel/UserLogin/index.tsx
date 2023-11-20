'use client'

import { IRootState } from '@/store'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import avatar from '../../../../public/Profile/Avatar.svg'
import style from './style.module.scss'

const UserLogin = () => {
	const profile = useSelector(
		(state: IRootState) => state.auth.profileData.profile
	)
	const session = useSession()

	const email = profile?.email || session.data?.user?.name

	return (
		<div className={style.user__login}>
			<div className={style.user__avatar}>
				<Image src={avatar} alt={'avatar'} />{' '}
			</div>
			<div className={style.user__name}>
				<div className={style.name}>{email}</div>
				<span className={style.members__text}> Мій профіль</span>
			</div>
		</div>
	)
}
export default UserLogin
