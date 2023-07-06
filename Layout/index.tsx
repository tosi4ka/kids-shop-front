'use client'

import { useModals } from '@/context/ModalsProvider'
import Registration from '@/components/Modals/RegistrationForm'
import { TheHeader } from '@/components/TheHeader'
import { TheNav } from '@/components/TheNav'
import { TheFooter } from '@/components/TheFooter'
import SignIn from '@/components/Modals/SignInForm'

const Layout = ({ children }: { children: React.ReactNode }) => {
	const modals = useModals()
	return (
		<>
			<TheHeader />
			<TheNav />
			{modals?.registration && <Registration />}
			{modals?.signIn && <SignIn />}
			{children}
			<TheFooter />
		</>
	)
}

export default Layout
