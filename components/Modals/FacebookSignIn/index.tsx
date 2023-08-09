'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import img from '../../../public/icons/fecebook_vektor.svg'
import style from './style.module.scss'

const FacebookButton = () => {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl') || '/'

	return (
		<div
			className={style.facebook__button}
			onClick={() => signIn('facebook', { callbackUrl })}
		>
			<Image src={img} alt='facebook' className={style.facebook__img} />
		</div>
	)
}

export { FacebookButton }
