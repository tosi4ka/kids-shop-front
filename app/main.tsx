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
import Lama_dreamsImg from '../public/MainPage/MainSlider/Lama_dreams.png'
import Lama_scarfImg from '../public/MainPage/MainSlider/Lama_scarf.png'
import slide1 from '../public/MainPage/MainSlider/slide1_1.png'
import slide2 from '../public/MainPage/MainSlider/slide2_1.png'
import slide3 from '../public/MainPage/MainSlider/slide3_1.png'
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
	return (
		<>
			<MainPageSlider
				// lamaImg={lamaImg}
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
		text: '10% на нову колекцію',
		lamaImg: lamaImg
	},
	{
		image: slide2,
		text: '-25% на теплий одяг',
		lamaImg: Lama_dreamsImg
	},
	{
		image: slide3,
		text: 'Постійні знижки на аксесуари',
		lamaImg: Lama_scarfImg
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
		text: 'Тематичні костюми'
	},
	{
		text: 'Всі товари'
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