import React, { InputHTMLAttributes } from 'react'
import style from './style.module.scss'

type CheckboxProps = {
	[x: string]: MouseEventHandler<HTMLInputElement> | undefined
	id: string
	text: string | React.ReactNode
	error?: boolean
	sideLink?: string

	agreement?: (e: InputHTMLAttributes<HTMLInputElement>) => void
}

const Checkbox: React.FC<CheckboxProps> = props => {
	const [checked, setChecked] = React.useState([true, false])
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked([event.target.checked, checked[1]])
	}

	return (
		<div className={style.agreement_wrapp}>
			<div className={style.agreement_block}>
				<input
					type='checkbox'
					id={props.id}
					className={style.checkbox}
					onChange={props.agreement}
					onClick={props.onClick}
				/>
				<label
					className={`${style.checkbox_label} ${
						props.error ? style.checkbox_label_error : ''
					}`}
					htmlFor={props.id}
				>
					<span className={style.remember_me_text}>{props.text}</span>
				</label>
			</div>
			<span className={style.reset_password_text}>{props.sideLink}</span>
		</div>
	)
}

export default Checkbox
