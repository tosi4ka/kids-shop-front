import Slider from 'react-slick'

import style from './style.module.scss'
import ProductCard from '@/components/ProductCard'
import { ProductTypes } from '@/types/productsTypes'

interface HeaderSliderProps {
	data: ProductTypes[]
	slideToShow: number
}

interface ArrowProps {
	onClick?: React.MouseEventHandler<HTMLDivElement>
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
		<div className={style.cards__slider_wrapper}>
			<div className='card__slider'>
				<Slider {...settings}>
					{props.data &&
						props.data.map((item, index: number) => (
							<ProductCard
								key={index}
								data={item}
								isFavorite={true}
							/>
						))}
				</Slider>
			</div>
		</div>
	)
}

export default MiniSlider

const PrevArrow: React.FC<ArrowProps> = props => {
	const { onClick } = props
	return (
		<div className={style.prevArrow} onClick={onClick}>
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

const NextArrow: React.FC<ArrowProps> = props => {
	const { onClick } = props
	return (
		<div className={style.nextArrow} onClick={onClick}>
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
