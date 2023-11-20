import Image from 'next/image'
import { MouseEventHandler, ReactNode } from 'react'
import Plus from '../../../public/Profile/plus.svg'
import style from './style.module.scss'

type ButtonPlusProps = {
	onClick: MouseEventHandler<HTMLButtonElement> | undefined
	text: ReactNode
}

const ButtonPlus: React.FC<ButtonPlusProps> = props => {
	return (
		<button className={style.form_button} type='submit' onClick={props.onClick}>
			<div className={style.imagePlus}>
				<Image src={Plus} alt={'plus'} />
			</div>
			{props.text}
		</button>
	)
}
export default ButtonPlus
