'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import style from './style.module.scss'
import { useAppDispatch } from '@/store'
import { addFilter } from '@/features/filtersSlice'
import { ActiveFiltersTypes } from '@/app/catalog/page'
import { FiltersTypes } from '@/types/productsTypes'
import FilterItem from './FIlterItem'
import getSubCategories from '@/components/functions/getSubCategories'

interface FilterListTypes {
	data?: FilterItemTypes[]
	subCategoriesData?: { id: number; name: string }[] | null
	setActiveFilters?: Dispatch<SetStateAction<ActiveFiltersTypes | null>>
	filters?: FiltersTypes
}

export type FilterItemTypes = {
	filter_category: string
	title: string
	has_checkbox: boolean
	data: string[]
}

// type activeCategoryItemTypes = { [key: string]: string | number | boolean }

const FilterList: React.FC<FilterListTypes> = props => {
	const [activeCategory, setActiveCategory] = useState<string | null>(null)
	const [subCategories, setSubCategories] = useState<
		{ id: number; name: string }[] | null
	>(null)
	const [activeCategoryItem, setActiveCategoryItem] = useState<string | null>(
		null
	)

	const dispatch = useAppDispatch()

	const handleSetActiveCategory = (category: string) => {
		if (category === activeCategory) {
			setActiveCategory(null)
			return
		}
		setActiveCategory(category)
	}

	useEffect(() => {
		if (props.filters?.hasOwnProperty('category__name')) {
			console.log('category__name')
			setActiveCategoryItem(props.filters.category__name as string)
		}
	}, [])

	useEffect(() => {
		activeCategoryItem &&
			getSubCategories(activeCategoryItem).then(data =>
				setSubCategories(data.results)
			)
	}, [activeCategoryItem])

	const setActiveCheckbox = (category: string, value: string | boolean) => {
		return props.filters && category in props.filters
			? props.filters[category] === value
			: false
	}

	const handleChangeFilters = (category: string, value: string | boolean) => {
		if (typeof value === 'string') {
			const obj = { [category]: value }
			props.setActiveFilters && props.setActiveFilters(obj)
			dispatch(addFilter({ key: category, value: value.toLowerCase() }))
			return
		} else {
			const obj = { [category]: value }
			props.setActiveFilters && props.setActiveFilters(obj)
			dispatch(addFilter({ key: category, value: value }))
		}
	}

	return (
		<ul className={style.filters_list}>
			{props.data &&
				props.data.map((item, index) => (
					<FilterItem
						activeCategory={activeCategory}
						handleChangeFilters={handleChangeFilters}
						handleSetActiveCategory={handleSetActiveCategory}
						item={item}
						setActiveCheckbox={setActiveCheckbox}
						key={index}
					/>
				))}
		</ul>
	)
}

export default FilterList
