'use client'

import { useFormik } from 'formik'
import { useState } from 'react'

import style from './style.module.scss'
import { validate } from '@/components/functions/validate'
import { signIn } from '@/components/functions'
import { useModals } from '@/context/ModalsProvider'
import Input from '../Input'
import Button from '../Button'
import Checkbox from '../Checkbox'

type SignInErrorsTypes = {
	detail: string
}

const SignIn = () => {
	const [error, setError] = useState<SignInErrorsTypes | null>(null)
	const modals = useModals()

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
			agreement: true
		},
		validate,
		onSubmit: values => {
			const value = {
				username: values.username,
				password: values.password
			}
			signIn(value).then(data => {
				if (data.detail) {
					setError(data)
				}
				modals?.setUserName(values.username)
				setTimeout(() => {
					modals?.SignInModalChangeVisibility(false)
				}, 2000)
			})
		}
	})
	return (
		<>
			<span className={style.form__title}>
				Будь-ласка, введіть дані свого облікового запису:
			</span>
			<form onSubmit={formik.handleSubmit} className={style.sign_in__form}>
				{modals?.userName ? (
					<span>Вы успешно вошли как {modals?.userName}</span>
				) : (
					<>
						<Input
							title='Логін*'
							error={error?.detail as string}
							type='text'
							handleChange={formik.handleChange}
							values={formik.values.username}
							name='username'
							// placeholder='Username *'
						/>
						<Input
							title='Пароль*'
							error={error?.detail as string}
							type='password'
							handleChange={formik.handleChange}
							values={formik.values.password}
							name='password'
							// placeholder='Password *'
						/>
						<Checkbox text='Запам’ятати мене' sideLink='Відновити пароль'/>
						<Button text='Увійти'/>
					</>
				)}
			</form>
		</>
	)
}

export default SignIn
