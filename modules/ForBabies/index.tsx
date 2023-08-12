import Image, { StaticImageData } from 'next/image'
import style from './style.module.scss'

interface PageProps {
	title: string
	image1: StaticImageData
	image2: StaticImageData
	image3: StaticImageData
	cell_title1: string
	cell_title2: string
	cell_title3: string
}

const Page: React.FC<PageProps> = props => {
	return (
		<section className={style.main}>
			<h2 className={style.title}>{props.title}</h2>
			<div className={style.content_wrapp}>
				<div className={style.cell}>
					<div className={style.image_wrapp}>
						<Image
							src={props.image1}
							alt='d'
							fill
							sizes='100vw'
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className={style.cell_title}>
						<span>{props.cell_title1}</span>
						<svg
							width='40'
							height='40'
							viewBox='0 0 40 40'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M11.25 19.5H27.75M27.75 19.5L21 12.75M27.75 19.5L21 26.25'
								stroke='#808080'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
				</div>
				<div className={style.cell}>
					<div className={style.image_wrapp}>
						<Image
							src={props.image2}
							alt='d'
							fill
							sizes='100vw'
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className={style.cell_title}>
						<span>{props.cell_title2}</span>
						<svg
							width='40'
							height='40'
							viewBox='0 0 40 40'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M11.25 19.5H27.75M27.75 19.5L21 12.75M27.75 19.5L21 26.25'
								stroke='#808080'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
				</div>
				<div className={style.cell}>
					<div className={style.image_wrapp}>
						<Image
							src={props.image3}
							alt='d'
							fill
							sizes='100vw'
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className={style.cell_title}>
						<span>{props.cell_title3}</span>
						<svg
							width='40'
							height='40'
							viewBox='0 0 40 40'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M11.25 19.5H27.75M27.75 19.5L21 12.75M27.75 19.5L21 26.25'
								stroke='#808080'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Page
