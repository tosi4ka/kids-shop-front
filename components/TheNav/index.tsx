import Link from 'next/link'
// import '../style/TheNav.components.css'

const TheNav = () => {
	return (
		<nav className='navigation'>
			<div className='NavLeft'>
				<Link href='/' className='NavElements'>
					Нові надходження
				</Link>
				<Link href='/bonus-program' className='NavElements'>
					Бонусна програма
				</Link>
				<Link href='/' className='NavElements'>
					Розпродаж
				</Link>
			</div>
			<div className='NavRight'>
				<input type='search' className='NavInput'></input>
				<Link href='/' className='NavElements'>
					Відгуки
				</Link>
				<Link href='/' className='NavElements'>
					Є речі, з яких виросли
				</Link>
			</div>
		</nav>
	)
}
export { TheNav }
