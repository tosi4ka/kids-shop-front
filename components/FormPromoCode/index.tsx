import { useFormik } from 'formik'
import style from './style.module.scss'
import { Input } from '../Input'

interface FormPromoCodeTypes {
	placeholderText: string
    type: string
}

const FormPromoCode: React.FC<FormPromoCodeTypes> = props => {
	const formik = useFormik({
		initialValues: {
			text: ''
		},
		onSubmit: () => {}
	})
	return (
		<form onSubmit={formik.handleSubmit} className={style.sign_in__form}>
            <Input className='promo' placeholderText={props.placeholderText} type={props.type}/>
		</form>
	)
}

export default FormPromoCode
