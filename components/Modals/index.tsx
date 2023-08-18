import { useModals } from '@/context/ModalsProvider'
import { useEffect, useState } from 'react'
import RegistrationForm from './RegistrationForm'
import SignInForm from './SignInForm'
import style from './styles.module.scss'

type ClickEvent = React.MouseEvent<HTMLDivElement>

const SignInModal = () => {
	const [activeTab, setActiveTab] = useState('Вхід')

	const data = useModals()

	const handleClose = () => {
		data?.SignInModalChangeVisibility(false)
	}

	const handleToogleTabs = (event: ClickEvent) => {
		const target = event.target as HTMLDivElement
		setActiveTab(target?.textContent as string)
	}

	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (data?.signIn) {
				if (e.key === 'Escape') {
					data?.SignInModalChangeVisibility(false)
				}
			}
		}
		const handleClick = (e: MouseEvent) => {
			if (data?.signIn) {
				const target = e.target as HTMLElement
				const modal = target.getAttribute('data-attr')
				if (modal === 'modal') data?.SignInModalChangeVisibility(false)
			}
		}
		window.addEventListener('keydown', handleKeyPress)
		window.addEventListener('click', handleClick)
		return () => {
			window.removeEventListener('keydown', handleKeyPress)
		}
	}, [data?.signIn])

	return (
		<>
			<div
				className={`${data?.signIn ? style.modal_background : style.hide}`}
				data-attr='modal'
			></div>
			<div
				className={`${style.sign_in_modal} 
                ${data?.signIn ? style.sign_in_modal_open : ''}
                `}
			>
				{/* <div className={style.modal__header}>
					<span className={style.header_title}>Авторизація</span>
					<svg
						width='32'
						height='32'
						viewBox='0 0 32 32'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={style.modal__close_icon}
						onClick={handleClose}
					>
						<g opacity='0.3'>
							<path
								d='M23 23L9 9M23 9L9 23'
								stroke='black'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</g>
					</svg>
				</div> */}
				<div className={style.modal__tabs}>
					<div className={style.modal__tabs_wrapper}>
						<div
							className={`${style.modal__tab} ${
								activeTab === 'Вхід' ? style.modal__tab_active : ''
							} `}
							onClick={handleToogleTabs}
						>
							Вхід
							{/* <div
								className={`${style.tab_underline} ${
									activeTab === 'Вхід' ? style.tab_underline_active : ''
								}`}
							></div> */}
						</div>
						<div
							className={`${style.modal__tab} ${
								activeTab === 'Реєстрація' ? style.modal__tab_active : ''
							} `}
							onClick={handleToogleTabs}
						>
							Реєстрація
							{/* <div
								className={`${style.tab_underline} ${
									activeTab === 'Реєстрація' ? style.tab_underline_active : ''
								}`}
							></div> */}
						</div>
					</div>
				</div>
				<div className={style.form_wrapper}>
					{activeTab === 'Вхід' ? <SignInForm /> : null}
					{activeTab === 'Реєстрація' ? <RegistrationForm /> : null}
				</div>
			</div>
		</>
	)
}

export default SignInModal
