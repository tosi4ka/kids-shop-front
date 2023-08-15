'use client'

import { useFormik } from 'formik'
import { signIn } from 'next-auth/react'
import { FormEventHandler, useState } from 'react'

import { validate } from '@/components/functions/validate'
import { useModals } from '@/context/ModalsProvider'
import Button from '../Button'
import Checkbox from '../Checkbox'
import { FacebookButton } from '../FacebookSignIn'
import { GoogleButton } from '../GoogleSignIn'
import Input from '../Input'
import style from './style.module.scss'

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
		onSubmit: () => {}
	})

	const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)

		const res = await signIn('credentials', {
			username: formData.get('username'),
			password: formData.get('password'),
			redirect: false
		})

		if (res && !res.error) {
			// router.push('/profile')                         // работает но пока нето имя выводит
			modals?.setUserName(''),
				setTimeout(() => {
					modals?.SignInModalChangeVisibility(false)
				}, 0)
		} else {
			console.log(res)
		}
	}

	return (
		<>
			<span className={style.form__title}>
				Будь-ласка, введіть дані свого облікового запису:
			</span>
			<form onSubmit={handleSubmit} className={style.sign_in__form}>
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
						<Checkbox text='Запам’ятати мене' sideLink='Відновити пароль' />
						<Button text='Увійти' />
					</>
				)}
			</form>
			<div className={style.social__sign_in}>
				<span className={style.social__title}>або за допомогою</span>
				<div className={style.social__button}>
					<FacebookButton />
					<GoogleButton />
				</div>
			</div>
		</>
	)
}

export default SignIn
