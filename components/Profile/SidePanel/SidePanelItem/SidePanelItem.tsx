'use client'
import Image from 'next/image'
import bell from '../../../../public/Profile/icon/bell.svg'
import correspondence from '../../../../public/Profile/icon/correspondence.svg'
import eye from '../../../../public/Profile/icon/eye.svg'
import gift from '../../../../public/Profile/icon/gift.svg'
import message from '../../../../public/Profile/icon/message.svg'
import shirt from '../../../../public/Profile/icon/shirt.svg'
import style from './styles.module.scss'

interface SidePanelItemProps {
	label: string
}

const SidePanelItem: React.FC<SidePanelItemProps> = ({ label }) => {
	if (label === 'Мої замовлення') {
		return (
			<div className={style.itemContent}>
				<div className={style.wrapper_icon}>
					<Image src={shirt} alt='shirt' className={style.item__icon} />
				</div>
				<div className={style.item__text}>{label}</div>
			</div>
		)
	} else if (label === 'Бонуси') {
		return (
			<div className={style.itemContent}>
				<div className={style.wrapper_icon}>
					<Image src={gift} alt='shirt' className={style.icon__gift} />
				</div>
				<div className={style.item__text}>{label}</div>
			</div>
		)
	} else if (label === 'Мої відгуки') {
		return (
			<div className={style.itemContent}>
				<div className={style.wrapper_icon}>
					<Image src={message} alt='shirt' className={style.item__icon} />
				</div>
				<div className={style.item__text}>{label}</div>
			</div>
		)
	} else if (label === 'Переглянуті товари') {
		return (
			<div className={style.itemContent}>
				<div className={style.wrapper_icon}>
					<Image src={eye} alt='shirt' className={style.item__icon} />
				</div>
				<div className={style.item__text}>{label}</div>
			</div>
		)
	} else if (label === 'Розсилка новин') {
		return (
			<div className={style.itemContent}>
				<div className={style.wrapper_icon}>
					<Image src={bell} alt='shirt' className={style.item__icon} />
				</div>
				<div className={style.item__text}>{label}</div>
			</div>
		)
	} else if (label === 'Зв’язатися з нами') {
		return (
			<div className={style.itemContent}>
				<div className={style.wrapper_icon}>
					<Image
						src={correspondence}
						alt='shirt'
						className={style.item__icon}
					/>
				</div>
				<div className={style.item__text}>{label}</div>
			</div>
		)
	}
}

export default SidePanelItem
