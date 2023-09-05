import type { Metadata } from 'next'
import Home from './main'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Lama Store',
	description: '...'
}

const Page = () => {
	return (
		<Suspense fallback='Щось пішло не так'>
			<Home />
		</Suspense>
	)
}
export default Page
