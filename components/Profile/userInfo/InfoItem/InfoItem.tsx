'use client'
import { useSession } from 'next-auth/react'
import style from './styles.module.scss'

interface InfoItemProps {
	label: string
}

const InfoItem: React.FC<InfoItemProps> = ({ label }) => {
	const session = useSession()
	return (
		<div className={style.wrapper__item}>
			<span className={style.info__title}>{label}</span>
		</div>
	)
}

export default InfoItem
