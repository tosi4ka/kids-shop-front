import { InputHTMLAttributes } from 'react'
import style from './style.module.scss'

type InputProps = {
	title: string
	error?: string
	type: string
	handleChange: (e: InputHTMLAttributes<HTMLInputElement>) => void
	values: string
	name: string
	placeholder?: string
}

const Input: React.FC<InputProps> = props => {
	return (
		<label className={style.input_label}>
			<span className={style.input_title}>{props.title}</span>
			<input
				className={`${style.input} ${props.error ? style.input_error : ''}`}
				type={props.type}
				onChange={props.handleChange}
				value={props.values}
				name={props.name}
				placeholder={props.placeholder}
			/>
			{props.error ? (
				<span className={style.input_error_message}>{props.error}</span>
			) : null}
		</label>
	)
}
export default Input
