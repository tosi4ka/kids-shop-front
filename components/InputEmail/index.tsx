import style from './style.module.scss'

const InputEmail = ({
	placeholderText,
	arrowIcon
}: {
	placeholderText: string
	arrowIcon: boolean
}) => {
	return (
		<label>
			<input
				className={
					arrowIcon
						? style.email_input_with_arrow
						: style.email_input_without_arrow
				}
				type='email'
				placeholder={placeholderText}
			/>
		</label>
	)
}

export { InputEmail }
