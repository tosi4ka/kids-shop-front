import style from './styles.module.scss'

interface TitleH1Props {
	label: string
}

const TitleH1: React.FC<TitleH1Props> = ({ label }) => {
	return <h1 className={style.title__text}>{label}</h1>
}

export default TitleH1
