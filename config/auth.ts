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
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' }
			},
			async authorize(credentials, req) {
				const res = await fetch('http://localhost:8000/api/auth/jwt/create/', {
					method: 'POST',
					body: JSON.stringify(credentials),
					headers: { 'Content-Type': 'application/json' }
				})
				const user = await res.json()

				if (res.ok && user) {
					return user
				}
				return null
			}
		})
	],
	pages: {
		signIn: '/login'
	}
}
