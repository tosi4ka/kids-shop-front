'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import img from '../../../public/icons/Google.svg'

const GoogleButton = () => {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl') || '/'

	return (
		<div onClick={() => signIn('google', { callbackUrl })}>
			<Image src={img} alt='google' />
		</div>
	)
}

export { GoogleButton }
