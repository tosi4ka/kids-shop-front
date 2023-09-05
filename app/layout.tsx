'use client'

import '../style/globals.scss'
import { Provider } from 'react-redux'
import { Montserrat } from 'next/font/google'
import { Providers } from '../components/SocProviders/Provider'
import { ModalsProvider } from '../context/ModalsProvider'

import Layout from '@/Layout'
import store from '../store'

const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	weight: ['400', '500', '600', '700'],
	variable: '--font-Manrope'
})

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='ua'
			suppressHydrationWarning={true}
		>
			<style jsx global>{`
				:root {
					--font-Montserrat: ${montserrat.style.fontFamily};
				}
			`}</style>
			<body suppressHydrationWarning={true}>
				<Provider store={store}>
					<Providers>
						<ModalsProvider>
							<Layout>{children}</Layout>
						</ModalsProvider>
					</Providers>
				</Provider>
			</body>
		</html>
	)
}
