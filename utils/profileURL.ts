export interface IAuthTokenInfo {
	token_type: string
	user_id: number
}

export const isTokenExpired = (token: string | null): any => {
	if (!token) {
		return true
	}

	try {
		const tokenInfo = token.split('.')[1]
		const tokenInfoDecoded = window.atob(tokenInfo)
		const { user_id }: IAuthTokenInfo = JSON.parse(tokenInfoDecoded)

		const Id = user_id + '/'

		return Id
	} catch (e) {
		console.error(e)
		return true
	}
}
