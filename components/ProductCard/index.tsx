import Image, { StaticImageData } from 'next/image'
import style from './style.module.scss'

interface ProductCardProps {
	male: boolean
	image:StaticImageData
	price: number
	name: string
	topIcon:StaticImageData
	rating:number
	stars_Icon: StaticImageData
	key: number
}

const ProductCard: React.FC<ProductCardProps> = props => {
	const setIndicatorFor = (male: boolean) => {
		return male ? style.for_boys : style.for_girls
	}
	return (
		<div className={style.card__slider_slide} key={props.key}>
			<Image
				className={style.top_icon}
				src={props.topIcon}
				alt='top Icon'
				width={24}
				height={24}
			/>
			<div className={style.image}>
				<Image
					src={props.image}
					alt={props.name}
					fill
					sizes='100vw'
					style={{ objectFit: 'cover', objectPosition: '50% 0' }}
				/>
				<div
					className={`${style.indicator_for} ${setIndicatorFor(props.male)}`}
				></div>
				<div className={`${style.add_to} ${style.add_to_favorite}`}>
					<svg
						width='40'
						height='40'
						viewBox='0 0 40 40'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={style.svg}
					>
						<path
							d='M20 26.4444C20 26.4444 13 22.4849 13 17.6768C13.0001 16.827 13.2917 16.0034 13.825 15.3462C14.3583 14.689 15.1005 14.2386 15.9254 14.0717C16.7503 13.9047 17.607 14.0315 18.3499 14.4305C19.0927 14.8295 19.6758 15.476 20 16.2602L20 16.2602C20.3242 15.476 20.9073 14.8295 21.6501 14.4305C22.393 14.0315 23.2497 13.9047 24.0746 14.0717C24.8995 14.2386 25.6417 14.689 26.175 15.3462C26.7083 16.0034 26.9999 16.827 27 17.6768C27 22.4849 20 26.4444 20 26.4444Z'
							stroke='#8B86BE'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
				<div className={`${style.add_to} ${style.add_to_cart}`}>
					<svg
						width='40'
						height='40'
						viewBox='0 0 40 40'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={style.svg_cart}
					>
						<path
							d='M17.0833 16.0435C17.0833 15.2363 17.3906 14.4622 17.9376 13.8914C18.4846 13.3207 19.2265 13 20 13C20.7735 13 21.5154 13.3207 22.0624 13.8914C22.6094 14.4622 22.9167 15.2363 22.9167 16.0435M13.5833 16.0435H26.4167C26.7388 16.0435 27 16.316 27 16.6522V26.3913C27 26.7275 26.7388 27 26.4167 27H13.5833C13.2612 27 13 26.7275 13 26.3913V16.6522C13 16.316 13.2612 16.0435 13.5833 16.0435Z'
							stroke='#8B86BE'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
			</div>
			<div className={style.card_info}>
				<div className={style.upper_row}>
					<div className={style.card_title_row}>
						<span className={style.card_title}>Disney</span>
						<span className={style.card_model}>D 4578</span>
					</div>
					<div className={style.raiting}>
						<div className={style.raiting_block}>
							<Image
								src={props.stars_Icon}
								alt='star icon'
								width={20}
								height={20}
							/>
							<span>{props.rating}</span>
						</div>
						<span>(16)</span>
					</div>
				</div>
				<div className={style.category_wrapp}>
					<span className={style.card_category}>{props.name}</span>
					<div className={style.card_price_wrapp}>
						<span className={style.card_price}>{props.price}</span>
						<div
							className={`${style.indicator_for} ${setIndicatorFor(props.male)}`}
						></div>
					</div>
				</div>
				<div className={style.colors_and_sizes}>
					<div className={style.circle_wrapp}>
						<div className={style.circle}></div>
						<div className={style.circle}></div>
						<div className={style.circle}></div>
						<div className={style.circle}></div>
					</div>
					<div className={style.sizes_wrap}>
						<div className={`${style.size_item} ${style.size_item_inactive}`}>
							98
						</div>
						<div className={style.size_item}>98</div>
						<div className={style.size_item}>98</div>
						<div className={style.size_item}>98</div>
						<div className={style.size_item}>98</div>
						<div className={style.size_item}>98</div>
						<div className={style.size_item}>98</div>
						<div className={style.size_item}>98</div>
						<div className={style.size_item}>98</div>
						<div className={style.size_item}>98</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
