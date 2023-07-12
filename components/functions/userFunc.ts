
interface RegistrationDataProps {
	username: string
	email?: string
	password: string
}

const registration = async (values: RegistrationDataProps) => {
	try {
		const response = await fetch('http://localhost:8000/api/auth/users/', {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		})
		if (!response.ok) {
			return response.json()
		}

		return response.json()
	} catch (error) {
		console.log(error)
	}
}

const signIn = async (values: RegistrationDataProps) => {
	try {
		const response = await fetch('http://localhost:8000/api/auth/jwt/create/', {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		if (!response.ok) {
			return response.json()
		}

		return response.json()
	} catch (error) {
		console.log(error)
	}
}

export { signIn, registration }
