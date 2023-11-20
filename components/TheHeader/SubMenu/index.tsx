'use client'
import Image from 'next/image'
import boy from '../../../public/icons/Sex_indicators_boy.svg'
import girl from '../../../public/icons/Sex_indicators_girl.svg'
import SubMenu_Boys from './SubMenuBoys'
import SubMenu_Girls from './SubMenuGirls'
import style from './style.module.scss'

interface SubMenuProps {
	label: string
}

const SubMenu: React.FC<SubMenuProps> = ({ label }) => {
	if (label === 'Дівчатам') {
		return (
			<li className={style.itemContent}>
				<Image src={girl} alt='girl' className={style.img} />
				{label}
				<SubMenu_Girls />
			</li>
		)
	} else if (label === 'Хлопчикам') {
		return (
			<li className={style.itemContent_boy}>
				<Image src={boy} alt='boy' className={style.img} />
				{label}
				<SubMenu_Boys />
			</li>
		)
	}
}

export default SubMenu
