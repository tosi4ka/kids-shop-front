'use client'

import style from './styles.module.scss'

interface GenderInfoProps {
	ItemData: any
}
const GenderInfo: React.FC<GenderInfoProps> = ({ ItemData }) => {
	if (ItemData == 'Man') {
		return <span className={style.text__name}>Чоловіча</span>
	} else if (ItemData == 'Woman') {
		return <span className={style.text__name}>Жіноча</span>
	} else {
		return <span className={style.text__name}>Не вказано</span>
	}
}
export default GenderInfo
