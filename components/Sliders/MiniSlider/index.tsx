import Slider from 'react-slick'

import style from './style.module.scss'
import Image, { StaticImageData } from 'next/image'

interface HeaderSliderProps {
	data: Array<{
		image?: StaticImageData
		text?: string
	}>
	slideToShow: number
	style: string
}

interface ArrowProps {
	onClick?: React.MouseEventHandler<HTMLDivElement>
}

const PrevArrow: React.FC<ArrowProps> = props => {
	const { onClick } = props
	return (
		<div className={style.prevArrow} onClick={onClick}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='37'
				height='36'
				viewBox='0 0 37 36'
				fill='none'
				className={style.arrow}
			>
				<path
					d='M22 25L14.5 17.5L22 10'
					stroke='#808080'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	)
}

const NextArrow: React.FC<ArrowProps> = props => {
	const { onClick } = props
	return (
		<div className={style.nextArrow} onClick={onClick}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='37'
				height='36'
				viewBox='0 0 37 36'
				fill='none'
				className={style.arrow}
			>
				<path
					d='M14.5 25L22 17.5L14.5 10'
					stroke='#808080'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	)
}

interface styleProps {
	[key: string]: string
}

const sliderStyles: styleProps = {
	header: style.header__slider_wrapper,
	mini: style.mini__slider_wrapper
}

const MiniSlider: React.FC<HeaderSliderProps> = props => {
	let settings = {
		autoplay: true,
		autoplaySpeed: 10000,
		infinite: true,
		speed: 500,
		slidesToShow: props.slideToShow,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />
	}

	return (
		<div className={sliderStyles[props.style]}>
			<div className={style.mini__slider}>
				<Slider {...settings}>
					{props.data.map((item, index: number) => {
						return item.image ? (
							<div className={style.mini__slider_slide} key={index}>
								<Image src={item.image} alt='' />
							</div>
						) : (
							<div className={style.mini__slider_slide} key={index}>
								<span>{item.text}</span>
							</div>
						)
					})}
				</Slider>
			</div>
		</div>
	)
}

export default MiniSlider
