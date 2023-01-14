import React, { useContext, useState } from "react"
import classes from "./Cart.module.css"
import Modal from "../UI/Modal"
import CartContext from "../../context/cart-context"
import CartItem from "./CartItem"
import Checkout from "./Checkout"

const Cart = ({ onToggle }) => {
	const [showOrder, setShowOrder] = useState(false)
	const ctx = useContext(CartContext)

	const removeCartItem = (id) => {
		ctx.removeItem(id)
	}
	const addCartItem = (item) => {
		ctx.addItem({ ...item, amount: 1 })
	}
	const orderHandler = (e) => {
		e.preventDefault()
		setShowOrder((prevState) => !prevState)
	}

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{ctx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={removeCartItem.bind(null, item.id)}
					onAdd={addCartItem.bind(null, item)}
				/>
			))}
		</ul>
	)

	const totalAmount = `$ ${ctx.totalAmount.toFixed(2)}`

	const hasItems = ctx.items.length > 0

	const actionsModal = (
		<div className={classes.actions}>
			<button onClick={onToggle} className={classes["button--alt"]}>
				Close
			</button>
			{hasItems && (
				<button onClick={orderHandler} className={classes.button}>
					Order
				</button>
			)}
		</div>
	)

	return (
		<Modal onToggle={onToggle}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{showOrder && <Checkout handleOrder={orderHandler} />}
			{!showOrder && actionsModal}
		</Modal>
	)
}

export default Cart
