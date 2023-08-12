'use client'

import { useEffect, useState } from 'react'

import MainPageFilterBlock from '../modules/MainPageFilterBlock'
import MainPageSlider from '../modules/MainPageSliders'
import MainPageOurTop from '../modules/MainPageOurTop'
import MainPageNews from '../modules/MainPageOurNews'
import ForBabies from '../modules/ForBabies'
import Offers from '../modules/Offers'
import getProducts from '../components/functions/getProducts'

import lamaImg from '../public/MainPage/MainSlider/lama.png'
import slide1 from '../public/MainPage/MainSlider/Image 1.jpg'
import slide2 from '../public/MainPage/MainSlider/Image 2.jpg'
import slide3 from '../public/MainPage/MainSlider/Image 3.jpg'
import disneyLogo from '../public/MainPage/MiniSlider/disney_logo.png'
import levisLogo from '../public/MainPage/MiniSlider/levis_logo.png'
import bossLogo from '../public/MainPage/MiniSlider/boss_logo.png'
import image1 from '../public/MainPage/News/1.jpg'
import image2 from '../public/MainPage/News/2.jpg'
import image3 from '../public/MainPage/News/3.jpg'
import forBabies1 from '../public/MainPage/ForBabies/1.jpg'
import forBabies2 from '../public/MainPage/ForBabies/2.jpg'
import forBabies3 from '../public/MainPage/ForBabies/3.jpg'
import lamaImage from '../public/MainPage/Offers.png'

export default function Home() {
	const [ourTopData, setOurTopData] = useState()

	useEffect(() => {
		getProducts().then(data => setOurTopData(data))
	}, [])
	// console.log(ourTopData)
	return (
		<>
			<MainPageSlider
				lamaImg={lamaImg}
				mainSliderData={sliderData}
				miniSliderData={miniSliderData}
			/>
			<MainPageFilterBlock title='Допоможемо знайти' tabsData={tabsData} />
			{ourTopData && (
				<MainPageOurTop title='Наш топ' data={ourTopData} slideToShow={4} />
			)}
			<MainPageNews
				title='Цікаві новинки'
				cell_title1='Cонцезахисні окуляри'
				cell_title2='Сонцезахисні окуляри'
				cell_title3='Шкільна Форма'
				image={image3}
				lil_image1={image1}
				lil_image2={image2}
			/>
			<ForBabies
				title=' Самим маленьким'
				cell_title1='Боді'
				cell_title2='Сонцезахисні окуляри'
				cell_title3='Сонцезахисні окуляри'
				image3={forBabies1}
				image1={forBabies2}
				image2={forBabies3}
			/>
			{ourTopData && (
				<MainPageOurTop title='Розпродаж' data={ourTopData} slideToShow={4} />
			)}
			<Offers
				title='Бажаєте отримувати цікаві пропозиції?'
				text='Підписуйтесь на нашу розсилку'
				image={lamaImage}
				placeholderText='Електронна пошта'
			/>
		</>
	)
}

const sliderData = [
	{
		image: slide1,
		text: '10% на нову колекцію'
	},
	{
		image: slide2,
		text: '20% на нову колекцію'
	},
	{
		image: slide3,
		text: '30% на нову колекцію'
	}
]

const tabsData = [
	{
		text: 'Одяг'
	},
	{
		text: 'Взуття'
	},
	{
		text: 'Аксесуари'
	},
	{
		text: 'Фемілі лук'
	},
	{
		text: 'Школьна форма'
	},
	{
		text: 'Тематичні костюми'
	}
]

const miniSliderData = [
	{
		image: disneyLogo
	},
	{
		image: levisLogo
	},
	{
		image: bossLogo
	},
	{
		image: disneyLogo
	},
	{
		image: levisLogo
	},
	{
		image: bossLogo
	}
]
