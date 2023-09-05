import style from './style.module.scss'

const List = ({ list }: { list: React.ReactNode }) => {
	return <ul className={style.list}>{list}</ul>
}

export default List
