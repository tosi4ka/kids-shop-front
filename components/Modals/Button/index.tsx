import { ReactNode } from 'react'
import style from './style.module.scss'

type ButtonProps = {
	text: ReactNode
	disabled: boolean | undefined
}

const Button: React.FC<ButtonProps> = props => {
	return (
		<button
			className={style.form_button}
			type='submit'
			disabled={props.disabled}
		>
			{props.text}
		</button>
	)
}
export default Button
