import style from './style.module.scss'

const SaleMarker = ({
	text,
	absolute
}: {
	text: number | undefined
	absolute: boolean
}) => {
	return (
		<div
			className={`${style.is_sale} ${absolute ? style.is_sale_absolute : ''} `}
		>
			<span className={style.sale_text}>{`-${text}%`}</span>
		</div>
	)
}

export default SaleMarker
