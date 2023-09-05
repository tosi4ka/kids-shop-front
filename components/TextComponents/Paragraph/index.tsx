import style from './style.module.scss'

const Paragraph = ({ text }: { text: string | React.ReactNode }) => {
	return <p className={style.text}>{text}</p>
}

export default Paragraph
