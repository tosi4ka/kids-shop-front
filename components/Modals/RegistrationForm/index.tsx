'use client'

import { useFormik } from 'formik'
import Link from 'next/link'

import { useModals } from '@/context/ModalsProvider'
import { useRef, useState } from 'react'
import { registration } from '../../functions'
import { validate } from '../../functions/validate'
import Checkbox from '../Checkbox'
import Input from '../Input'
import style from './style.module.scss'

import Image from 'next/image'
import img__eye from '../../../public/icons/Eye.svg'
import img__eyeClick from '../../../public/icons/Eye__click.svg'
import Button from '../Button'

type SignInErrorsTypes = {
	email: string[]
	username?: string[]
	password: string
}

const RegistrationModal = () => {
	const [error, setError] = useState<SignInErrorsTypes | null>(null)
	const [successRef, setSuccessRef] = useState(false)
	const [checked, setChecked] = useState(false)
	const [passwordShown, setPasswordShown] = useState(false)
	const [isButtonDisabled, setIsButtonDisabled] = useState(true)
	const buttonRef = useRef(null)

	const togglePassword = () => {
		setPasswordShown(!passwordShown)
	}

	const handleChange = () => {
		setChecked(!checked)
	}

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			agreement: true
		},
		validate,
		onSubmit: values => {
			const value = {
				email: formik.values.email,
				password: formik.values.password
			}
			console.log(values.checkbox)
			registration(value).then(data => {
				if (!data.id) {
					return setError(data)
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
								className={passwordShown ? style.eye__open : style.eye__close}
							/>
						</div>
						<div className={style.regis__check}>
							<Checkbox
								id='conditions'
								onClick={handleChange}
								text={
									<>
										*Погоджуюсь з <Link href='#'>правилами магазину</Link>
									</>
								}
							/>
							<Checkbox
								id='newsletter'
								text={
									<>
										*Хочу отримувати комерційні пропозиції магазину Lama на
										вказаний вище email.
									</>
								}
							/>
						</div>
						<Button
							text='Зареєструватися'
							disabled={
								(true ? !checked : checked) || !(formik.dirty && formik.isValid)
							}
						/>
					</form>
				</>
			)}
		</>
	)
}

export default RegistrationModal
