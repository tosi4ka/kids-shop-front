import style from './styles.module.scss'

interface TextItemProps {
	label: string
}

const TextItem: React.FC<TextItemProps> = ({ label }) => {
	return <span className={style.text}>{label}l</span>
}

export default TextItem