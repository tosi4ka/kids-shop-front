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

import Image from 'next/image'
import img__eye from '../../../public/icons/Eye.svg'
import img__eyeClick from '../../../public/icons/Eye__click.svg'

type SignInErrorsTypes = {
	email: string[]
	username?: string[]
	password: string
}

const RegistrationModal = () => {
	const [error, setError] = useState<SignInErrorsTypes | null>(null)
	const [successRef, setSuccessRef] = useState(false)
	const modals = useModals()

	const [passwordShown, setPasswordShown] = useState(false)
	const togglePassword = () => {
		setPasswordShown(!passwordShown)
	}

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

	// const handleChange = () => {
	// 	this.props.onChange({ checked: !this.props.checked })
	// }
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
					<span className={style.form__title}>Я хочу аккаунт</span>
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
						<div className={style.pass__wrap}>
							<Input
								error={
									(formik.errors.password as string) || (error?.password as any)
								}
								handleChange={formik.handleChange}
								name='password'
								title='Пароль *'
								type={passwordShown ? 'text' : 'password'}
								values={formik.values.password}
							/>
							<Image
								src={passwordShown ? img__eyeClick : img__eye}
								alt='eye'
								onClick={togglePassword}
								className={style.eye__button}
							/>
						</div>

						<div className={style.register__checkbox}>
							<Checkbox
								id='rules'
								text={
									<>
										*Погоджуюсь з правилами магазину.{' '}
										<Link href='#'>правилами магазину</Link>
									</>
								}
							/>
							<Checkbox
								text={
									<>
										Хочу отримувати комерційні пропозиції магазину Lama на
										вказаний вище email.
									</>
								}
								id=''
							/>
							<div className={style.registration__button}>
								<Button text='Зареєструватися' />
							</div>
						</div>
					</form>
				</>
			)}
		</>
	)
}

export default RegistrationModal
