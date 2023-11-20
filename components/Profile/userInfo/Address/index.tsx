'use client'

import Endpoints from '@/api/endpoint'
import { IRootState, useAppDispatch } from '@/store'
import { getProfile } from '@/store/auth/actionCreators'
import axios from 'axios'
import { useFormik } from 'formik'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import dump from '../../../../public/Profile/icon/dump.svg'
import Button from '../../Button'
import ButtonPlus from '../../ButtonPlus'
import Input from '../../Input'
import DisplayInfo from '../DisplayInfo/DisplayInfo'
import InfoItem from '../InfoItem/InfoItem'
import TitleItem from '../TitleItems'
import style from './styles.module.scss'

const AddressUser = () => {
	const profile = useSelector(
		(state: IRootState) => state.auth.profileData.profile
	)

	const [isActivePlus, setIsActivePlus] = useState(false)
	const handleOnClick = () => {
		setIsActivePlus(!isActivePlus)
	}

	const [isActive, setIsActive] = useState(false)
	const handleClick = () => {
		setIsActive(!isActive)
	}

	const [isDisplay, setIsDisplay] = useState()

	useEffect(() => {
		if (profile?.address.city == 'Your City') {
			setIsDisplay(true)
		} else {
			setIsDisplay(false)
		}
	})

	const [isDisplayPlus, setIsDisplayPlus] = useState()
	useEffect(() => {
		if (profile?.address.city == 'Lvov') {
			setIsDisplayPlus(true)
		} else {
			setIsDisplayPlus(false)
		}
	})

	const handleShow = () => {
		setIsActive(!isDisplay)
	}

	const token = useSelector((state: IRootState) => state.auth.authData.access)
	const userId = profile?.id
	const dispatch = useAppDispatch()

	const first_address =
		'м.' +
		profile?.address.city +
		', ' +
		'вул.' +
		profile?.address.street +
		', ' +
		profile?.address.building +
		', ' +
		'кв.' +
		profile?.address.apartment

	const formik = useFormik({
		initialValues: {
			city: '',
			city_second: '',
			street: '',
			street_second: '',
			building: '',
			house_second: '',
			apartment: '',
			apartment_second: '',
			agreement: true
		},
		onSubmit: values => {
			const address = {
				city: values.city,
				city_second: values.city,
				street: values.street,
				street_second: values.street,
				building: values.building,
				house_second: values.building,
				apartment: values.apartment,
				apartment_second: values.apartment
			}
			const value = {
				address
			}
			const verify = { token: token }
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
	})
	return (
		<>
			<form className={style.cart}>
				<div className={style.wrapper__title}>
					<TitleItem label={'Адреса доставки'} />
				</div>
				{isDisplay ? (
					<>
						{isActivePlus ? (
							<>
								<div className={style.cart__address}>
									<div className={style.firstAddress}>
										<Input
											title='Місто'
											type={'string'}
											handleChange={formik.handleChange}
											values={formik.values.city}
											name='city'
										/>
										<Input
											title='Вулиця'
											type={'string'}
											handleChange={formik.handleChange}
											values={formik.values.street}
											name='street'
										/>
										<Input
											title='Будинок'
											type={'any'}
											handleChange={formik.handleChange}
											values={formik.values.building}
											name='building'
										/>
										<Input
											title='Квартира'
											type={'any'}
											handleChange={formik.handleChange}
											values={formik.values.apartment}
											name='apartment'
										/>
									</div>
									<div className={style.dump__btn}>
										<Image src={dump} alt='dump' className={style.dump__img} />
									</div>
								</div>
								{!isActive ? (
									<div className={style.wrapper__btnPlus}>
										<ButtonPlus
											onClick={handleClick}
											text={'Додати ще номер'}
										/>
									</div>
								) : (
									<>
										<div className={style.cart__address}>
											<div className={style.secondAddress}>
												<Input
													title='Місто'
													type={'string'}
													handleChange={formik.handleChange}
													values={formik.values.city_second}
													name='city'
												/>
												<Input
													title='Вулиця'
													type={'string'}
													handleChange={formik.handleChange}
													values={formik.values.street_second}
													name='street'
												/>
												<Input
													title='Будинок'
													type={'any'}
													handleChange={formik.handleChange}
													values={formik.values.house_second}
													name='house'
												/>
												<Input
													title='Квартира'
													type={'any'}
													handleChange={formik.handleChange}
													values={formik.values.apartment_second}
													name='apartment'
												/>
											</div>
											<div className={style.dump__btn}>
												<Image src={dump} alt='dump' />
											</div>
										</div>
									</>
								)}
								<div className={style.wrapper__btn}>
									<Button text={'Зберегти'} onClick={formik.handleSubmit} />
									<div className={style.btn__cancel}>
										<Button text={'Скасувати'} onClick={handleClick} />
									</div>
								</div>
							</>
						) : (
							<div className={style.wrapper__btnPlus}>
								<ButtonPlus onClick={handleOnClick} text={'Додати ще номер'} />
							</div>
						)}
					</>
				) : (
					<>
						<div className={style.cart__display}>
							<div className={style.displayFirst}>
								<InfoItem label={'Адреса за замовчуванням'} />
								<DisplayInfo ItemData={first_address} />
							</div>
							{!isDisplayPlus && (
								<div className={style.displayFirst}>
									<InfoItem label={'Адреса за замовчуванням'} />
									<DisplayInfo ItemData={first_address} />
								</div>
							)}
							<div className={style.btn__change}>
								<Button text={'Змінити'} onClick={handleShow} />
							</div>
						</div>
					</>
				)}
			</form>
		</>
	)
}
export default AddressUser
