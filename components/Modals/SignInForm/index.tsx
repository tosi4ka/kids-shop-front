'use client'

import { useFormik } from 'formik'
import { signIn } from 'next-auth/react'
import { FormEventHandler, Suspense, useState } from 'react'

import { validate } from '@/components/functions/validate'
import { useModals } from '@/context/ModalsProvider'

import Button from '../Button'
import Checkbox from '../Checkbox'
import { FacebookButton } from '../FacebookSignIn'
import { GoogleButton } from '../GoogleSignIn'
import Input from '../FormInput'
import style from './style.module.scss'

import Image from 'next/image'
import img__eye from '../../../public/icons/Eye.svg'
import img__eyeClick from '../../../public/icons/Eye__click.svg'

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
			// router.push('/profile')
			modals?.setUserName(formData.get('email') as string),
				setTimeout(() => {
					modals?.SignInModalChangeVisibility(false)
				}, 2000)
		} else {
			setError(res as any)
		}
	}

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
							id='rules'
							text='Запам’ятати мене'
							sideLink='Відновити пароль'
						/>
						<Button text='Увійти' />
						<div className={style.social__sign_in}>
							<span className={style.social__title}>або за допомогою</span>
							<div className={style.social__button}>
								<Suspense fallback="as">
									<FacebookButton />
									<GoogleButton />
								</Suspense>
							</div>
						</div>
					</>
				)}
			</form>
		</>
	)
}

export default SignIn
