import { Dispatch } from '@reduxjs/toolkit'
import { AxiosPromise } from 'axios'
import store from '../'
import api from '../../api'
import { ILoginRequest, ILoginResponse } from '../../api/auth/types'
import { history } from '../../utils/history'
import { isTokenExpired } from '../../utils/jwt'
import {
	loadProfileFailure,
	loadProfileStart,
	loadProfileSucess,
	loginFailure,
	loginStart,
	loginSucess,
	logoutSuccess
} from './authReducer'

export const loginUser =
	(data: ILoginRequest) =>
	async (dispatch: Dispatch<any>): Promise<void> => {
		try {
			dispatch(loginStart())

			const res = await api.auth.login(data)

			dispatch(loginSucess(res.data.access))
		} catch (e: any) {
			console.error(e)

			dispatch(loginFailure(e.message))
		}
	}

export const logoutUser =
	() =>
	async (dispatch: Dispatch): Promise<void> => {
		try {
			await api.auth.logout()

			dispatch(logoutSuccess())

			history.push('/')
		} catch (e) {
			console.error(e)
		}
	}

export const getProfile =
	() =>
	async (dispatch: Dispatch<any>): Promise<void> => {
		try {
			dispatch(loadProfileStart())

			const res = await api.auth.getProfile()

			dispatch(loadProfileSucess(res.data))
		} catch (e: any) {
			console.error(e)

			dispatch(loadProfileFailure(e.message))
		}
	}

let refreshTokenRequest: AxiosPromise<ILoginResponse> | null = null

export const getAccessToken =
	() =>
	async (dispatch: Dispatch<any>): Promise<string | null> => {
		try {
			const accessToken = store.getState().auth.authData.access

			if (!accessToken || isTokenExpired(accessToken)) {
				if (refreshTokenRequest === null) {
					refreshTokenRequest = api.auth.refreshToken()
				}

				const res = await refreshTokenRequest
				refreshTokenRequest = null

				dispatch(loginSucess(res.data.access))

				return res.data.access
			}

			return accessToken
		} catch (e) {
			console.error(e)

			return null
		}
	}
