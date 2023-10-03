import style from './style.module.scss'
import { FilterItemTypes } from '..'
import SubFilterList from '../SubFIlterList'

interface FilterItemProps {
	item: FilterItemTypes
	activeCategory: string | null
	handleSetActiveCategory: (category: string) => void
	handleChangeFilters: (category: string, value: string | boolean) => void
	setActiveCheckbox: (category: string, value: string | boolean) => boolean
}

const FilterItem: React.FC<FilterItemProps> = ({
	item,
	activeCategory,
	handleSetActiveCategory,
	handleChangeFilters,
	setActiveCheckbox,
}) => {
	return (
		<li className={style.filter_item}>
			<div
				className={style.title_row}
				onClick={() => handleSetActiveCategory(item.filter_category)}
			>
				<span className={style.filter_item_title}>{item.title}</span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='12'
					viewBox='0 0 16 12'
					fill='none'
					className={
						activeCategory === item.filter_category
							? style.active_filter_item_arrow
							: style.filter_item_arrow
					}
				>
					<path
						d='M2.5 3L8 8L13.5 3'
						stroke='#7F7C83'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>

			{item && activeCategory === item.filter_category ? (
				<SubFilterList
					item={item}
					handleChangeFilters={handleChangeFilters}
					setActiveCheckbox={setActiveCheckbox}
				/>
			) : null}
		</li>
	)
}

export default FilterItem
