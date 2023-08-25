'use client'

import { useFormik } from 'formik'

import { useModals } from '@/context/ModalsProvider'
import Link from 'next/link'
import { useState } from 'react'
import { registration } from '../../functions'
import { validate } from '../../functions/validate'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Input from '../Input'
import style from './style.module.scss'

type SignInErrorsTypes = {
	email: string[]
	username?: string[]
	password: string
}

const RegistrationModal = () => {
	const [error, setError] = useState<SignInErrorsTypes | null>(null)
	const [successRef, setSuccessRef] = useState(false)
	const modals = useModals()

	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: '',
			agreement: true
		},
		validate,
		onSubmit: values => {
			const value = {
				username: formik.values.username,
				email: formik.values.email,
				password: formik.values.password
			}
			registration(value).then(data => {
				if (!data.id) {
					setError(data)
					return
				}
				setSuccessRef(true)
			})
		}
	})
	return (
		<>
			{successRef ? (
				<span>
					Вы успешно зарегестрировались. <br />
					Мы отправили Вам на указанную почту {formik.values.email} письмо с
					подтверждение регистрации.
				</span>
			) : (
				<>
					<span className={style.form__title}>Я тут новенький</span>
					<form
						onSubmit={formik.handleSubmit}
						className={style.registration__form}
					>
						<Input
							error={(formik.errors.email as string) || (error?.email as any)}
							handleChange={formik.handleChange}
							name='email'
							title='Електронна пошта *'
							type='email'
							values={formik.values.email as string}
						/>
						<Input
							error={
								(formik.errors.username as string) || (error?.username as any)
							}
							handleChange={formik.handleChange}
							name='username'
							title='Логін *'
							type='text'
							values={formik.values.username as string}
						/>
						<Input
							error={
								(formik.errors.password as string) || (error?.password as any)
							}
							handleChange={formik.handleChange}
							name='password'
							title='Пароль *'
							type='password'
							values={formik.values.password}
						/>
						<Checkbox
							text={
								<>
									*Погоджуюсь з <Link href='#'>правилами магазину</Link>
								</>
							}
						/>
						<Checkbox
							text={
								<>
									*Хочу отримувати комерційні пропозиції магазину Lama на
									вказаний вище email.
								</>
							}
						/>
						<Button text='Зареєструватися' />
					</form>
				</>
			)}
		</>
	)
}

export default RegistrationModal
