import type { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import FacebookProvider from 'next-auth/providers/facebook'
import GoggleProvider from 'next-auth/providers/google'

export const authConfig: AuthOptions = {
	providers: [
		GoggleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_SECRET!
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID!,
			clientSecret: process.env.FACEBOOK_SECRET!
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' }
			},
			async authorize(credentials, req) {
				const res = await fetch('http://localhost:8000/api/auth/jwt/create/', {
					method: 'POST',
					body: JSON.stringify(credentials),
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json'
					}
				})
				const user = await res.json()

				if (res.ok && user) {
					return user
				}
				return null
			}
		})
	],
	// callbacks: {
	// 	session: async ({ session, token }) => {
	// 		if (session?.user) {
	// 			session.user.id = token.uid
	// 		}
	// 		return session
	// 	},
	// 	jwt: async ({ user, token }) => {
	// 		if (user) {
	// 			token.uid = user.id
	// 		}
	// 		return token
	// 	}
	// },
	// session: {
	// 	strategy: 'jwt'
	// },
	pages: {
		signIn: '/login'
	}
}
