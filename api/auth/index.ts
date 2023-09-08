import { AxiosPromise } from 'axios'
import Endpoints from '../endpoint'
import { axiosInstance } from '../instance'
import { ILoginRequest, ILoginResponse, IRefreshRequest } from './types'

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
	axiosInstance.post(Endpoints.AUTH.LOGIN, params)

export const refreshToken = (
	params: IRefreshRequest
): AxiosPromise<ILoginResponse> => axiosInstance.post(Endpoints.AUTH.REFRESH)

export const logout = (): AxiosPromise =>
	axiosInstance.get(Endpoints.AUTH.LOGOUT)

export const getProfile = (): AxiosPromise<string> =>
	axiosInstance.get(Endpoints.AUTH.PROFILE)
