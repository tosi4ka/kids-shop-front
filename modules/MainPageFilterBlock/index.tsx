import Image from 'next/image'
import style from './style.module.scss'
import Image1 from '../../public/MainPage/MainFilter/image1.png'
import { MouseEvent, useState } from 'react'

interface PageProps {
	title: string
	tabsData: Array<{ text: string }>
}

const Page: React.FC<PageProps> = props => {
	const [activeGender, setActiveGender] = useState('Дівчата')
	const [activeAge, setActiveAge] = useState<string | null>(null)

	const handleChangeActiveTab = (
		e: MouseEvent<HTMLDivElement | HTMLSpanElement>
	) => {
		const clickedDiv = e.currentTarget
		const value = clickedDiv.textContent || ''
		setActiveGender(value)
	}

	const handleChangeActiveAgeTab = (e: MouseEvent<HTMLSpanElement>) => {
		const clickedSpan = e.currentTarget
		const value = clickedSpan.textContent || ''
		console.log(value)
	}

	const handleToggleTabs = (str: string) => {
		return activeGender === str ? style.active_tab : ''
	}

	const handleChangeColor = () => {
		return activeGender === 'Дівчата' ? style.for_girls : style.for_boys
	}
	return (
		<section className={style.filter}>
			<div className={style.content}>
				<div className={style.title_wrapp}>
					<h2 className={style.title}>{props.title}</h2>
					<div className={style.tabs_wrapper}>
						<div
							className={`${style.tab} ${handleToggleTabs('Дівчата')}`}
							onClick={e => handleChangeActiveTab(e)}
						>
							Дівчата
						</div>
						<div
							className={`${style.tab} ${handleToggleTabs('Хлопчики')}`}
							onClick={e => handleChangeActiveTab(e)}
						>
							Хлопчики
						</div>
					</div>
				</div>
				<div className={style.filters_wrapp}>
					<div className={style.age_picker_wrapp}>
						<span
							className={`${style.filter_cell} ${style.cell_0_2}`}
							onClick={e => handleChangeActiveAgeTab(e)}
						>
							0-2
							<br />
							років
						</span>
						<span className={`${style.filter_cell} ${style.cell_3_4}`}>
							3-4
							<br />
							років
						</span>
						<span className={`${style.filter_cell} ${style.cell_5_7}`}>
							5-7
							<br />
							років
						</span>
						<span className={`${style.filter_cell} ${style.cell_8_11}`}>
							8-11
							<br />
							років
						</span>
						<span className={`${style.filter_cell} ${style.cell_12_14}`}>
							12-14
							<br />
							років
						</span>
						<span className={`${style.filter_cell} ${style.cell_14}`}>
							14+
							<br />
							років
						</span>
						<Image className={style.main_cyrcle} src={Image1} alt='image' />
					</div>
					<div className={style.filters_cells_wrapper}>
						{props.tabsData.map((item, index) => (
							<div
								className={`${style.filter_cell} ${handleChangeColor()}`}
								key={index}
							>
								{item.text}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Page
