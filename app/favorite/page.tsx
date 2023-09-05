import type { Metadata } from 'next'
import FavoritePage from '.'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Сподобалось',
	description: '...'
}

const Page = () => {
	return (
		<Suspense fallback='Щось пішло не так'>
			<FavoritePage />
		</Suspense>
	)
}
export default Page
