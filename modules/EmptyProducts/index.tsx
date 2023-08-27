import Link from 'next/link'
import style from './style.module.scss'

interface EmptyProductsProps {
	cart: boolean
	title: string
	text: string
	btnLink: string
	btnText: string
}

const EmptyProducts: React.FC<EmptyProductsProps> = props => {
	return (
		<div className={style.empty_products_wrapper}>
			<div className={style.title_wrapper}>
				{props.cart ? cartIcon : favoriteIcon}
				<h3 className={style.title}>{props.title}</h3>
			</div>
			<p className={style.text}>{props.text}</p>
			<Link href={props.btnLink} className={style.btn}>
				{props.btnText}
			</Link>
		</div>
	)
}

export default EmptyProducts

const favoriteIcon = (
	<svg
		width='41'
		height='40'
		viewBox='0 0 41 40'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M20.5 28C20.5 28 11.5 22.9091 11.5 16.7273C11.5002 15.6347 11.875 14.5759 12.5607 13.7308C13.2464 12.8858 14.2007 12.3068 15.2613 12.0921C16.3219 11.8775 17.4233 12.0405 18.3784 12.5535C19.3334 13.0665 20.0831 13.8977 20.5 14.9059L20.5 14.9059C20.9169 13.8977 21.6666 13.0665 22.6216 12.5535C23.5767 12.0405 24.6781 11.8775 25.7387 12.0921C26.7993 12.3068 27.7536 12.8858 28.4393 13.7308C29.125 14.5759 29.4998 15.6347 29.5 16.7273C29.5 22.9091 20.5 28 20.5 28Z'
			stroke='#CD9EFF'
			stroke-width='1.5'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
	</svg>
)

const cartIcon = (
	<svg
		width='40'
		height='40'
		viewBox='0 0 40 40'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M16.25 14.913C16.25 13.8752 16.6451 12.8799 17.3483 12.1461C18.0516 11.4123 19.0054 11 20 11C20.9946 11 21.9484 11.4123 22.6517 12.1461C23.3549 12.8799 23.75 13.8752 23.75 14.913M11.75 14.913H28.25C28.6642 14.913 29 15.2634 29 15.6957V28.2174C29 28.6496 28.6642 29 28.25 29H11.75C11.3358 29 11 28.6496 11 28.2174V15.6957C11 15.2634 11.3358 14.913 11.75 14.913Z'
			stroke='#CD9EFF'
			stroke-width='1.5'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
	</svg>
)
