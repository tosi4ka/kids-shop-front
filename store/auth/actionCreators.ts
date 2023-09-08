import Endpoints from '@/api/endpoint'
import { axiosInstance } from '@/api/instance'
import { isTokenExpired } from '@/utils/jwt'
import { Dispatch } from '@reduxjs/toolkit'
import axios, { AxiosPromise } from 'axios'
import jwtDecode from 'jwt-decode'
import store from '..'
import api from '../../api'
import { ILoginRequest, ILoginResponse } from '../../api/auth/types'
import { history } from '../../utils/history'
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
			const Token = res.data.refresh
			localStorage.setItem('refresh', Token)

			dispatch(loginSucess(res.data.access))
			dispatch(getProfile())
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

			let decode = jwtDecode(localStorage.getItem('refresh')).user_id
			const res = await axiosInstance.get(Endpoints.AUTH.PROFILE + decode + '/')

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
			const refreshToken_Data = localStorage.getItem('refresh')
			let refreshToken = {
				refresh: refreshToken_Data
			}
			if (!accessToken || isTokenExpired(accessToken)) {
				if (refreshTokenRequest === null) {
					refreshTokenRequest = axios.post(Endpoints.AUTH.REFRESH, refreshToken)
				}
				console.log(refreshTokenRequest)
				const res = await refreshTokenRequest
				refreshTokenRequest = null

				dispatch(loginSucess(res.data.access))

				return res.data.access
			}

			return accessTokenNew
		} catch (e) {
			console.error(e)

			return null
		}
	}
