import React, { useContext } from "react"
import AdviceItemForm from "./AdviceItemForm"
import classes from "./AdviceItem.module.css"
import CartContext from "../../../context/cart-context"

const AdviceItem = ({ name, description, price, id }) => {
	const ctx = useContext(CartContext)

	const priceFormat = `$${price.toFixed(2)}`

	const addToCartHandler = (amount) => {
		ctx.addItem({
			id: id,
			name: name,
			amount: amount,
			price: price,
		})
	}

	return (
		<li className={classes.adviceItem}>
			<div>
				<h3>{name}</h3>
				<div className={classes.description}>{description}</div>
				<div className={classes.price}>{priceFormat}</div>
			</div>
			<div>
				<AdviceItemForm onAddToCart={addToCartHandler} id={id} />
			</div>
		</li>
	)
}

export default AdviceItem
