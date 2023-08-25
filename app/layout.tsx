'use client'

import '../style/globals.scss'
import { Provider } from 'react-redux'
import type { Metadata } from 'next'
import { Manrope, Montserrat } from 'next/font/google'
import { Providers } from '../components/SocProviders/Provider'
import { ModalsProvider } from '../context/ModalsProvider'
import style from './page.module.scss'
import Layout from '@/Layout'
import store from '../store'

export const metadata: Metadata = {
	title: 'Lama Shop',
	description: 'Магазин детской одежды и аксесуаров'
}

// const manrope = Manrope({
// 	subsets: ['latin'],
// 	display: 'swap',
// 	weight: ['400', '500', '600', '700'],
// 	variable: '--font-Manrope'
// })

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
			// className={manrope.className}
		>
			<style jsx global>{`
				:root {
					--font-Montserrat: ${montserrat.style.fontFamily};
				}
			`}</style>
			<body suppressHydrationWarning={true}>
				<Providers>
					<Provider store={store}>
						<ModalsProvider>
							<Layout>{children}</Layout>
						</ModalsProvider>
					</Provider>
				</Providers>
			</body>
		</html>
	)
}
