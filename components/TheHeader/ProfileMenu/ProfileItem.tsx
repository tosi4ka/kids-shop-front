'use client'
import style from './style.module.scss'

interface ProfileItemProps {
	onClick: () => void
	label: string
}

const ProfileItem: React.FC<ProfileItemProps> = ({ onClick, label }) => {
	return (
		<div onClick={onClick} className={style.ItemWrap}>
			{label}
		</div>
	)
}

export default ProfileItem
