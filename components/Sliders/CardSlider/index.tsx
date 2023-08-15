import Slider from 'react-slick'
import Image, { StaticImageData } from 'next/image'
import startIcon from '../../../public/MainPage/MainOurTop/Star.svg'
import image from '../../../public/MainPage/MainOurTop/1.jpg'
import topIcon from '../../../public/MainPage/MainOurTop/top_logo.png'

import style from './style.module.scss'
import ProductCard from '@/components/ProductCard'

interface HeaderSliderProps {
	data: Array<{
		product_images?: StaticImageData[]
		age: number
		brand: {
			id: number
			name: string
		}
		category: {
			id: number
			name: string
		}
		color: string
		description: string
		id: number
		male: boolean
		name: string
		price: number
		rating: number
		is_sale: boolean
		discount?: {
			id: number
			name: number
		}
	}>
	slideToShow: number
}

interface ArrowProps {
	onClick?: React.MouseEventHandler<HTMLDivElement>
}

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

const MiniSlider: React.FC<HeaderSliderProps> = props => {
	let settings = {
		// autoplay: true,
		// autoplaySpeed: 10000,
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
								male={item.male}
								image={image}
								price={item.price}
								name={item.name}
								topIcon={topIcon}
								rating={item.rating}
								key={index}
								stars_Icon={startIcon}
								brand={item.brand.name}
								color={item.color}
								is_sale={item.is_sale}
								discout={item.discount?.name}
							/>
						))}
				</Slider>
			</div>
		</div>
	)
}

export default MiniSlider
