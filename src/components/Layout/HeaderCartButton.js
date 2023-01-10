import React, { useContext, useEffect, useState } from "react"
import CartContext from "../../context/cart-context"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = ({ onToggle }) => {
	const ctx = useContext(CartContext)
	const [animate, setAnimate] = useState(false)
	const numberItems = ctx.items.reduce((a, c) => a + c.amount, 0)

	const btnClasses = `${classes.button} ${animate ? classes.bump : ""}`

	useEffect(() => {
		setAnimate(true)

		const clearAnimate = setTimeout(() => {
			setAnimate(false)
		}, 300)

		return () => {
			clearTimeout(clearAnimate)
		}
	}, [numberItems])

	return (
		<button onClick={onToggle} className={btnClasses}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberItems}</span>
		</button>
	)
}

export default HeaderCartButton
