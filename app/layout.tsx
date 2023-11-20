'use client'

import localFont from 'next/font/local'
import { Provider } from 'react-redux'
import { Providers } from '../components/SocProviders/Provider'
import { ModalsProvider } from '../context/ModalsProvider'
import '../style/globals.scss'

import Layout from '@/Layout'
import store from '../store'

const montserrat = localFont({
	src: [
		{
			path: '../public/fonts/Montserrat-Medium.ttf',
			weight: '500'
		},
		{
			path: '../public/fonts/Montserrat-Regular.ttf',
			weight: '400'
		}
	],
	variable: '--font-Montserrat'
})

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ua' suppressHydrationWarning={true}>
			<body suppressHydrationWarning={true} className={montserrat.variable}>
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
