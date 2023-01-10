import React from "react"
import classes from "./Cart.module.css"
import Modal from "../UI/Modal"

const Cart = ({ onToggle }) => {
	const cartItems = [
		{ id: "c1", name: "Manifestation", amount: 2, price: 12.99 },
	].map((item) => <li>{item.name}</li>)

	return (
		<Modal>
			<ul className={classes["card-items"]}>{cartItems}</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>35.62</span>
			</div>
			<div className={classes.actions}>
				<button onClick={onToggle} className={classes["button--alt"]}>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	)
}

export default Cart
