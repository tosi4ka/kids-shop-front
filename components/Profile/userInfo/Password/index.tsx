'use client'

import { useFormik } from 'formik'
import Input from './InputPass/index'
import style from './styles.module.scss'

const AddressUser = () => {
	const formik = useFormik({
		initialValues: {
			gender: '',
			gender_second: '',
			date: '',
			date_second: '',
			agreement: true
		},
		onSubmit: values => {
			const value = {
				city: values.gender,
				city_second: values.gender,
				street: values.date,
				street_second: values.date
			}
		}
	})
	return (
		<>
			<form className={style.cart}>
				<Input
					type={'string'}
					handleChange={formik.handleChange}
					name='string'
				/>
			</form>
		</>
	)
}
export default AddressUser
