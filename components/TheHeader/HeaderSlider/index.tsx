import Slider from 'react-slick'

import style from './style.module.scss'

type HeaderSliderProps = {
	text: string
}

const HeaderSlider = ({ data }: { data: HeaderSliderProps[] }) => {
	let settings = {
		autoplay: true,
		autoplaySpeed: 10000,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow className='prev' />,
		prevArrow: <SamplePrevArrow />
	}

	function SamplePrevArrow(props: any) {
		const { onClick } = props
		return (
			<div
				className={style.style}
				style={{
					position: 'absolute',
					top: 0,
					right: '30%',
					cursor: 'pointer',
					zIndex: 10
				}}
				onClick={onClick}
			>
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

	function SampleNextArrow(props: any) {
		const { onClick } = props
		return (
			<div
				style={{ position: 'absolute', top: 0, left: '30%', cursor: 'pointer' }}
				onClick={onClick}
			>
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
	return (
		<div className={style.header__slider}>
			<Slider {...settings}>
				{data.map((item, index: number) => (
					<div className={style.header__slider_slide} key={index}>
						<span>{item.text}</span>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default HeaderSlider
