import React, { useContext, useState } from "react"
import classes from "./Cart.module.css"
import Modal from "../UI/Modal"
import CartContext from "../../context/cart-context"
import CartItem from "./CartItem"
import Checkout from "./Checkout"

const Cart = ({ onToggle }) => {
	const [showOrder, setShowOrder] = useState(false)
	const [submitting, setSubmitting] = useState(false)
	const [submitSent, setSubmitSent] = useState(false)
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
	const submitOrderHandler = async (orderObject) => {
		setSubmitting(true)
		await fetch(
			"https://checkout-collect-default-rtdb.firebaseio.com/orders.json",
			{
				method: "POST",
				body: JSON.stringify({
					user: orderObject,
					orderItems: ctx.items,
				}),
			}
		)
		setSubmitting(false)
		setSubmitSent(true)
		ctx.clearCart()
	}

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

	const cartModalContent = (
		<>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{showOrder && (
				<Checkout
					onOrder={submitOrderHandler}
					handleOrder={orderHandler}
				/>
			)}
			{!showOrder && actionsModal}
		</>
	)

	const submittingModal = <p>Sending order data...</p>
	const submitSentModal = (
		<>
			<p>Successfully sent order...</p>
			<button onClick={onToggle} className={classes["button--alt"]}>
				Close
			</button>
		</>
	)

	return (
		<Modal onToggle={onToggle}>
			{!submitting && !submitSent && cartModalContent}
			{submitting && submittingModal}
			{!submitting && submitSent && submitSentModal}
		</Modal>
	)
}

export default Cart
