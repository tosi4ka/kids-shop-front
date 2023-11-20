'use client'

import { IRootState } from '@/store'
import { useSelector } from 'react-redux'
import style from './styles.module.scss'

const LastName = () => {
	const profile = useSelector(
		(state: IRootState) => state.auth.profileData.profile
	)
	const lastName = profile?.last_name

	if (lastName === null) {
		return <span className={style.text__name}>Не вказано</span>
	} else {
		return <span className={style.text__name}>{lastName}</span>
	}
}
export default LastName
