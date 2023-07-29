'use client'

import { useContext, useState, createContext } from 'react'

type contextData = {
	// registration: boolean
	// RegistrationModalChangeVisibility: (message: boolean) => void
	signIn: boolean
	SignInModalChangeVisibility: (message: boolean) => void
	userName?: string,
	setUserName: (message: string) => void
}

export const ModalsContext = createContext<contextData | null>(null)

export const useModals = () => {
	return useContext(ModalsContext)
}

export const ModalsProvider = ({ children }: { children: React.ReactNode }) => {
	const [registration, setRegistration] =
		useState(false)
	const [signIn, setSignIn] = useState(false)
	const [userName, setUserName] = useState("")

	function turnOnScroll() {
		document.body.className = ''
	}

	function turnOffScroll() {
		document.body.className = 'modal_opened'
	}

	function RegistrationModalChangeVisibility() {
		setRegistration(!registration)
		if (registration) {
			turnOnScroll()
		} else {
			turnOffScroll()
		}
	}

	function SignInModalChangeVisibility() {
		setSignIn(!signIn)
		if (signIn) {
			turnOnScroll()
		} else {
			turnOffScroll()
		}
	}

	return (
		<ModalsContext.Provider
			value={{
				// registration,
				// RegistrationModalChangeVisibility,
				signIn,
				SignInModalChangeVisibility,
				setUserName,
				userName
			}}
		>
			{children}
		</ModalsContext.Provider>
	)
}
