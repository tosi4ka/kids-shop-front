'use client'

import { useFormik } from 'formik'
import { useState } from 'react'

import style from './style.module.scss'
import { validate } from '@/components/functions/validate'
import { signIn } from '@/components/functions'
import { useModals } from '@/context/ModalsProvider'

type SignInErrorsTypes = {
	detail: string
}

const SignIn = () => {
	const [error, setError] = useState<SignInErrorsTypes | null>(null)
	const modals = useModals()

	const handleCloseModal = () => {
		modals?.SignInModalChangeVisibility
			? modals?.SignInModalChangeVisibility(false)
			: modals?.RegistrationModalChangeVisibility(false)
	}

	const formik = useFormik({
		initialValues: {
			username: '',
			password: ''
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
			})
		}
	})
	return (
		<div className={style.main}>
			<form
				onSubmit={formik.handleSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '10px'
				}}
			>
				<div>
					<input
						type='text'
						onChange={formik.handleChange}
						value={formik.values.username}
						name='username'
						placeholder='Username *'
					/>
				</div>
				<div>
					<input
						type='password'
						onChange={formik.handleChange}
						value={formik.values.password}
						name='password'
						placeholder='Password *'
					/>
				</div>
				{error?.detail ? <span>{error.detail}</span> : null}
				<button type='submit'>Отправить</button>
				<div onClick={handleCloseModal} className={style.btn_close}>
					X
				</div>
			</form>
		</div>
	)
}

export default SignIn
