'use client'

import { useFormik } from 'formik'

import style from './style.module.scss'
import { registration } from '../../functions'
import { validate } from '../../functions/validate'
import { useModals } from '@/context/ModalsProvider'

const RegistrationModal = () => {
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
			registration(value)
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
						type='email'
						onChange={formik.handleChange}
						value={formik.values.email}
						id='email'
						name='email'
						placeholder='Email *'
					/>
					{formik.errors.email ? <span>{formik.errors.email}</span> : null}
				</div>
				<div>
					<input
						type='text'
						onChange={formik.handleChange}
						value={formik.values.username}
						id='username'
						name='username'
						placeholder='Username *'
					/>
					{formik.errors.username ? (
						<span>{formik.errors.username}</span>
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
		</div>
	)
}

export default RegistrationModal
