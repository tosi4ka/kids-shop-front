interface validateTypes {
	username: string
	email?: string
	password: string
}

interface errorsTypes {
	username?: string
	email?: string
	password?: string
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

	return errors
}
