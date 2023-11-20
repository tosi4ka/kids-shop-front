'use client'

import Endpoints from '@/api/endpoint'
import { IRootState, useAppDispatch } from '@/store'
import { getProfile } from '@/store/auth/actionCreators'
import axios from 'axios'
import { useFormik } from 'formik'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Arrow_down from '../../../../public/Profile/icon/Arrow__down.svg'
import Arrow_up from '../../../../public/Profile/icon/Arrow__up.svg'
import Button from '../../Button'
import ButtonPlus from '../../ButtonPlus'
import Input from '../../Input'
import SelectItem from '../../SelectItem'
import TextItem from '../../textItem'
import InfoItem from '../InfoItem/InfoItem'
import TitleItem from '../TitleItems'
import style from './styles.module.scss'

const AddressUser = () => {
	const profile = useSelector(
		(state: IRootState) => state.auth.profileData.profile
	)
	const token = useSelector((state: IRootState) => state.auth.authData.access)
	const userId = profile?.id
	const dispatch = useAppDispatch()
	const [isActivePlus, setIsActivePlus] = useState(false)
	const [isActive, setIsActive] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [selected, setSelected] = useState('Оберіть')
	const dropdownRef = useRef<HTMLDivElement>(null)
	const handleOnClick = () => {
		setIsActivePlus(!isActivePlus)
	}

	const handleClick = () => {
		setIsActive(!isActive)
	}

	const handleFocus = () => {
		setIsOpen(ref => !ref)
	}
	const handleClickOutsideDropdown = (e: any) => {
		if (isOpen && !dropdownRef.current?.contains(e.target as Node)) {
			setIsOpen(false)
		}
	}
	window.addEventListener('click', handleClickOutsideDropdown)
	console.log(profile)

	const formik = useFormik({
		initialValues: {
			male: '',
			birth_date: '',
			agreement: true
		},
		onSubmit: values => {
			const kids = [
				{
					male: values.male,
					birth_date: values.birth_date
				}
			]
			const value = {
				kids
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
	})
	return (
		<>
			<form className={style.cart}>
				<div className={style.wrapper__title}>
					<TitleItem label={'Діти'} />
				</div>
				{isActivePlus ? (
					<>
						<div className={style.cart__child}>
							<div className={style.Child}>
								<div className={style.info__bottom}>
									<div className={style.select}>
										<div className={style.select__title}>
											<InfoItem label={'Стать'} />
										</div>
										<div
											onClick={handleFocus}
											ref={dropdownRef}
											className={
												!isOpen
													? style.selectBtn__default
													: style.selectBtn__open
											}
										>
											{selected}
											{!isOpen ? (
												<Image src={Arrow_down} alt={'down'} />
											) : (
												<Image src={Arrow_up} alt={'up'} />
											)}
										</div>
										{isOpen && (
											<div className={style.select__menu}>
												<div
													className={style.select__itemTop}
													onClick={() => {
														setSelected('Чоловіча')
														setIsOpen(false)
														formik.values.male = 'Male'
													}}
												>
													<SelectItem text={'Чоловіча'} />
												</div>
												<div
													className={style.select__itemBottom}
													onClick={() => {
														setSelected('Жіноча')
														setIsOpen(false)
														formik.values.male = 'woman'
													}}
												>
													<SelectItem text={'Жіноча'} />
												</div>
											</div>
										)}
									</div>
								</div>
								<Input
									title='Дата народження'
									type={'date'}
									handleChange={formik.handleChange}
									values={formik.values.birth_date}
									name='birth_date'
								/>
								<div className={style.delate__btn}>
									<TextItem label={'Видалити інформацію'} />
								</div>
							</div>
						</div>
						{!isActive ? (
							<div className={style.wrapper__btnPlusTwo}>
								<ButtonPlus onClick={handleClick} text={'Додати ще номер'} />
							</div>
						) : (
							<>
								<div className={style.cart__child}>
									<div className={style.Child}>
										<div className={style.info__bottom}>
											<div className={style.select}>
												<div className={style.select__title}>
													<InfoItem label={'Стать'} />
												</div>
												<div
													onClick={handleFocus}
													ref={dropdownRef}
													className={
														!isOpen
															? style.selectBtn__default
															: style.selectBtn__open
													}
												>
													{selected}
													{!isOpen ? (
														<Image src={Arrow_down} alt={'down'} />
													) : (
														<Image src={Arrow_up} alt={'up'} />
													)}
												</div>
												{isOpen && (
													<div className={style.select__menu}>
														<div
															className={style.select__itemTop}
															onClick={() => {
																setSelected('Чоловіча')
																setIsOpen(false)
																formik.values.gender = 'man'
															}}
														>
															<SelectItem text={'Чоловіча'} />
														</div>
														<div
															className={style.select__itemBottom}
															onClick={() => {
																setSelected('Жіноча')
																setIsOpen(false)
																formik.values.gender = 'woman'
															}}
														>
															<SelectItem text={'Жіноча'} />
														</div>
													</div>
												)}
											</div>
										</div>
										<Input
											title='Дата народження'
											type={'date'}
											handleChange={formik.handleChange}
											values={formik.values.birth_date}
											name='birth_date'
										/>
										<div className={style.delate__btn}>
											<TextItem label={'Видалити інформацію'} />
										</div>
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
			</form>
		</>
	)
}
export default AddressUser
