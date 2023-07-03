'use client';

import styles from './page.module.css';
import { useFormik } from 'formik';
import postData from '@/components/functions';

export default function Home() {
	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: '',
		},
		validate,
		onSubmit: (values) => {
			console.log(values);
			const value = {
				username: formik.values.username,
				email: formik.values.email,
				password: formik.values.password,
			};
			// console.log(value);
			postData(value, 'http://localhost:8000/api/auth/users/');
		},
	});
	return (
		<main className={styles.main}>
			<form
				onSubmit={formik.handleSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
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
					{formik.errors.email ? (
						<span>{formik.errors.email}</span>
					) : null}
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
						id='first_name'
						name='first_name'
						placeholder='First Name *'
					/>
				</div>
				<div>
					<input
						type='password'
						id='last_name'
						name='last_name'
						placeholder='Last Name *'
					/>
				</div>
				<button type='submit'>Отправить</button>
			</form>
		</main>
	);
}
interface validateTypes {
	username: string;
	email: string;
	password: string;
}

interface errorsTypes {
	username?: string;
	email?: string;
	password?: string;
}

export const validate = (values: validateTypes) => {
	const errors: errorsTypes = {};
	console.log('work');

	if (values.username !== undefined) {
		if (values.username === '') {
			errors.username = "Обов'язково";
		}
	}
	if (values.email !== undefined) {
		if (values.email === '') {
			errors.email = "Обов'язково";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Не правильний email';
		}
	}
	if (values.password !== undefined) {
		if (values.password === '') {
			errors.password = "Обов'язково";
		} else if (values.password.length === 0) {
			errors.password = 'Пароль має містити хоча б один символ';
		}
	}

	return errors;
};
