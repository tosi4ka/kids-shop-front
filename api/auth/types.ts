export interface ILoginRequest {
	email: string
	password: string
}
export interface IRefreshRequest {
	refresh: string
}

export interface ILoginResponse {
	access: string
}
