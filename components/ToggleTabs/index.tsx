import { Dispatch, MouseEvent, SetStateAction, useState } from 'react'
import style from './style.module.scss'

interface ToogleTabsProps {
	tabsData: string[]
    setActiveGender: Dispatch<SetStateAction<string>>
    activeGender: string
}

const ToogleTabs: React.FC<ToogleTabsProps> = props => {
	const handleChangeActiveTab = (
		e: MouseEvent<HTMLDivElement | HTMLSpanElement>
	) => {
		const clickedDiv = e.currentTarget
		const value = clickedDiv.textContent || ''
		props.setActiveGender(value)
	}

	const handleToggleTabs = (str: string) => {
		return props.activeGender === str ? props.activeGender === "Дівчинка" ? style.active_tab_gitls : style.active_tab_boys : ''
	}
	return (
		<div className={style.tabs_wrapper}>
			{props.tabsData.map((item, index) => (
				<div
					className={`${style.tab} ${handleToggleTabs(item)}`}
					onClick={e => handleChangeActiveTab(e)}
					key={index}
				>
					{item}
				</div>
			))}
		</div>
	)
}

export default ToogleTabs
