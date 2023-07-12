'use client'

import Link from 'next/link'
import '../style/TheHeader.components.css'
import { useModals } from '../context/ModalsProvider'
import { useState } from 'react'
import style from './style.module.scss'

const TheHeader = () => {
	const data = useModals()
	const [userInfoOpen, setUserInfoOpem] = useState(false)

	const handleToggleRegistrationModal = () => {
		if (data?.signIn) {
			data?.SignInModalChangeVisibility(false)
			data?.RegistrationModalChangeVisibility(!data.signIn)
		}
		data?.RegistrationModalChangeVisibility(!data.registration)
	}

	const handleToggleSignUpModal = () => {
		if (data?.registration) {
			data?.RegistrationModalChangeVisibility(false)
			data?.SignInModalChangeVisibility(!data.signIn)
		}
		data?.SignInModalChangeVisibility(!data.signIn)
	}

	const handleOpenUserInfo = () => {
		setUserInfoOpem(!userInfoOpen)
	}

	const handleSingOut = () => {
		data?.setUserName('')
	}
	return (
		<header>
			<div className='HeaderWrapper'>
				<div>
					<Link href='/'>Home</Link>
				</div>
				<div style={{ position: 'relative' }}>
					{data?.userName ? (
						<>
							<button onClick={handleOpenUserInfo}>{data?.userName}</button>
							{/* <div className={style.}> */}
								<div
									className={`${style.userInfo} ${
										userInfoOpen ? style.closeUserInfo : ''
									}`}
								>
									{' '}
									<ul>
										<li>Шо там?</li>
										<li>Как дела?</li>
										<li>Шо по чем?</li>
										<li onClick={handleSingOut}>Выйти</li>
									</ul>
								</div>
							{/* </div> */}
						</>
					) : (
						<>
							<button name='login' onClick={handleToggleSignUpModal}>
								Вхід
							</button>
							<button
								name='registration'
								onClick={handleToggleRegistrationModal}
							>
								Реєстрація
							</button>
						</>
					)}
				</div>
			</div>
		</header>
	)
}
export { TheHeader }
