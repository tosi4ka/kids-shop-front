'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import img from '../../../public/icons/google__vector.svg'
import style from './style.module.scss'

const GoogleButton = () => {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl') || '/'

	return (
		<div
			className={style.google__button}
			onClick={() => signIn('google', { callbackUrl })}
		>
			<Image src={img} alt='google' className={style.google__img} />
		</div>
	)
}

export { GoogleButton }
