import '../style/globals.css'
import { Metadata } from 'next'
import { ModalsProvider } from '../context/ModalsProvider'
import Layout from '@/Layout'
import style from './page.module.scss'

export const metadata: Metadata = {
	title: 'Lama Shop',
	description: 'Магазин детской одежды и аксесуаров'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ua' suppressHydrationWarning={true}>
			<body suppressHydrationWarning={true}>
				<ModalsProvider>
					<Layout>
						<main className={style.main}>{children}</main>
					</Layout>
				</ModalsProvider>
			</body>
		</html>
	)
}
