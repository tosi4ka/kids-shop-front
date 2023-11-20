'use client'

import Endpoints from '@/api/endpoint'
import { IRootState } from '@/store'
import { getProfile } from '@/store/auth/actionCreators'
import axios from 'axios'
import { useFormik } from 'formik'
import Image from 'next/image'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import dump from '../../../../public/Profile/icon/dump.svg'
import { useAppDispatch } from '../../../../store'
import Button from '../../Button'
import ButtonPlus from '../../ButtonPlus'
import Input from '../../Input'
import DisplayInfo from '../DisplayInfo/DisplayInfo'
import InfoItem from '../InfoItem/InfoItem'
import TitleItem from '../TitleItems'
import style from './styles.module.scss'

const ContactsUser = () => {
	const [isActive, setIsActive] = useState(false)
	const handleClick = () => {
		setIsActive(!isActive)
		setIsActive(!isActivePlus)
	}
	const [isActivePlus, setIsActivePlus] = useState(false)
	const handleOnClick = () => {
		setIsActivePlus(!isActivePlus)
	}
	const dispatch = useAppDispatch()

	const profile = useSelector(
		(state: IRootState) => state.auth.profileData.profile
	)
	const token = useSelector((state: IRootState) => state.auth.authData.access)
	const userId = profile?.id
	const ContactsEmail = profile?.user.email
	const first_phone = '380' + profile?.first_phone
	const second_phone = '380' + profile?.second_phone

	let lenPhone = first_phone.length || second_phone.length
	let tt = first_phone.split('')
	let tt_sec = second_phone.split('')
	if (lenPhone == 12) {
		tt.splice(0, '', '+')
		tt.splice(4, '', ' ')
		tt.splice(7, '', ' ')
		tt.splice(11, '', ' ')
		tt.splice(14, '', ' ')
	}
	const FirstNumber = tt.join('')

	if (lenPhone == 12) {
		tt_sec.splice(0, '', '+')
		tt_sec.splice(4, '', ' ')
		tt_sec.splice(7, '', ' ')
		tt_sec.splice(11, '', ' ')
		tt_sec.splice(14, '', ' ')
	}
	const SecondPhone = tt_sec.join('')

	const [isDisplay, setIsDisplay] = useState('')
	const display = () => {
		if (profile?.second_phone == null) {
			setIsDisplay(isDisplay)
		} else {
			setIsDisplay(!isDisplay)
		}
	}

	const formik = useFormik({
		initialValues: {
			first_phone: '',
			second_phone: '',
			email: '',
			agreement: true
		},
		onSubmit: values => {
			if (isActivePlus === false) {
				const value = {
					first_phone: values.first_phone,
					email: values.email
				}

				setIsActive(!isActive)

				axios
					.patch(Endpoints.AUTH.PATCH + userId + '/', value, {
						headers: {
							Authorization: `Bearer ${token}`
						}
					})
					.then(response => {
						dispatch(getProfile())
					})
			} else {
				const value = {
					first_phone: values.first_phone,
					second_phone: values.second_phone,
					email: values.email
				}

				setIsActive(!isActive)

				axios
					.patch(Endpoints.AUTH.PATCH + userId + '/', value, {
						headers: {
							Authorization: `Bearer ${token}`
						}
					})
					.then(response => {
						dispatch(getProfile())
					})
			}
		}
	})
	return (
		<>
			<form className={style.cart}>
				<div className={style.wrapper__title}>
					<TitleItem label={'Контакти'} />
				</div>
				{!isActive ? (
					<>
						<div className={style.wrapper__info}>
							<div className={style.info__top}>
								<InfoItem label={'Телефон'} />
								<DisplayInfo ItemData={FirstNumber} />
							</div>
							{!isDisplay && (
								<div className={style.info__top}>
									<InfoItem label={'Телефон'} />
									<DisplayInfo ItemData={SecondPhone} />
								</div>
							)}
							<div className={style.info__top}>
								<InfoItem label={'Електронна пошта'} />
								<DisplayInfo ItemData={ContactsEmail} />
							</div>
						</div>
						<div className={style.wrapper__btn}>
							<Button text={'Змінити'} onClick={handleClick} />
						</div>
					</>
				) : (
					<>
						<div className={style.wrapper__info}>
							<div className={style.info__topPhone}>
								<Input
									title='Телефон'
									type={'tel'}
									handleChange={formik.handleChange}
									values={formik.values.first_phone}
									name='first_phone'
									placeholder={FirstNumber}
								/>
								<div className={style.dump}>
									<Image src={dump} alt='dump' />
								</div>
							</div>
							<div className={style.info__top}>
								<Input
									title='Електронна пошта'
									type={'email'}
									handleChange={formik.handleChange}
									values={formik.values.email}
									name='email'
									placeholder={ContactsEmail}
								/>
							</div>
						</div>
						{isActivePlus ? (
							<div className={style.addPhone__wrap}>
								<div className={style.plus__inputPhone}>
									<Input
										title='Додатковий телефон'
										type={'tel'}
										handleChange={formik.handleChange}
										values={formik.values.second_phone}
										name='second_phone'
										placeholder={SecondPhone}
									/>
									<div className={style.dump}>
										<Image src={dump} alt='dump' />
									</div>
								</div>
							</div>
						) : (
							<div className={style.wrapper__btnPlus}>
								<ButtonPlus onClick={handleOnClick} text={'Додати ще номер'} />
							</div>
						)}
						<div className={style.wrapper__btn}>
							<Button text={'Зберегти'} onClick={formik.handleSubmit} />
							<div className={style.btn__cancel}>
								<Button text={'Скасувати'} onClick={handleClick} />
							</div>
						</div>
					</>
				)}
			</form>
		</>
	)
}
export default ContactsUser
