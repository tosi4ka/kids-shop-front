'use client'

import style from './styles.module.scss'

interface DisplayInfoProps {
	ItemData: any
}
const DisplayInfo: React.FC<DisplayInfoProps> = ({ ItemData }) => {
	if (ItemData == null) {
		return <span className={style.text__name}>Не вказано</span>
	} else {
		return <span className={style.text__name}>{ItemData}</span>
	}
}
export default DisplayInfo
