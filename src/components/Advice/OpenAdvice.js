import React from "react"
import Card from "../UI/Card"
import classes from "./OpenAdvice.module.css"

const ADVICE = [
	{
		id: "m1",
		name: "Life General",
		description: "Ask any question",
		price: 22.22,
	},
	{
		id: "m2",
		name: "Love",
		description: "Get insight into relationship",
		price: 33.33,
	},
	{
		id: "m3",
		name: "Manifestation",
		description: "Request for building intention",
		price: 55.55,
	},
	{
		id: "m4",
		name: "Discovery",
		description: "Revelation on chosen topic",
		price: 44.44,
	},
]

const OpenAdvice = () => {
	const adviceList = ADVICE.map((item) => <li>{item.name}</li>)

	return (
		<section className={classes.advice}>
			<Card>
				<ul>{adviceList}</ul>
			</Card>
		</section>
	)
}

export default OpenAdvice
