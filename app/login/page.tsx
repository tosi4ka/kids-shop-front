'use client'
import Login from '@/components/AuthPage/Login'
import RegistrationModal from '@/components/AuthPage/Registration'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import img_clock from '../../public/icons/ic_round-timer.svg'
import img_heart from '../../public/icons/ion_heart.svg'
import img_star from '../../public/icons/ion_star.svg'
import style from './style.module.scss'

export default async function AuthPage() {
	const router = useRouter()
	const session = useSession()
	return (
		<>
			{!session.data && (
				<div className={style.wrapper_auth}>
					<div className={style.auth__information}>
						<span className={style.auth__h1}>
							<h1>Чому варто</h1>
							<h1>зареєструватися?</h1>
						</span>
						<div>
							<div className={style.text__content}>
								<Image src={img_star} alt='star' className={style.text__icon} />
								<h2 className={style.text__h2}>
									Ви користуєтесь привілеямі (VIP Розпродаж, shopping night)
								</h2>
							</div>
							<div className={style.text__content}>
								<Image
									src={img_clock}
									alt='star'
									className={style.text__icon}
								/>
								<h2 className={style.text__h2}>
									Приєднуєтесь до Lama.Club та купуєте дешевше!
								</h2>
							</div>
							<div className={style.text__content}>
								<Image
									src={img_heart}
									alt='star'
									className={style.text__icon}
								/>
								<h2 className={style.text__h2}>
									Швидші покупки, завдяки вже збереженим особистим даним.
								</h2>
							</div>
						</div>
					</div>
					<div className={style.signin_form}>
						<Login />
					</div>
					<div className={style.registr_form}>
						<RegistrationModal />
					</div>
				</div>
			)}
			{session.data && router.push('/')}
		</>
	)
}
