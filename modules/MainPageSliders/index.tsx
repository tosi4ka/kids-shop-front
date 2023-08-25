import MiniSlider from '@/components/Sliders/MiniSlider'
import style from './style.module.scss'
import { StaticImageData } from 'next/image'
import MainSlider from '@/components/Sliders/MainSlider'

interface MainPageSliderProps {
	mainSliderData: dataProps[]
	miniSliderData: { image: StaticImageData }[]
}

type dataProps = {
	image: StaticImageData
	text: string
	lamaImg: StaticImageData
}

const Page: React.FC<MainPageSliderProps> = props => {
	return (
		<section className={style.main_page_slider}>
			<div className={style.content}>
				<MainSlider data={props.mainSliderData} />
			</div>
			<div className={style.miniSlider}>
				<MiniSlider data={props.miniSliderData} slideToShow={5} style='mini' />
			</div>
		</section>
	)
}

export default Page
