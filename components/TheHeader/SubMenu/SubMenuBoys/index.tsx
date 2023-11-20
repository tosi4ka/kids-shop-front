'use client'

import Image from 'next/image'
import Link from 'next/link'
import accessories from '../../../../public/MainPage/MainFilter/Boy_accessories.png'
import all from '../../../../public/MainPage/MainFilter/Boy_all_goods.png'
import clothe from '../../../../public/MainPage/MainFilter/Boy_clothes.png'
import family from '../../../../public/MainPage/MainFilter/Boy_family_look.png'
import footwear from '../../../../public/MainPage/MainFilter/Boy_shoes.png'
import thematic from '../../../../public/MainPage/MainFilter/Boy_thematic_costumes.png'
import style from './style.module.scss'

const SubMenu_Boys = () => {
	return (
		<ul className={style.submenu}>
			<li>
				<Link href={'#'}>
					<Image src={clothe} alt={'clothe'} className={style.tile} />
					<div className={style.title}>Одяг</div>
				</Link>
			</li>
			<li>
				<Link href={'#'}>
					<Image src={footwear} alt={'footwear'} className={style.tile} />
					<div className={style.title}>Взуття</div>
				</Link>
			</li>
			<li>
				<Link href={'#'}>
					<Image src={accessories} alt={'accessories'} className={style.tile} />
					<div className={style.title}>Аксесуари</div>
				</Link>
			</li>
			<li>
				<Link href={'#'}>
					<Image src={family} alt={'family-look'} className={style.tile} />
					<div className={style.title}>Фемелі лук</div>
				</Link>
			</li>
			<li>
				<Link href={'#'}>
					<Image
						src={thematic}
						alt={'thematic-costumes'}
						className={style.tile}
					/>
					<div className={style.title}>Тематичні костюми</div>
				</Link>
			</li>
			<li>
				<Link href={'#'}>
					<Image src={all} alt={'all-goods'} className={style.tile} />
					<div className={style.title}>Всі товари</div>
				</Link>
			</li>
		</ul>
	)
}
export default SubMenu_Boys
