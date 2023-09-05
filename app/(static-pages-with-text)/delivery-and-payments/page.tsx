import type { Metadata } from 'next'
import DeliveryPage from '.'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Доставка і оплата',
	description: '...'
}

const Page = () => {
	return (
		<Suspense fallback='Щось пішло не так'>
			<DeliveryPage />
		</Suspense>
	)
}
export default Page
