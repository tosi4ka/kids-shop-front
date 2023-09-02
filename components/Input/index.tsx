import style from './style.module.scss'

const inputClassnames: { [key: string]: string } = {
	arrowIcon: style.email_input_with_arrow,
	withOutArrowIcon: style.email_input_without_arrow,
	promo: style.input_promo
}

const Input = ({
	placeholderText,
	className,
	type
}: {
	placeholderText: string
	className: string
	type: string
}) => {
	return (
		<input
			className={inputClassnames[className]}
			type={type}
			placeholder={placeholderText}
		/>
	)
}

export { Input }
