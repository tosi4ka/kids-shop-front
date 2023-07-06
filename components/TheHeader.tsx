'use client'

import Link from 'next/link'
import '../style/TheHeader.components.css'
import { useModals } from '../context/ModalsProvider'

const TheHeader = () => {
	const data = useModals()

	console.log(data)

	const handleOpenRegistrationModal = () => {
		if (data?.signIn) {
			data?.SignInModalChangeVisibility(false)
			data?.RegistrationModalChangeVisibility(!data.signIn)
		}
		data?.RegistrationModalChangeVisibility(!data.registration)
	}

	const handleOpenSignUpModal = () => {
		if (data?.registration) {
			data?.RegistrationModalChangeVisibility(false)
			data?.SignInModalChangeVisibility(!data.signIn)
		}
		data?.SignInModalChangeVisibility(!data.signIn)
	}
	return (
		<header>
			<div className='HeaderWrapper'>
				<div>
					<Link href='/'>Home</Link>
				</div>
				<div>
					<button name='login' onClick={handleOpenSignUpModal}>
						Вхід
					</button>
					<button name='registration' onClick={handleOpenRegistrationModal}>
						Реєстрація
					</button>
				</div>
			</div>
		</header>
	)
}
export { TheHeader }
