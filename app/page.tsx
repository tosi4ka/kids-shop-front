'use client'

import Image from 'next/image'

import lamaImg from '../public/MainPage/MainSlider/lama.png'
import slide1 from '../public/MainPage/MainSlider/Image 1.jpg'
import slide2 from '../public/MainPage/MainSlider/Image 2.jpg'
import slide3 from '../public/MainPage/MainSlider/Image 3.jpg'
import disneyLogo from '../public/MainPage/MiniSlider/disney_logo.png'
import levisLogo from '../public/MainPage/MiniSlider/levis_logo.png'
import bossLogo from '../public/MainPage/MiniSlider/boss_logo.png'
import MainSlider from '@/components/Sliders/MainSlider'

export default function Home() {
	return (
		<>
			<MainSlider lamaImg={lamaImg} data={sliderData} miniSliderData={miniSliderData}/>
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

const miniSliderData = [
	{
		image: disneyLogo,
	},
	{
		image: levisLogo,
	},
	{
		image: bossLogo,
	}
]
