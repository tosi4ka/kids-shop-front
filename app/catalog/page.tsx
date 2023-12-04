'use client'

import getProductsByFilters, {ProductsProps} from '@/components/functions/getProductsByFilters'
import {removeFilter, resetFilter, selectFilters} from '@/features/filtersSlice'
import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {FiltersTypes} from '@/types/productsTypes'
import style from './style.module.scss'
import BreadCrumbs from '@/components/BreadCrumbs'
import ProductCard from '@/components/ProductCard'
import {capitalizeFirstLetter, outCapitalizeFirstLetterBrand} from '@/components/functions/outCapitalizeLetter'
import {useAppDispatch} from '@/store'
import FilterList from '@/components/FIlters/FilterList'

export interface ActiveFiltersTypes {
    [key: string]: string | number | boolean
}

const Page = () => {
    const [ourTopData, setOurTopData] = useState<ProductsProps>()
    const [activeGender, setActiveGender] = useState('Дівчинка')
    const [activeFilterSection, setActiveFilterSection] = useState<string | null>(
        null
    )

    const dispatch = useAppDispatch()

    const filters: FiltersTypes = useSelector(selectFilters)

    const keyValuePairs = Object.entries(filters)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')

    const getTitle = () => {
        if (
            filters.hasOwnProperty('category__name') &&
            filters.hasOwnProperty('male')
        ) {
            console.log(filters.category__name)
            return capitalizeFirstLetter(filters.category__name as string)
        } else if (filters.hasOwnProperty('male')) {
            console.log(filters.male)
            return filters.male ? 'Одяг для хлопчиків' : 'Одяг для дівчат'
        }
    }

    const outFiltersCategoryText = (arr: [string, string | boolean | number]) => {
        if (arr[0] === 'male') {
            return arr[1] === true ? "Хлопчик" : "Дівчинка"
        } else if (arr[0] === 'brand__name') {
            return typeof arr[1] === 'string'
                ? outCapitalizeFirstLetterBrand(arr[1])
                : arr[1]
        } else {
            return typeof arr[1] === 'string' ? capitalizeFirstLetter(arr[1]) : arr[1]
        }
    }

    const handleClearFilter = () => {
        dispatch(resetFilter({}))
    }

    const handleRemoveFilter = (str: string) => {
        dispatch(removeFilter(str))
    }

    useEffect(() => {
        getProductsByFilters(keyValuePairs).then(data => setOurTopData(data))
    }, [])

    useEffect(() => {
        getProductsByFilters(keyValuePairs).then(data => setOurTopData(data))
    }, [keyValuePairs])

    return (
        <section className={style.wrapper}>
            <div className={style.content}>
                <div className={style.upper_row}>
                    <BreadCrumbs breadCrumbsData={breadCrumbsData}/>
                    <div className={style.dropdown_filteer}></div>
                </div>
                <div className={style.filters_and_products_wrapper}>
                    <aside className={style.filters_panel}>
                        <div className={style.active_filters_block}>
                            <div className={style.filters_block_title}>
                                <span className={style.title}>Фільтр</span>
                                <span
                                    className={style.reset_filters_btn}
                                    onClick={handleClearFilter}
                                >
									Скинути всі
								</span>
                            </div>
                            <div className={style.active_filters_list}>
                                {Object.entries(filters).map((item, index) => (
                                    <div
                                        className={style.active_filter_item}
                                        data-category={item[0]}
                                        data-value={item[1]}
                                        key={index}
                                        onClick={() => handleRemoveFilter(item[0])}
                                    >
										<span className={style.active_filter_text}>
											{outFiltersCategoryText(item)}
										</span>
                                        <svg
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <g clipPath='url(#clip0_274_12391)'>
                                                <path
                                                    className={style.cross}
                                                    d='M18 18L6 6M18 6L6 18'
                                                    stroke='#7F7C83'
                                                    strokeWidth='1.5'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id='clip0_274_12391'>
                                                    <rect width='24' height='24' fill='white'/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <span className={style.count_choosen_product}>Товарів: 845</span>
                        <FilterList
                            data={accordionSections}
                            filters={filters}
                        />
                    </aside>
                    <div className={style.products_wrapper}>
                        <div className={style.catalog_title}>
                            <h1 className={style.title}>{getTitle()}</h1>
                        </div>
                        <div className={style.products_grid}>
                            {ourTopData &&
                                ourTopData.results.map((item, index) => (
                                    <ProductCard key={index} data={item} isFavorite={true}/>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page

const breadCrumbsData = [
    {
        id: 1,
        text: 'Головна',
        link: '/'
    },
    {
        id: 2,
        text: 'Каталог',
        link: ''
    }
]

const accordionSections = [
    {
        filter_category: 'male',
        title: 'Стать',
        has_checkbox: true,
        data: ['Дівчинка', 'Хлопчик']
    },
    {
        filter_category: 'age_range',
        title: 'Вік',
        has_checkbox: true,
        data: ['0-2', '3-4', '5-7', '8-11', '12-14', '14+']
    },
    {
        filter_category: 'category__name',
        title: 'Категорія',
        has_checkbox: false,
        data: ['Одяг', 'Взуття']
    }
]
