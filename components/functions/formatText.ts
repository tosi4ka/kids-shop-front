export function outProductsTextByCount(number: number) {
	const remainder10 = number % 10
	const remainder100 = number % 100

	if (remainder10 === 1 && remainder100 !== 11) {
		return `${number} товар`
	} else if (
		remainder10 >= 2 &&
		remainder10 <= 4 &&
		(remainder100 < 10 || remainder100 >= 20)
	) {
		return `${number} товара`
	} else {
		return `${number} товарів`
	}
}