'use client'

import Endpoints from '@/api/endpoint'
import { IRootState } from '@/store'
import { getProfile } from '@/store/auth/actionCreators'
import axios from 'axios'
import { useFormik } from 'formik'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Arrow_down from '../../../../public/Profile/icon/Arrow__down.svg'
import Arrow_up from '../../../../public/Profile/icon/Arrow__up.svg'
import { useAppDispatch } from '../../../../store'
import Button from '../../Button'
import Input from '../../Input'
import SelectItem from '../../SelectItem'
import DisplayInfo from '../DisplayInfo/DisplayInfo'
import InfoItem from '../InfoItem/InfoItem'
import TitleItem from '../TitleItems'
import GenderInfo from './gender'
import style from './styles.module.scss'

const DataUser = () => {
	const [isActive, setIsActive] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [selected, setSelected] = useState('Оберіть')
	const dropdownRef = useRef<HTMLDivElement>(null)

	const handleFocus = () => {
		setIsOpen(ref => !ref)
	}
	const handleClickOutsideDropdown = (e: any) => {
		if (isOpen && !dropdownRef.current?.contains(e.target as Node)) {
			setIsOpen(false)
		}
	}
	window.addEventListener('click', handleClickOutsideDropdown)

	const handleClick = () => {
		setIsActive(!isActive)
	}

	const profile = useSelector(
		(state: IRootState) => state.auth.profileData.profile
	)
	const token = useSelector((state: IRootState) => state.auth.authData.access)
	const userId = profile?.id

	const first__name = profile?.first_name
	const last_name = profile?.last_name
	const middle_name = profile?.middle_name

	let date = new Date(profile?.birth_date).toLocaleDateString('ua', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	})
	const birth_date = date

	const dispatch = useAppDispatch()

	const formik = useFormik({
		initialValues: {
			middle_name: '',
			first_name: '',
			last_name: '',
			birth_date: '',
			gender: '',
			token: '',
			agreement: true
		},
		onSubmit: values => {
			const year = new Date(values.birth_date).getFullYear()
			const month = new Date(values.birth_date).getMonth()
			const day = new Date(values.birth_date).getDay()
			const birth__date = day + '/' + month + '/' + year
			const value = {
				middle_name: values.middle_name,
				first_name: values.first_name,
				last_name: values.last_name,
				birth_date: birth__date,
				gender: values.gender
			}
			console.log(year)
			const verify = { token: token }
			console.log(value)
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
			<div className={style.cart}>
				<div className={style.wrapper__title}>
					<TitleItem label={'Особисті данні'} />
				</div>
				{!isActive ? (
					<>
						<div className={style.wrapper__info}>
							<div className={style.info__top}>
								<InfoItem label={'Прізвище'} />
								<DisplayInfo ItemData={last_name} />
							</div>
							<div className={style.info__top}>
								<InfoItem label={"Ім'я"} />
								<DisplayInfo ItemData={first__name} />
							</div>
							<div className={style.info__top}>
								<InfoItem label={'По батькові'} />
								<DisplayInfo ItemData={middle_name} />
							</div>
							<div>
								<InfoItem label={'Дата народження'} />
								<DisplayInfo ItemData={birth_date} />
							</div>
							<div>
								<InfoItem label={'Стать'} />
								<GenderInfo ItemData={profile?.gender} />
							</div>
						</div>
						<div className={style.wrapper__btn}>
							<Button text={'Змінити'} onClick={handleClick} />
						</div>
					</>
				) : (
					<>
						<div className={style.wrapper__info}>
							<div className={style.info__top}>
								<Input
									title={'Прізвище'}
									error={formik.errors.last_name as string}
									type={'string'}
									handleChange={formik.handleChange}
									values={formik.values.last_name}
									name={'last_name'}
								/>
							</div>
							<div className={style.info__top}>
								<Input
									title={"Ім'я"}
									error={formik.errors.first_name as string}
									type={'string'}
									handleChange={formik.handleChange}
									values={formik.values.first_name}
									name={'first_name'}
								/>
							</div>
							<div className={style.info__top}>
								<Input
									title={'По батькові'}
									error={formik.errors.first_name as string}
									type={'string'}
									handleChange={formik.handleChange}
									values={formik.values.middle_name}
									name={'middle_name'}
								/>
							</div>
							<div>
								<Input
									title={'Дата народження'}
									error={formik.errors.date as string}
									type={'date'}
									handleChange={formik.handleChange}
									values={formik.values.birth_date}
									name={'birth_date'}
								/>
							</div>
							<div className={style.info__bottom}>
								<div className={style.select}>
									<div className={style.select__title}>
										<InfoItem label={'Стать'} />
									</div>
									<div
										onClick={handleFocus}
										ref={dropdownRef}
										className={
											!isOpen ? style.selectBtn__default : style.selectBtn__open
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
													formik.values.gender = 'Man'
												}}
											>
												<SelectItem text={'Чоловіча'} />
											</div>
											<div
												className={style.select__itemBottom}
												onClick={() => {
													setSelected('Жіноча')
													setIsOpen(false)
													formik.values.gender = 'Woman'
												}}
											>
												<SelectItem text={'Жіноча'} />
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
						<div className={style.wrapper__btn}>
							<Button text={'Зберегти'} onClick={formik.handleSubmit} />
							<div className={style.btn__cancel}>
								<Button text={'Скасувати'} onClick={handleClick} />
							</div>
						</div>
					</>
				)}
			</div>
		</>
	)
}
export default DataUser
