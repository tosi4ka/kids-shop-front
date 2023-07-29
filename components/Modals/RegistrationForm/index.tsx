'use client'

import { useFormik } from 'formik'

import style from './style.module.scss'
import { registration } from '../../functions'
import { validate } from '../../functions/validate'
import { useModals } from '@/context/ModalsProvider'
import { useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Link from 'next/link'

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
			console.log(values)
			const value = {
				username: formik.values.username,
				email: formik.values.email,
				password: formik.values.password
			}
			registration(value).then(data => {
				if (!data.id) {
					console.log(data)
					setError(data)
					return
				}
				setSuccessRef(true)
				console.log(data)
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
					<span className={style.form__title}>
						Будь-ласка, заповніть усі поля нижче:
					</span>
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
							values={formik.values.username}
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
						<Input
							error={formik.errors.first_name as string}
							handleChange={formik.handleChange}
							name='first_name'
							title='Ім’я'
							type='text'
							values={formik.values.first_name as string}
						/>
						<Input
							error={formik.errors.last_name as string}
							handleChange={formik.handleChange}
							name='last_name'
							title='Прізвище '
							type='text'
							values={formik.values.last_name as string}
						/>
						<Checkbox
							text={
								<>
									*Реєструючись, я приймаю умови публічної <Link href="#">оферти</Link> та надаю згоду
									на <Link href="#">обробку персональних даних.</Link>
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
