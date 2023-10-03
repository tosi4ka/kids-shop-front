import {
	Dispatch,
	MouseEvent,
	SetStateAction,
	useEffect,
	useState
} from 'react'
import style from './style.module.scss'
import { useAppDispatch } from '@/store'
import { addFilter } from '@/features/filtersSlice'

interface ToogleTabsProps {
	tabsData: string[]
	setActiveGender: Dispatch<SetStateAction<string>>
	activeGender: string
}

const ToogleTabs: React.FC<ToogleTabsProps> = props => {
	const dispatch = useAppDispatch()
	const handleChangeActiveTab = (
		e: MouseEvent<HTMLDivElement | HTMLSpanElement>
	) => {
		const clickedDiv = e.currentTarget
		const value = clickedDiv.textContent || ''
		props.setActiveGender(value)

		dispatch(
			addFilter({ key: 'male', value: value === 'Дівчинка' ? false : true })
		)
	}

	useEffect(() => {
		dispatch(
			addFilter({ key: 'male', value: props.activeGender === 'Дівчинка' ? false : true })
		)
	}, [])

	const handleToggleTabs = (str: string) => {
		return props.activeGender === str
			? props.activeGender === 'Дівчинка'
				? style.active_tab_gitls
				: style.active_tab_boys
			: ''
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
