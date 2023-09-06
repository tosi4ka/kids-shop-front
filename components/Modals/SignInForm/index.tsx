'use client'
import { FormEvent, useState } from 'react'
import { useAppDispatch } from '../../../store'
import { loginUser } from '../../../store/auth/actionCreators'

import { useModals } from '@/context/ModalsProvider'
import { useFormik } from 'formik'

import { FacebookButton } from '../FacebookSignIn'
import { GoogleButton } from '../GoogleSignIn'
import Input from '../Input'
import style from './style.module.scss'

import Image from 'next/image'
import img__eye from '../../../public/icons/Eye.svg'
import img__eyeClick from '../../../public/icons/Eye__click.svg'
import Checkbox from '../Checkbox'

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

	const [checked, setChecked] = useState(false)
	const handleChange = () => {
		setChecked(!checked)
	}

	const dispatch = useAppDispatch()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		dispatch(loginUser({ email, password }))
		modals?.setUserName(email)
		setTimeout(() => {
			modals?.SignInModalChangeVisibility(false)
		}, 2000)
	}
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			agreement: true
		},
		// validate,
		onSubmit: () => {
			// axios
			// 	.post(Endpoints.AUTH.LOGIN, values)
			// 	.then(response => {
			// 		const token = response.data.access
			// 		if (checked === true) {
			// 			localStorage.setItem('token', token)
			// 		} else {
			// 			sessionStorage.setItem('token', token)
			// 		}
			// 		if (response.data) {
			// 			setError(response.data)
			// 		}
			// 		modals?.setUserName(values.email)
			// 		setTimeout(() => {
			// 			modals?.SignInModalChangeVisibility(false)
			// 		}, 2000)
			// 	})
			// 	.catch(error => {
			// 		if (error.response.status === 400) {
			// 			console.log(error.response)
			// 			console.log('Missing Username or Password')
			// 		} else if (error.response.status === 401) {
			// 			console.log(error.response)
			// 			console.log('Unauthorized')
			// 			return (error.text = 'Unauthorized')
			// 		} else if (error.response) {
			// 			console.log(error.response)
			// 			console.log('server responded')
			// 		} else if (error.request) {
			// 			console.log('network error')
			// 		} else {
			// 			console.log(error)
			// 		}
			// 	})
		}
	})

	return (
		<>
			<span className={style.form__title}>Я тут вже свій</span>
			<form onSubmit={handleSubmit} className={style.sign_in__form}>
				{modals?.userName ? (
					<span>Вы успешно вошли как {modals?.userName}</span>
				) : (
					<>
						<Input
							title='Електронна пошта *'
							error={formik.errors.email as string}
							type='email'
							// handleChange={formik.handleChange}
							// values={formik.values.email as string}
							name='email'
							values={email}
							handleChange={e => setEmail(e.target.value)}
						/>
						<div className={style.pass__wrap}>
							<Input
								title='Пароль*'
								error={formik.errors.password as string}
								type={passwordShown ? 'text' : 'password'}
								// handleChange={formik.handleChange}
								// values={formik.values.password}
								name='password'
								handleChange={e => setPassword(e.target.value)}
								values={password}
							/>
							<Image
								src={passwordShown ? img__eyeClick : img__eye}
								alt='eye'
								onClick={togglePassword}
								className={passwordShown ? style.eye__open : style.eye__close}
							/>
						</div>
						<Checkbox
							id='rules'
							text='Запам’ятати мене'
							sideLink='Відновити пароль'
							onClick={handleChange}
						/>
						<button
							className={style.form_button}
							type='submit'
							// disabled={!(formik.dirty && formik.isValid)}
						>
							Увійти
						</button>
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
