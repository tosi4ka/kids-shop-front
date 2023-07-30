import type { AuthOptions } from 'next-auth'
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
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
		})
	]
}
