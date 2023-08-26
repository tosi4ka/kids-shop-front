import React, { InputHTMLAttributes } from 'react'
import style from './style.module.scss'

type CheckboxProps = {
	id: string | undefined
	text: string | React.ReactNode
	error?: boolean
	sideLink?: string
	agreement?: (e: InputHTMLAttributes<HTMLInputElement>) => void
}

const Checkbox: React.FC<CheckboxProps> = props => {
	return (
		<div className={style.agreement_wrapp}>
			<div className={style.agreement_block}>
				<input
					type='checkbox'
					id={props.id}
					className={style.checkbox}
					onChange={props.agreement}
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
