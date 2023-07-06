import Link from 'next/link'
import '../style/TheFooter.components.css'

const TheFooter = () => {
	return (
		<footer>
			<div>
				<h2>Наші контакти</h2>
				<div></div>
			</div>
			<div>
				<h2>Допомога</h2>
				<ul>
					<li>
						<Link href='/delivery-and-payment'>Доставка і оплата</Link>
					</li>
					<li>
						<Link href='/exchange-and-return'>Обмін та повернення</Link>
					</li>
					<li>
						<Link href='/ables-of-sizes'>Таблиці розмірів</Link>
					</li>
					<li>
						<Link href='/bonus-program'>Бонусна програма</Link>
					</li>
				</ul>
			</div>
			<div className='frequentlySearched'>
				<h2>Часто шукаємі розділи</h2>
				<ul>
					<li>
						<Link href='/for-girls'>Дівчаткам</Link>
					</li>
					<li>
						<Link href='/to-boys'>Хлопчикам</Link>
					</li>
					<li>
						<Link href='/clothes'>Одяг</Link>
					</li>
					<li>
						<Link href='/footwear'>Взуття</Link>
					</li>
					<li>
						<Link href='/school-uniform'>Шкільна форма</Link>
					</li>
					<li>
						<Link href='/brands'>Бренди</Link>
					</li>
					<li>
						<Link href='/men'>Чоловіки</Link>
					</li>
					<li>
						<Link href='/kryzhma'>Крижми</Link>
					</li>
					<li>
						<Link href='/sliders'>Повзунки</Link>
					</li>
					<li>
						<Link href='/caps'>Чепчики</Link>
					</li>
					<li>
						<Link href='/clothing-for-baptism'>Одяг для Хрещення</Link>
					</li>
				</ul>
			</div>
			<div className='SocialNetwork'>
				<h2>Наші соц мережі</h2>
			</div>
		</footer>
	)
}
export { TheFooter }
