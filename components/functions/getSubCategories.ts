const getSubCategories = async (category: string) => {
	try {
		const response = await fetch(`http://localhost:8000/api/section/?category__name=${category}`, {
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

export default getSubCategories