import style from './styles.module.scss'

type SelectItemProps = {
	text: string
}

const SelectItem: React.FC<SelectItemProps> = props => {
	return <span className={style.select__item}>{props.text}</span>
}

export default SelectItem
