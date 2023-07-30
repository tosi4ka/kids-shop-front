'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import img from '../../../public/icons/Facebook.svg'
import style from './style.module.scss'

const FacebookButton = () => {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl') || '/'

	return (
		<div
			onClick={() => signIn('facebook', { callbackUrl })}
			className={style.facebook__button}
		>
			<Image src={img} alt='facebook' />
		</div>
	)
}

export { FacebookButton }
