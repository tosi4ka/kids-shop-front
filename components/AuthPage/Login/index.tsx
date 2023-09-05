'use client'

import { useFormik } from 'formik'
import { signIn } from 'next-auth/react'
import { FormEventHandler, Suspense, useState } from 'react'

import { validate } from '@/components/functions/validate'

import { useRouter } from 'next/navigation'
import { GoogleButton } from '../../Modals//GoogleSignIn'
import { FacebookButton } from '../../Modals/FacebookSignIn'
import Button from '../Button'
import Input from '../Input'
import style from './style.module.scss'

import Checkbox from '@/components/AuthPage/Checkbox'
import Image from 'next/image'
import Link from 'next/link'
import img__eye from '../../../public/icons/Eye.svg'
import img__eyeClick from '../../../public/icons/Eye__click.svg'

type SignInErrorsTypes = {
	detail: string
}

const Login = () => {
	const [error, setError] = useState<SignInErrorsTypes | null>(null)
	const router = useRouter()

	const [passwordShown, setPasswordShown] = useState(false)
	const togglePassword = () => {
		setPasswordShown(!passwordShown)
	}

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			agreement: true,
			username: ''
		},
		validate,
		onSubmit: () => {}
	})

	const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)

		const res = await signIn('credentials', {
			email: formData.get('email'),
			password: formData.get('password'),
			redirect: false
		})

		if (res && !res.error) {
			router.push('/profile')
		}

		let status = function (response: Response) {
			if (response.status !== 200) {
				return Promise.reject(new Error(response.statusText))
			}
			return Promise.resolve(response)
		}
		let json = function (response: Response) {
			return response.json()
		}
		const user_info = 'http://localhost:8000/api/auth/users/'

		fetch(user_info)
			.then(status)
			.then(json)
			.then(function (data) {
				console.log('data', data)
			})
			.catch(function (error) {
				console.log('error', error)
			})
	}

	return (
		<>
			<span className={style.form__title}>Я маю акаунт</span>
			<form onSubmit={handleSubmit} className={style.sign_in__form}>
				<Input
					title='Електронна пошта *'
					error={formik.errors.email as string}
					type='email'
					handleChange={formik.handleChange}
					values={formik.values.email as string}
					name='email'
					// placeholder='Username *'
				/>
				<div className={style.pass__wrap}>
					<Input
						title='Пароль*'
						error={formik.errors.password as string}
						type={passwordShown ? 'text' : 'password'}
						handleChange={formik.handleChange}
						values={formik.values.password}
						name='password'
						// placeholder='Password *'
					/>
					<Image
						src={passwordShown ? img__eyeClick : img__eye}
						alt='eye'
						onClick={togglePassword}
						className={style.eye__button}
					/>
				</div>
				<Checkbox
					text={
						<>
							Запам’ятати мене
							<Link href='#'>Відновити пароль</Link>
						</>
					}
					id='remember'
				/>
				<div className={style.signin__button}>
					<Button text='Увійти' />
				</div>
			</form>
			<div className={style.social__sign_in}>
				<span className={style.social__title}>або продовжити</span>
				<div className={style.social__button}>
					<Suspense fallback="as">
						<FacebookButton />
						<GoogleButton />
					</Suspense>
				</div>
			</div>
		</>
	)
}

export default Login
