import Image, { StaticImageData } from 'next/image'
import Slider from 'react-slick'

import style from './style.module.scss'
import { useState } from 'react'
import MiniSlider from '../MiniSlider'

interface MainSliderProps {
	data: dataProps[]
	lamaImg: StaticImageData
	miniSliderData: dataProps[]
}

type dataProps = {
	image: StaticImageData
	text?: string
}

interface ArrowProps {
	onClick?: React.MouseEventHandler<HTMLDivElement>
}

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
	return (
		<div className={style.PrevArrow} onClick={onClick}>
			<svg
				width='40'
				height='40'
				viewBox='0 0 40 40'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M28.75 19.5H12.25M12.25 19.5L19 12.75M12.25 19.5L19 26.25'
					stroke='#808080'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	)
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
	return (
		<div className={style.NextArrow} onClick={onClick}>
			<svg
				width='40'
				height='40'
				viewBox='0 0 40 40'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M11.25 19.5H27.75M27.75 19.5L21 12.75M27.75 19.5L21 26.25'
					stroke='#808080'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	)
}

const MainSlider: React.FC<MainSliderProps> = props => {
	const [activeSlide, setActiveSlide] = useState(1)
	let settings = {
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		appendDots: (dots: any) => (
			<div>
				<ul className='custom-dots'>{dots}</ul>
			</div>
		),
		customPaging: () => <div className='custom-dot'></div>,

		beforeChange: (current: number, next: number) => {
			setActiveSlide(next)
		}
	}

	return (
		<section className={style.main_page_slider}>
			<div className={style.content}>
				<div className={style.left_panel}>
					<h3 className={style.panel_title}>{props.data[activeSlide].text}</h3>
					<Image src={props.lamaImg} alt='Lama image' />
				</div>
				<div className={`${style.slider} main-slider`}>
					<Slider {...settings}>
						{props.data.map((item, index) => (
							<Image src={item.image} alt='slide' height={620} key={index} />
						))}
					</Slider>
				</div>
			</div>
			<div className={style.miniSlider}>
				<MiniSlider data={props.miniSliderData} slideToShow={2}/>
			</div>
		</section>
	)
}

export default MainSlider
