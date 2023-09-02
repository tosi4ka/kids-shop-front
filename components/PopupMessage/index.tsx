import style from './style.module.scss'

const PopUpMessage = ({ text }: { text: string }) => {
	return <div className={style.popup__message}>{text}</div>
}

export default PopUpMessage
