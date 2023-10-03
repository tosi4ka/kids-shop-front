import Checkbox from '@/components/Modals/Checkbox'
import style from './style.module.scss'
import FilterList, { FilterItemTypes } from '../..'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectFilters } from '@/features/filtersSlice'
import getSubCategories from '@/components/functions/getSubCategories'
import { SubFiltersTypes } from '..'

interface SubFilterItemProps {
	item?: FilterItemTypes
	handleChangeFilters: (category: string, value: string | boolean) => void
	setActiveCheckbox: (category: string, value: string | boolean) => boolean
	subItem?: string
	subcategoryItem?: SubFiltersTypes
}
const SubFilterItem: React.FC<SubFilterItemProps> = ({
	item,
	subItem,
	handleChangeFilters,
	setActiveCheckbox,
	subcategoryItem
}) => {
	const [subCategories, setSubCategories] = useState<
		{ id: number; name: string }[] | null
	>(null)

	const [activeCategoryItem, setActiveCategoryItem] = useState<string | null>(
		null
	)
	
	const setValueInDataAtr = (str: string) => {
		if (str === 'Дівчинка') return false
		if (str === 'Хлопчик') return true
		return str
	}

	const filters = useSelector(selectFilters)

	useEffect(() => {
		if (filters?.hasOwnProperty('category__name')) {
			console.log('category__name')
			setActiveCategoryItem(filters.category__name as string)
		}
	}, [])

	useEffect(() => {
		activeCategoryItem &&
			getSubCategories(activeCategoryItem).then(data =>
				setSubCategories(data.results)
			)
	}, [activeCategoryItem])

	return (
		<>
			{item && (
				<li
					className={style.sub_category_item}
					data-category={item.filter_category}
					data-value={setValueInDataAtr(subItem as string)}
					onClick={() =>
						handleChangeFilters(
							item.filter_category,
							setValueInDataAtr(subItem as string)
						)
					}
				>
					{item.has_checkbox ? (
						<>
							<Checkbox
								agreement={() =>
									handleChangeFilters(item.filter_category, subItem as string)
								}
								checked={setActiveCheckbox(
									item.filter_category,
									setValueInDataAtr(subItem as string)
								)}
							/>
							<span className={style.sub_category_item_text}>{subItem}</span>
						</>
					) : (
						<>
							<span className={style.sub_category_item_text}>{subItem}</span>
							{/* <FilterList subCategoriesData={subCategories} /> */}
						</>
					)}
				</li>
			)}
			{/* {subcategoryItem && (
				<li
					className={style.sub_category_item}
					// data-category={item.filter_category}
					// data-value={setValueInDataAtr(subItem as string)}
					// onClick={() =>
					// 	handleChangeFilters(
					// 		item.filter_category,
					// 		setValueInDataAtr(subItem as string)
					// 	)
					// }
				>
					<>
						<Checkbox
							agreement={() =>
								handleChangeFilters("section", subcategoryItem.name as string)
							}
							checked={setActiveCheckbox(
								"section",
								setValueInDataAtr(subcategoryItem.name as string)
							)}
						/>
						<span className={style.sub_category_item_text}>{subcategoryItem.name}</span>
					</>
				</li>
			)} */}
		</>
	)
}

export default SubFilterItem
