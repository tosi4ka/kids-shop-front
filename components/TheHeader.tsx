import Link from 'next/link'
import '../style/TheHeader.components.css'

const TheHeader = () => {
	return (
		<header>
			<div className='HeaderWrapper'>
				<div>
					<Link href='/'>Home</Link>
				</div>
				<div>
					<button name='login'>Вхід</button>
					<button name='registration'>Реєстрація</button>
				</div>
			</div>
		</header>
	)
}
export { TheHeader }
