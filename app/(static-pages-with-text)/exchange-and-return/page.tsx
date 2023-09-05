import type { Metadata } from 'next'
import ExchangePage from '.'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Обмін та повернення',
	description: '...'
}

const Page = () => {
	return (
		<Suspense fallback='Щось пішло не так'>
			<ExchangePage />
		</Suspense>
	)
}
export default Page
