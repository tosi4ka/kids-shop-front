import style from './style.module.scss'

const Title = ({ title }: { title?: string }) => {
	return <h1 className={style.title}>{title}</h1>
}

export default Title
