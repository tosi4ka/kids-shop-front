const getProducts = async () => {
	try {
		const response = await fetch('http://localhost:8000/api/top/', {
			method: 'GET',
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

export default getProducts