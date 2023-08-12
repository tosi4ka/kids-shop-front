import CardSlider from '@/components/Sliders/CardSlider'
import style from './style.module.scss'
import { StaticImageData } from 'next/image'

interface PageProps {
	title: string
	slideToShow: number
	data: {
		results: Array<{
			product_images?: StaticImageData[]
			age: number
			category: {
				id: number
				name: string
			}
			color: string
			description: string
			id: number
			male: boolean
			name: string
			price: number
			rating: number
		}>
	}
}

const Page: React.FC<PageProps> = props => {
	return (
		<section className={style.main}>
			<h2 className={style.title}>{props.title}</h2>
			<CardSlider slideToShow={props.slideToShow} data={props.data.results} />
		</section>
	)
}

export default Page
