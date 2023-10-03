import Link from 'next/link'
import style from './style.module.scss'

interface BreadCrumbsProps {
	breadCrumbsData: {
		id: number
		link: string
		text: string
	}[]
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = props => {
	return (
		<ul className={style.breadcrumbs}>
			{props.breadCrumbsData.map((item, index) => (
				<li className={style.breadcrumbs__item} key={index}>
					{item.link ? <Link href={item.link}>{item.text}</Link> : item.text}
				</li>
			))}
		</ul>
	)
}

export default BreadCrumbs
