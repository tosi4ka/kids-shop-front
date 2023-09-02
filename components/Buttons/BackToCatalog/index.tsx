import Link from 'next/link'
import style from './style.module.scss'

const ButtonBackToCatalog = ({ btn_text }: { btn_text: string }) => {
	return (
		<Link href='/' className={style.button_back_to_catalog} title={btn_text} >
			{arrow}
			{btn_text}
		</Link>
	)
}

export default ButtonBackToCatalog

const arrow = (
	<svg
		width='40'
		height='40'
		viewBox='0 0 40 40'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
        className={style.btn__arrow}
	>
		<path
			d='M27.75 19.75L11.25 19.75M11.25 19.75L18 26.5M11.25 19.75L18 13'
			stroke='#7F7C83'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
