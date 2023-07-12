'use client'

import { useFormik } from 'formik'

import style from './style.module.scss'
import { registration } from '../../functions'
import { validate } from '../../functions/validate'
import { useModals } from '@/context/ModalsProvider'
import { useState } from 'react'

type SignInErrorsTypes = {
	email: string[]
	username?: string[]
}

const RegistrationModal = () => {
	const [error, setError] = useState<SignInErrorsTypes | null>(null)
	const [successRef, setSuccessRef] = useState(false)
	const modals = useModals()

	const handleCloseModal = () => {
		modals?.RegistrationModalChangeVisibility
			? modals?.RegistrationModalChangeVisibility(false)
			: modals?.SignInModalChangeVisibility(false)
	}

	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: ''
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
				setTimeout(() => {
					modals?.RegistrationModalChangeVisibility(false)
				}, 3000)
			})
		}
	})
	return (
		<div className={style.main}>
			{successRef ? (
				<span>
					Вы успешно зарегестрировались. <br />
					Мы отправили Вам на указанную почту {formik.values.email} письмо с подтверждение регестрации.
				</span>
			) : (
				<form
					onSubmit={formik.handleSubmit}
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '10px'
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							color: 'red',
							fontSize: '12px'
						}}
					>
						<input
							type='email'
							onChange={formik.handleChange}
							value={formik.values.email}
							id='email'
							name='email'
							placeholder='Email *'
						/>
						{formik.errors.email || error?.email ? (
							<span>{formik.errors.email || error?.email}</span>
						) : null}
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							color: 'red',
							fontSize: '12px'
						}}
					>
						<input
							type='text'
							onChange={formik.handleChange}
							value={formik.values.username}
							id='username'
							name='username'
							placeholder='Username *'
						/>
						{formik.errors.username || error?.username ? (
							<span>{formik.errors.username || error?.username}</span>
						) : null}
					</div>
					<div>
						<input
							type='password'
							onChange={formik.handleChange}
							value={formik.values.password}
							id='password'
							name='password'
							placeholder='Password *'
						/>
						{formik.errors.password ? (
							<span>{formik.errors.password}</span>
						) : null}
					</div>
					<div>
						<input
							type='text'
							id='first_name'
							name='first_name'
							placeholder='First Name'
						/>
					</div>
					<div>
						<input
							type='text'
							id='last_name'
							name='last_name'
							placeholder='Last Name'
						/>
					</div>
					<button type='submit'>Отправить</button>
					<div onClick={handleCloseModal} className={style.btn_close}>
						X
					</div>
				</form>
			)}
		</div>
	)
}

export default RegistrationModal
