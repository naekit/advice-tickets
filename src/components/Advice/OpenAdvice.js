import React, { useEffect, useState } from "react"
import Card from "../UI/Card"
import AdviceItem from "./AdviceItem/AdviceItem"
import classes from "./OpenAdvice.module.css"

const OpenAdvice = () => {
	const [advice, setAdvice] = useState([])
	const [loading, setLoading] = useState(true)
	const [hasError, setHasError] = useState(null)

	useEffect(() => {
		const getAdvice = async () => {
			const res = await fetch(
				"https://checkout-collect-default-rtdb.firebaseio.com/items.json"
			)
			if (!res.ok) {
				throw new Error("Oops! something is wrong :(")
			}

			const data = await res.json()
			const loadedItems = []
			for (const key in data) {
				loadedItems.push({
					id: key,
					name: data[key].name,
					description: data[key].description,
					price: data[key].price,
				})
			}
			setLoading(false)
			setAdvice(loadedItems)
		}

		getAdvice().catch((error) => {
			setLoading(false)
			setHasError(error.message)
		})
	}, [])

	console.log(hasError)
	console.log(loading)

	const adviceList = advice.map((item) => (
		<AdviceItem
			id={item.id}
			key={item.id}
			name={item.name}
			price={item.price}
			description={item.description}
		/>
	))

	return (
		<section className={classes.advice}>
			<Card>
				{hasError ? (
					<p className={classes.error}>{hasError}</p>
				) : loading ? (
					<p className={classes.loading}>...loading</p>
				) : (
					<ul>{adviceList}</ul>
				)}
			</Card>
		</section>
	)
}

export default OpenAdvice
