'use client'

import { useFormik } from 'formik'
import { signIn } from 'next-auth/react'
import { FormEventHandler, useState } from 'react'

import { validate } from '@/components/functions/validate'

import { useRouter } from 'next/navigation'
import { GoogleButton } from '../../Modals//GoogleSignIn'
import { FacebookButton } from '../../Modals/FacebookSignIn'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Input from '../Input'
import style from './style.module.scss'

import Image from 'next/image'
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
			agreement: true
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
		} else {
			console.log(res)
		}
	}

	return (
		<>
			<span className={style.form__title}>Я маю акаунт</span>
			<form onSubmit={handleSubmit} className={style.sign_in__form}>
				<Input
					title='Електронна пошта *'
					error={error?.detail as string}
					type='email'
					handleChange={formik.handleChange}
					values={formik.values.email}
					name='email'
					// placeholder='Username *'
				/>
				<div className={style.pass__wrap}>
					<Input
						title='Пароль*'
						error={error?.detail as string}
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
				<Checkbox text='Запам’ятати мене' sideLink='Відновити пароль' />
				<div className={style.signin__button}>
					<Button text='Увійти' />
				</div>
			</form>
			<div className={style.social__sign_in}>
				<span className={style.social__title}>або продовжити</span>
				<div className={style.social__button}>
					<FacebookButton />
					<GoogleButton />
				</div>
			</div>
		</>
	)
}

export default Login
