interface validateTypes {
	username?: string
	email?: string
	password: string
	agreement: boolean
	first_name?: string
	last_name?: string
	checkbox?: boolean
}

interface errorsTypes {
	username?: string
	email?: string
	password?: string
	agreement?: string
	first_name?: string
	last_name?: string
	checkbox?: string
}

export const validate = (values: validateTypes) => {
	const errors: errorsTypes = {}

	if ((values.email && values.password) !== undefined) {
		if (values.email === '' && values.password == '') {
			errors.email = "Обов'язково"
			errors.password = "Обов'язково"
		} else if (values.checkbox == false) {
			errors.checkbox = "Обов'язково"
		} else if (
			!/^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])$/i.test(
				values.email
			)
		) {
			errors.email = 'Не правильний email'
		} else if (values.password.length < 6) {
			errors.password = 'Пароль має містити не менше 6-х символів'
		} else if (values.password.length > 14) {
			errors.password = 'Пароль має містити не більше 14-х символів'
		} else if (values.email.length > 128) {
			errors.email = 'Занадто багато сиволів'
		} else {
			return true
		}
	}

	if (values.first_name !== undefined) {
		if (values.first_name.length < 2) {
			errors.password = "Ім'я має містити на менше 2-х символів"
		} else if (values.first_name.length >= 20) {
			errors.password = "Ім'я має містити менше 20-ти символів"
		}
	}

	if (values.last_name !== undefined) {
		if (values.last_name.length < 2) {
			errors.password = 'Призвіще має містити на менше 2-х символів'
		} else if (values.last_name.length >= 20) {
			errors.password = 'Призвіще має містити менше 20-ти символів'
		}
	}
	if (values.agreement !== undefined) {
		if (!values.agreement) {
			errors.agreement = 'Required'
		}
	}

	return errors
}
