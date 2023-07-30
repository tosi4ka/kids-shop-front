import Layout from '@/Layout'
import { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Providers } from '../components/SocProviders/Provider'
import { ModalsProvider } from '../context/ModalsProvider'
import '../style/globals.css'
import style from './page.module.scss'

export const metadata: Metadata = {
	title: 'Lama Shop',
	description: 'Магазин детской одежды и аксесуаров'
}

const manrope = Manrope({
	subsets: ['latin'],
	display: 'swap',
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
				<main className={style.main}>
					<Providers>
						<ModalsProvider>
							<Layout>{children}</Layout>
						</ModalsProvider>
					</Providers>
				</main>
			</body>
		</html>
	)
}
