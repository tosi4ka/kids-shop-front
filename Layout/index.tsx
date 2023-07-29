'use client'

import { TheHeader } from '@/components/TheHeader'
import { TheFooter } from '@/components/TheFooter'
import SignInModal from '@/components/Modals'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<TheHeader />
			<SignInModal />
			{children}
			{/* <TheFooter /> */}
		</>
	)
}

export default Layout
