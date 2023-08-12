import style from './style.module.scss'
import Image, { StaticImageData } from 'next/image'

interface PageProps {
	title: string
	image: StaticImageData
    text: string
    placeholderText: string
}

const Page: React.FC<PageProps> = props => {
	return (
		<section className={style.main}>
			<div className={style.content_wrapp}>
				<div className={style.image_block}>
					<Image
						src={props.image}
						alt='Lama Image'
						fill
						sizes='100vw'
						style={{ objectFit: 'contain' }}
					/>
				</div>
				<div className={style.content}>
					<h2 className={style.title}>{props.title}</h2>
                    <span className={style.text}>{props.text}</span>
                    <input className={style.email_input} type="email" placeholder={props.placeholderText}/>
				</div>
			</div>
		</section>
	)
}

export default Page
