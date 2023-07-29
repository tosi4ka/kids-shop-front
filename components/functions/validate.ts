interface validateTypes {
	username: string
	email?: string
	password: string
	agreement: boolean
	first_name?: string
	last_name?: string
}

interface errorsTypes {
	username?: string
	email?: string
	password?: string
	agreement?: string
	first_name?: string
	last_name?: string
}

export const validate = (values: validateTypes) => {
	const errors: errorsTypes = {}

	if (values.username !== undefined) {
		if (values.username === '') {
			errors.username = "Обов'язково"
		}
	}
	if (values.email !== undefined) {
		if (values.email === '') {
			errors.email = "Обов'язково"
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Не правильний email'
		}
	}
	if (values.password !== undefined) {
		if (values.password === '') {
			errors.password = "Обов'язково"
		} else if (values.password.length === 0) {
			errors.password = 'Пароль має містити хоча б один символ'
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
			errors.password = "Призвіще має містити на менше 2-х символів"
		} else if (values.last_name.length >= 20) {
			errors.password = "Призвіще має містити менше 20-ти символів"
		}
	}
	if (values.agreement !== undefined) {
		if (!values.agreement) {
			errors.agreement = 'Required'
		}
	}

	return errors
}
