import '../style/globals.css'
import { Metadata } from 'next'
import { ModalsProvider } from '../context/ModalsProvider'
import Layout from '@/Layout'
import style from './page.module.scss'
import { Manrope } from 'next/font/google'

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
					<ModalsProvider>
						<Layout>{children}</Layout>
					</ModalsProvider>
				</main>
			</body>
		</html>
	)
}
