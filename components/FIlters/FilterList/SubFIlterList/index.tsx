import Checkbox from '@/components/Modals/Checkbox'
import { FilterItemTypes } from '..'
import style from './style.module.scss'
import SubFilterItem from './SubFilterItem'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectFilters } from '@/features/filtersSlice'
import { FiltersTypes } from '@/types/productsTypes'
import getSubCategories from '@/components/functions/getSubCategories'

interface SubFilterListProps {
	item: FilterItemTypes
	handleChangeFilters: (category: string, value: string | boolean) => void
	setActiveCheckbox: (category: string, value: string | boolean) => boolean
}

export type SubFiltersTypes = {
	id: number
	name: string
}

const SubFilterList: React.FC<SubFilterListProps> = ({
	item,
	handleChangeFilters,
	setActiveCheckbox
}) => {
	const [subFiltersData, setSubfiltersData] = useState<
		SubFiltersTypes[] | null
	>(null)
	const [subFilter, setSubfilters] = useState<string | null>(null)
	const filters: FiltersTypes = useSelector(selectFilters)

	useEffect(() => {
		if (filters.hasOwnProperty('category__name')) {
			setSubfilters(filters.category__name as string)
		}
	}, [])

	useEffect(() => {
		getSubCategories(subFilter as string).then(data =>
			setSubfiltersData(data.results)
		)
	}, [subFilter])

	return (
		<ul className={style.sub_category_list}>
			{item.data.map((subitem, index) => (
				<SubFilterItem
					key={index}
					handleChangeFilters={handleChangeFilters}
					item={item}
					subItem={subitem}
					setActiveCheckbox={setActiveCheckbox}
				/>
			))}
			{subFiltersData &&
				subFiltersData.map((subcategoryItem, index) => (
					<SubFilterItem
						key={index}
						handleChangeFilters={handleChangeFilters}
						subcategoryItem={subcategoryItem}
						setActiveCheckbox={setActiveCheckbox}
					/>
				))}
		</ul>
	)
}

export default SubFilterList
