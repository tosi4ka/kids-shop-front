import Link from 'next/link'
import style from './style.module.scss'
import Image, { StaticImageData } from 'next/image'
import { Input } from '../Input'

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

		contacts?: {
			adress: string
			schedule: string
			dayOff: string
			phone: string
			email: string
		}
		socials?: {
			icon: string
			link: string
		}[]
	}[]
	payments: {
		icon: string
		link: string
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
						if (item.contacts) {
							return (
								<div className={style.licks_column} key={index}>
									<h3 className={style.columns_title}>{item.title}</h3>
									<address>
										<p className={style.adress}>{item.contacts.adress}</p>
									</address>
									<p className={style.schedule}>{item.contacts.schedule}</p>
									<p className={style.dayOff}>{item.contacts.dayOff}</p>
									<Link
										href={`tel:${item.contacts.phone}`}
										className={style.contact_link}
										target='_black'
									>
										{item.contacts.phone}
									</Link>
									<Link
										href={`mailto:${item.contacts.email}`}
										className={style.contact_link}
										target='_black'
									>
										{item.contacts.email}
									</Link>
									<div className={style.socials_wrap}>
										{item.socials?.map((item, index) => {
											return (
												<Link
													href={item.link}
													key={index}
													target='_blank'
													rel='nofollow'
												>
													{socialsIconsArray[index]}
												</Link>
											)
										})}
									</div>
								</div>
							)
						}
						return (
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
					<div className={style.licks_column}>
						<h3 className={style.columns_title}>Підписуйтесь на наші новини</h3>
						<Input
							type='email'
							className='withOutArrowIcon'
							placeholderText='Електронна пошта'
						/>
					</div>
				</div>
			</div>
			<div className={style.last_row}>
				<span className={style.copyright}>© 2023 Lama store</span>
				<div className={style.payments}>
					{props.payments.map((item, index) => (
						<Image
							src={item.icon}
							alt={item.link}
							width={40}
							height={40}
							key={index}
						/>
					))}
				</div>
			</div>
		</footer>
	)
}
export default TheFooter

const tiktok = (
	<svg
		width='40'
		height='40'
		viewBox='0 0 40 40'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className={style.icon}
	>
		<rect width='40' height='40' rx='20' fill='white' />
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M23.2372 11C23.5341 13.5545 24.9596 15.0774 27.438 15.2394V18.1125C26.0017 18.2529 24.7436 17.7831 23.2803 16.8974V22.2709C23.2803 29.0972 15.8398 31.2304 12.8484 26.3375C10.9262 23.189 12.1033 17.6643 18.2696 17.4428V20.4725C17.7998 20.5481 17.2977 20.667 16.8387 20.8236C15.4672 21.288 14.6897 22.1575 14.9057 23.6913C15.3214 26.6292 20.7102 27.4986 20.262 21.7579V11.0054H23.2372V11Z'
			fill='#080709'
		/>
	</svg>
)

const instagram = (
	<svg
		width='40'
		height='40'
		viewBox='0 0 40 40'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className={style.icon}
	>
		<rect width='40' height='40' rx='20' fill='white' />
		<path
			d='M20 12.6217C22.4031 12.6217 22.6877 12.6308 23.6367 12.6741C24.5142 12.7141 24.9908 12.8608 25.3079 12.984C25.728 13.1472 26.0278 13.3423 26.3428 13.6572C26.6577 13.9722 26.8528 14.272 27.016 14.6921C27.1392 15.0092 27.2859 15.4858 27.3259 16.3632C27.3692 17.3123 27.3783 17.5969 27.3783 20C27.3783 22.4031 27.3692 22.6878 27.3259 23.6368C27.2859 24.5143 27.1392 24.9908 27.016 25.308C26.8528 25.728 26.6577 26.0279 26.3428 26.3428C26.0278 26.6577 25.728 26.8528 25.3079 27.016C24.9908 27.1393 24.5142 27.2859 23.6367 27.3259C22.6879 27.3692 22.4032 27.3784 20 27.3784C17.5967 27.3784 17.3121 27.3692 16.3632 27.3259C15.4857 27.2859 15.0092 27.1393 14.6921 27.016C14.272 26.8528 13.9721 26.6577 13.6572 26.3428C13.3423 26.0279 13.1472 25.728 12.984 25.308C12.8607 24.9908 12.7141 24.5143 12.6741 23.6368C12.6308 22.6878 12.6216 22.4031 12.6216 20C12.6216 17.5969 12.6308 17.3123 12.6741 16.3633C12.7141 15.4858 12.8607 15.0092 12.984 14.6921C13.1472 14.272 13.3423 13.9722 13.6572 13.6572C13.9721 13.3423 14.272 13.1472 14.6921 12.984C15.0092 12.8608 15.4857 12.7141 16.3632 12.6741C17.3122 12.6308 17.5969 12.6217 20 12.6217ZM20 11C17.5557 11 17.2493 11.0104 16.2893 11.0542C15.3313 11.0979 14.6771 11.25 14.1046 11.4725C13.5128 11.7025 13.0109 12.0102 12.5105 12.5106C12.0102 13.0109 11.7025 13.5128 11.4725 14.1047C11.25 14.6772 11.0979 15.3314 11.0541 16.2893C11.0103 17.2493 11 17.5557 11 20C11 22.4443 11.0103 22.7508 11.0541 23.7107C11.0979 24.6687 11.25 25.3229 11.4725 25.8954C11.7025 26.4872 12.0102 26.9891 12.5105 27.4895C13.0109 27.9898 13.5128 28.2975 14.1046 28.5275C14.6771 28.75 15.3313 28.9021 16.2893 28.9459C17.2493 28.9897 17.5557 29 20 29C22.4443 29 22.7507 28.9897 23.7107 28.9459C24.6686 28.9021 25.3228 28.75 25.8953 28.5275C26.4872 28.2975 26.9891 27.9898 27.4894 27.4895C27.9898 26.9891 28.2975 26.4872 28.5275 25.8954C28.75 25.3229 28.9021 24.6687 28.9458 23.7107C28.9896 22.7508 29 22.4443 29 20C29 17.5557 28.9896 17.2493 28.9458 16.2893C28.9021 15.3314 28.75 14.6772 28.5275 14.1047C28.2975 13.5128 27.9898 13.0109 27.4894 12.5106C26.9891 12.0102 26.4872 11.7025 25.8953 11.4725C25.3228 11.25 24.6686 11.0979 23.7107 11.0542C22.7507 11.0104 22.4443 11 20 11ZM20 15.3784C17.4475 15.3784 15.3783 17.4476 15.3783 20C15.3783 22.5525 17.4475 24.6217 20 24.6217C22.5524 24.6217 24.6216 22.5525 24.6216 20C24.6216 17.4476 22.5524 15.3784 20 15.3784ZM20 23C18.3431 23 17 21.6569 17 20C17 18.3432 18.3431 17 20 17C21.6568 17 23 18.3432 23 20C23 21.6569 21.6568 23 20 23ZM25.8842 15.1958C25.8842 15.7923 25.4007 16.2758 24.8042 16.2758C24.2077 16.2758 23.7242 15.7923 23.7242 15.1958C23.7242 14.5993 24.2077 14.1158 24.8042 14.1158C25.4007 14.1158 25.8842 14.5993 25.8842 15.1958Z'
			fill='#080709'
		/>
	</svg>
)

const facebook = (
	<svg
		width='40'
		height='40'
		viewBox='0 0 40 40'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className={style.icon}
	>
		<rect width='40' height='40' rx='20' fill='white' />
		<path
			d='M26.3021 14.5831H24.0258C23.1546 14.5831 22.4098 14.8923 21.7916 15.5105C21.2014 16.1288 20.9063 16.8735 20.9063 17.7447V19.9789H19.0937V22.6768H20.9063V28.9578H23.6042V22.6768H26.3021V19.9789H23.6042V18.1663C23.6042 17.9415 23.6885 17.7447 23.8571 17.5761C24.0258 17.3794 24.2365 17.281 24.4895 17.281H26.3021V14.5831ZM11 12C11 11.4477 11.4477 11 12 11H28C28.5523 11 29 11.4477 29 12V27.9578C29 28.5101 28.5523 28.9578 28 28.9578H12C11.4477 28.9578 11 28.5101 11 27.9578V12Z'
			fill='#080709'
		/>
	</svg>
)

const socialsIconsArray = [tiktok, instagram, facebook]
