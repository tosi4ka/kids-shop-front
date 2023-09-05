import style from './style.module.scss'

const Subtitle = ({ title }: { title: string }) => {
	return <h2 className={style.subtitle}>{title}</h2>
}

export default Subtitle
