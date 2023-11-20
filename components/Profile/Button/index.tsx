import { MouseEventHandler, ReactNode } from 'react'
import style from './style.module.scss'

type ButtonProps = {
	onClick: MouseEventHandler<HTMLButtonElement> | undefined
	text: ReactNode
}

const Button: React.FC<ButtonProps> = props => {
	return (
		<button className={style.form_button} type='submit' onClick={props.onClick}>
			{props.text}
		</button>
	)
}
export default Button
