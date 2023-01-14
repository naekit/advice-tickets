import React, { useEffect, useState } from "react"
import Card from "../UI/Card"
import AdviceItem from "./AdviceItem/AdviceItem"
import classes from "./OpenAdvice.module.css"

const OpenAdvice = () => {
	const [advice, setAdvice] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getAdvice = async () => {
			const res = await fetch(
				"https://checkout-collect-default-rtdb.firebaseio.com/items.json"
			)
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
		getAdvice()
	}, [])

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
			<Card>{loading ? <p>...loading</p> : <ul>{adviceList}</ul>}</Card>
		</section>
	)
}

export default OpenAdvice
