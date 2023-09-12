interface validateTypes {
	email: string
	password: string
}

interface errorsTypes {
	email: string
	password: string
}

export const validate = (values: validateTypes) => {
	const errors: errorsTypes = {}
	if ((values.email && values.password) !== undefined) {
		if (values.email === '') {
			errors.email = "Обов'язково"
		} else if (values.password == '') {
			errors.password = "Обов'язково"
		} else if (
			!/^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])$/i.test(
				values.email
			)
		) {
			errors.email = 'Не правильний email'
		} else if (values.email.length > 128) {
			errors.email = 'Занадто багато сиволів'
		} else {
			return true
		}
	}

	return errors
}
