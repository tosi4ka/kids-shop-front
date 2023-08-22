import { ProductTypes } from '@/types/productsTypes'
import style from './style.module.scss'

interface ButtonAddToTypes {
	onClick: () => void
}

const ButtonAddTo = () => {
	// const
	return (
		<div className={`${style.add_to} ${style.add_to_cart}`}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='40'
				height='40'
				viewBox='0 0 40 40'
				fill='none'
				className={style.svg_cart}
				// onClick={() => props.handleAddtoCart(props.data)}
				// onClick={props.onClick}
			>
				<circle cx='20' cy='20' r='15' fill='#A663EE' />
				<path
					d='M17.0833 16.0435C17.0833 15.2363 17.3906 14.4622 17.9376 13.8914C18.4846 13.3207 19.2265 13 20 13C20.7735 13 21.5154 13.3207 22.0624 13.8914C22.6094 14.4622 22.9167 15.2363 22.9167 16.0435M13.5833 16.0435H26.4167C26.7388 16.0435 27 16.316 27 16.6522V26.3913C27 26.7275 26.7388 27 26.4167 27H13.5833C13.2612 27 13 26.7275 13 26.3913V16.6522C13 16.316 13.2612 16.0435 13.5833 16.0435Z'
					stroke='#CD9EFF'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	)
}

export default ButtonAddTo
