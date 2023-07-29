import style from './style.module.scss'

const Button = ({ text }: { text: string }) => {
	return (
		<button className={style.form_button} type='submit'>
			{text}
		</button>
	)
}

export default Button
