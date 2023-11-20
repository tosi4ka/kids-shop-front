import style from './styles.module.scss'

interface TitleItemProps {
	label: string
}

const TitleItem: React.FC<TitleItemProps> = ({ label }) => {
	return <h2 className={style.title__text}>{label}</h2>
}

export default TitleItem
