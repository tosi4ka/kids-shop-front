import type { Metadata } from 'next'
import CheckoutPage from '.'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Сподобалось',
	description: '...'
}

const Page = () => {
	return (
		<Suspense fallback='Щось пішло не так'>
			<CheckoutPage />
		</Suspense>
	)
}
export default Page
