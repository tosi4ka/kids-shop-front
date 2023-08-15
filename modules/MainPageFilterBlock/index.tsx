import Image, { StaticImageData } from 'next/image'
import { MouseEvent, useState } from 'react'

import style from './style.module.scss'
import ToogleTabs from '@/components/ToggleTabs'

import girlImage from '../../public/MainPage/MainFilter/girl.png'
import boyImage from '../../public/MainPage/MainFilter/boy.png'
import Boy_shoesImage from '../../public/MainPage/MainFilter/Boy_shoes.png'
import Boy_clothesImage from '../../public/MainPage/MainFilter/Boy_clothes.png'
import Boy_accessoriesImage from '../../public/MainPage/MainFilter/Boy_accessories.png'
import Boy_all_goodsImage from '../../public/MainPage/MainFilter/Boy_all_goods.png'
import Boy_family_lookImage from '../../public/MainPage/MainFilter/Boy_family_look.png'
import Boy_thematic_costumesImage from '../../public/MainPage/MainFilter/Boy_thematic_costumes.png'
import Girl_shoesImage from '../../public/MainPage/MainFilter/Girl_shoes.png'
import Girl_clothesImage from '../../public/MainPage/MainFilter/Girl_clothes.png'
import Girl_accessoriesImage from '../../public/MainPage/MainFilter/Girl_accessories.png'
import Girl_all_goodsImage from '../../public/MainPage/MainFilter/Girl_all_goods.png'
import Girl_family_lookImage from '../../public/MainPage/MainFilter/Girl_family_look.png'
import Girl_thematic_costumesImage from '../../public/MainPage/MainFilter/Girl_thematic_costumes.png'
import ageImage from '../../public/MainPage/MainFilter/age_image.png'

interface PageProps {
	title: string
	tabsData: Array<{ text: string }>
}

const Page: React.FC<PageProps> = props => {
	const [activeGender, setActiveGender] = useState('Дівчинка')
	const [activeAge, setActiveAge] = useState<string | null>(null)
	const [activeCategory, setActiveCategory] = useState<string | null>(null)

	const handleChangeActiveAgeTab = (e: MouseEvent<HTMLSpanElement>) => {
		const clickedSpan = e.target as HTMLDivElement
		const value = clickedSpan.getAttribute('data-id')
		if (value) setActiveAge(value)
	}

	const handleChangeActiveCategory = (e: MouseEvent<HTMLDivElement>) => {
		const clickedButton = e.target as HTMLButtonElement
		if (clickedButton.tagName === 'BUTTON') {
			const value = clickedButton.textContent
			setActiveCategory(value)
		}
	}

	const handleToggleActiveCategory = (text: string) => {
		if (activeCategory) {
			return activeCategory === text
				? style.filter_cell_active
				: style.filter_cell_nonactive
		}
	}

	const handleToggleActiveAgeTab = (age: string) => {
		return activeAge === age
			? activeGender === 'Дівчинка'
				? style.filter_cell_active_girls
				: style.filter_cell_active_boys
			: ''
	}

	const handleActiveButton = () => {
		return activeAge && activeCategory ? style.button_active : ''
	}

	const handleResetFilters = () => {
		setActiveAge(null)
		setActiveCategory(null)
	}

	const postGrowthText = () => {
		switch (activeAge) {
			case '0-2':
				return '45-92 см'
			case '3-4':
				return '92-104 см'
			case '5-7':
				return '92-104 см'
			case '8-11':
				return '123-145 см'
			case '12-14':
				return '146-164 см'
			case '14+':
				return '165 см+'
			default:
				break
		}
	}

	const handleChangeImage = () => {
		if (activeGender === 'Дівчинка') {
			if (activeCategory) {
				switch (activeCategory) {
					case 'Одяг':
						return Girl_clothesImage
					case 'Взуття':
						return Girl_shoesImage
					case 'Аксесуари':
						return Girl_accessoriesImage
					case 'Фемілі лук':
						return Girl_family_lookImage
					case 'Тематичні костюми':
						return Girl_thematic_costumesImage
					case 'Всі товари':
						return Girl_all_goodsImage
					default:
						break
				}
			} else if (activeAge) {
				return ageImage
			}
			return girlImage
		} else {
			if (activeCategory) {
				switch (activeCategory) {
					case 'Одяг':
						return Boy_clothesImage
					case 'Взуття':
						return Boy_shoesImage
					case 'Аксесуари':
						return Boy_accessoriesImage
					case 'Фемілі лук':
						return Boy_family_lookImage
					case 'Тематичні костюми':
						return Boy_thematic_costumesImage
					case 'Всі товари':
						return Boy_all_goodsImage
					default:
						break
				}
			} else if (activeAge) {
				return ageImage
			}
			return boyImage
		}
	}
	return (
		<section className={style.filter}>
			<div className={style.content}>
				<h2 className={style.title}>{props.title}</h2>
				<div className={style.filters_wrapp}>
					<div
						className={style.age_picker_wrapp}
						onClick={e => handleChangeActiveAgeTab(e)}
					>
						<div
							className={`${style.age_picker} ${
								activeGender === 'Хлопчик' ? style.age_picker_boys : ''
							}`}
						>
							<span
								className={`${style.filter_cell} ${
									style.cell_0_2
								} ${handleToggleActiveAgeTab('0-2')}`}
								data-id='0-2'
							>
								0-2
								<br />
								років
							</span>
							<span
								className={`${style.filter_cell} ${
									style.cell_3_4
								} ${handleToggleActiveAgeTab('3-4')}`}
								data-id='3-4'
							>
								3-4
								<br />
								років
							</span>
							<span
								className={`${style.filter_cell} ${
									style.cell_5_7
								} ${handleToggleActiveAgeTab('5-7')}`}
								data-id='5-7'
							>
								5-7
								<br />
								років
							</span>
							<span
								className={`${style.filter_cell} ${
									style.cell_8_11
								} ${handleToggleActiveAgeTab('8-11')}`}
								data-id='8-11'
							>
								8-11
								<br />
								років
							</span>
							<span
								className={`${style.filter_cell} ${
									style.cell_12_14
								} ${handleToggleActiveAgeTab('12-14')}`}
								data-id='12-14'
							>
								12-14
								<br />
								років
							</span>
							<span
								className={`${style.filter_cell} ${
									style.cell_14
								} ${handleToggleActiveAgeTab('14+')}`}
								data-id='14+'
							>
								14+
								<br />
								років
							</span>
							<div className={style.main_cyrcle}>
								<Image src={handleChangeImage()} alt='image' />
								{!activeCategory ? (
									<span className={style.cyrcle_text}>{postGrowthText()}</span>
								) : null}
							</div>
						</div>
						<span className={style.age_picker_text}>
							Оберіть стать і вік дитини та оберіть категорію товару
						</span>
					</div>
					<div className={style.gender_and_categories_filter_wrap}>
						<div className={style.tabs_block}>
							<span className={style.growth_text}>
								{activeAge && activeGender === 'Дівчинка'
									? postGrowthText()
									: ' '}
							</span>
							<ToogleTabs
								tabsData={['Дівчинка', 'Хлопчик']}
								setActiveGender={setActiveGender}
								activeGender={activeGender}
							/>
							<span className={style.growth_text}>
								{activeAge && activeGender !== 'Дівчинка'
									? postGrowthText()
									: ' '}
							</span>
						</div>
						<div
							className={style.filters_cells_wrapper}
							onClick={e => handleChangeActiveCategory(e)}
						>
							{props.tabsData.map((item, index) => (
								<button
									className={`${style.filter_cell} ${handleToggleActiveCategory(
										item.text
									)}`}
									key={index}
								>
									{item.text}
								</button>
							))}
						</div>
						<div className={style.button_wrapp}>
							{activeCategory || activeAge ? (
								<span
									className={style.reset_filters}
									onClick={handleResetFilters}
								>
									Скинути обране
								</span>
							) : null}
							<button className={`${style.button} ${handleActiveButton()}`}>
								Показати результати
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Page
