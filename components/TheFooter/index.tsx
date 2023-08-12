import Link from 'next/link'
import style from './style.module.scss'
import Image, { StaticImageData } from 'next/image'

interface FotterProps {
	offresData: {
		icon: StaticImageData
		text: string
	}[]
	logo: StaticImageData
	navigationLinksData: {
		title: string
		linksData?: {
			text: string
			link: string
		}[]
		socials?: {
			icon: string
			link: string
		}[]
		payments?: {
			icon: string
			link: string
		}[]
	}[]
}

const TheFooter: React.FC<FotterProps> = props => {
	return (
		<footer className={style.footer}>
			<div className={style.content}>
				<div className={style.fotter_offers}>
					{props.offresData.map((item, index) => (
						<div className={style.offres_cell} key={index}>
							<Image src={item.icon} alt='icon' width={64} height={64} />
							<span className={style.cell_text}>{item.text}</span>
						</div>
					))}
				</div>
				<div className={style.footer_logo}>
					<div className={style.devider}></div>
					<div className={style.logo_wrapp}>
						<Image
							src={props.logo}
							alt='logo'
							fill
							sizes='100vw'
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className={style.devider}></div>
				</div>
				<div className={style.footer_links}>
					{props.navigationLinksData.map((item, index) => {
						return item.socials ? (
							<div className={style.licks_column} key={index}>
								<h3 className={style.columns_title}>{item.title}</h3>
								<div className={style.socials_wrap}>
									{item.socials?.map((item, index) => (
										<Link href={item.link} key={index} target='_blank' rel='nofollow'>
											<Image
												src={item.icon}
												alt='icon'
												width={44}
												height={44}
											/>
										</Link>
									))}
								</div>
								<div className={style.payments_wrap}>
									{item.payments?.map((item, index) => (
										<Link href={item.link} key={index} target='_blank' rel='nofollow'>
											<Image
												src={item.icon}
												alt='icon'
												width={44}
												height={44}
											/>
										</Link>
									))}
								</div>
							</div>
						) : (
							<div className={style.licks_column} key={index}>
								<h3 className={style.columns_title}>{item.title}</h3>
								<ul className={style.links_lst}>
									{item.linksData?.map((item, index) => (
										<li key={index}>
											<Link href={item.link} className={style.list_item}>
												{item.text}
											</Link>
										</li>
									))}
								</ul>
							</div>
						)
					})}
				</div>
			</div>
		</footer>
	)
}
export default TheFooter
