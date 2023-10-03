function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

const outCapitalizeFirstLetterBrand = (brand: string) => {
	const splitedBrandNamesArr = brand.split(' ')

	const brandNamesArr = splitedBrandNamesArr.map(
		item => item.charAt(0).toUpperCase() + item.slice(1)
	)

	return brandNamesArr.join(' ')
}

export { capitalizeFirstLetter, outCapitalizeFirstLetterBrand }
