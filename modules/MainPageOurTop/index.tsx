import CardSlider from '@/components/Sliders/CardSlider'
import style from './style.module.scss'
import { StaticImageData } from 'next/image'
import { ProductTypes, ProductsTypes } from '@/types/productsTypes'

interface PageProps {
	title: string
	slideToShow: number
	data: ProductsTypes
}

const Page: React.FC<PageProps> = props => {
	return (
		<section className={style.main}>
			<h2 className={style.title}>{props.title}</h2>
			<CardSlider slideToShow={props.slideToShow} data={props.data} />
		</section>
	)
}

export default Page
