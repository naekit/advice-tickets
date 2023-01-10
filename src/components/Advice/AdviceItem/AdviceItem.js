import React from "react"
import AdviceItemForm from "./AdviceItemForm"
import classes from "./AdviceItem.module.css"

const AdviceItem = ({ name, description, price, id }) => {
	const priceFormat = `$${price.toFixed(2)}`

	return (
		<li className={classes.adviceItem}>
			<div>
				<h3>{name}</h3>
				<div className={classes.description}>{description}</div>
				<div className={classes.price}>{priceFormat}</div>
			</div>
			<div>
				<AdviceItemForm id={id} />
			</div>
		</li>
	)
}

export default AdviceItem
