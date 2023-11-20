import Image from 'next/image'
import { InputHTMLAttributes } from 'react'
import Pan from '../../../../../public/Profile/icon/Pan.svg'
import style from './style.module.scss'

type InputProps = {
	error?: string
	type: string
	handleChange: (e: InputHTMLAttributes<HTMLInputElement>) => void
	name: string
	placeholder?: string
}

const Input: React.FC<InputProps> = props => {
	return (
		<label className={style.input_label}>
			<input
				className={`${style.input} ${props.error ? style.input_error : ''}`}
				type={props.type}
				onChange={props.handleChange}
				name={props.name}
				placeholder={props.placeholder}
			/>
			{props.error ? (
				<span className={style.input_error_message}>{props.error}</span>
			) : null}
			<div className={style.crumbs}>.......</div>
			<Image src={Pan} alt='Pan' className={style.img__Pan} />
		</label>
	)
}
export default Input
