'use client'
import { useState } from 'react'
import { useAppDispatch } from '../../../store'

import { useModals } from '@/context/ModalsProvider'
import { useFormik } from 'formik'

import { FacebookButton } from '../FacebookSignIn'
import { GoogleButton } from '../GoogleSignIn'
import Input from '../Input'
import style from './style.module.scss'

import Endpoints from '@/api/endpoint'
import { validate } from '@/components/functions/validateSiginIn'
import { getProfile } from '@/store/auth/actionCreators'
import { loginFailure, loginStart, loginSucess } from '@/store/auth/authReducer'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import img__eye from '../../../public/icons/Eye.svg'
import img__eyeClick from '../../../public/icons/Eye__click.svg'
import Button from '../Button'

type SignInErrorsTypes = {
	detail: string
}

const SignIn = () => {
	const [error, setError] = useState<SignInErrorsTypes | null>(null)
	const modals = useModals()

	const [passwordShown, setPasswordShown] = useState(false)
	const togglePassword = () => {
		setPasswordShown(!passwordShown)
	}

	const [isChecked, setIsChecked] = useState(false)
	const handleChange = () => {
		setIsChecked(!isChecked)
	}

	const dispatch = useAppDispatch()

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			agreement: true
		},
		validate,
		onSubmit: values => {
			dispatch(loginStart())
			const value = {
				email: values.email,
				password: values.password
			}
			axios
				.post(Endpoints.AUTH.LOGIN, value)
				.then(response => {
					const Token = response.data.refresh
					localStorage.setItem('refresh', Token)
					if (response.status === 200) {
						modals?.setUserName(values.email)
						setTimeout(() => {
							modals?.SignInModalChangeVisibility(false)
						}, 2000)
						dispatch(loginSucess(response.data.access))
						dispatch(getProfile())
					}
				})
				.catch(error => {
					if (error.response.status === 400) {
						console.log(error.response)
						console.log('Missing Username or Password')
					} else if (error.response.status === 401) {
						console.log(error.response)
						console.log('Unauthorized')
						// setError(
						// 	(formik.errors.email = 'Не вірний логін або пароль') &&
						// 		(formik.errors.password = 'Не вірний логін або пароль')
						// )
						return setError(
							(formik.errors.email = 'Не вірний логін або пароль') &&
								(formik.errors.password = 'Не вірний логін або пароль')
						)
					} else if (error.response) {
						console.log(error.response)
						console.log('server responded')
					} else if (error.request) {
						console.log('network error')
					} else {
						console.log(error)
					}
					console.error(error)

					dispatch(loginFailure(error.message))
				})
		}
	})

	return (
		<>
			<span className={style.form__title}>Я тут вже свій</span>
			<form onSubmit={formik.handleSubmit} className={style.sign_in__form}>
				{modals?.userName ? (
					<span>Вы успешно вошли как {modals?.userName}</span>
				) : (
					<>
						<Input
							title='Електронна пошта *'
							error={formik.errors.email as string}
							type='email'
							handleChange={formik.handleChange}
							values={formik.values.email}
							name='email'
						/>
						<div className={style.pass__wrap}>
							<Input
								title='Пароль*'
								error={formik.errors.password as string}
								type={passwordShown ? 'text' : 'password'}
								handleChange={formik.handleChange}
								values={formik.values.password}
								name='password'
							/>
							<Image
								src={passwordShown ? img__eyeClick : img__eye}
								alt='eye'
								onClick={togglePassword}
								className={passwordShown ? style.eye__open : style.eye__close}
							/>
						</div>
						<div className={style.wrapper__returnPasword}>
							<Link href={'/#'}>Відновити пароль</Link>
						</div>
						<Button
							text='Увійти'
							disabled={!(formik.dirty && formik.isValid)}
						/>
						<div className={style.social__sign_in}>
							<span className={style.social__title}>або за допомогою</span>
							<div className={style.social__button}>
								<FacebookButton />
								<GoogleButton />
							</div>
						</div>
					</>
				)}
			</form>
		</>
	)
}

export default SignIn
