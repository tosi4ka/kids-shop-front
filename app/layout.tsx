import '../style/globals.scss'
import { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Providers } from '../components/SocProviders/Provider'
import { ModalsProvider } from '../context/ModalsProvider'
import style from './page.module.scss'
import Layout from '@/Layout'

export const metadata: Metadata = {
	title: 'Lama Shop',
	description: 'Магазин детской одежды и аксесуаров'
}

const manrope = Manrope({
	subsets: ['latin'],
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
			className={manrope.className}
		>
			<body suppressHydrationWarning={true}>
				<Providers>
					<ModalsProvider>
						<Layout>{children}</Layout>
					</ModalsProvider>
				</Providers>
			</body>
		</html>
	)
}
