import React, { useContext } from "react"
import CartContext from "../../context/cart-context"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = ({ onToggle }) => {
	const ctx = useContext(CartContext)
	const numberItems = ctx.items.reduce((a, c) => a + c.amount, 0)

	return (
		<button onClick={onToggle} className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberItems}</span>
		</button>
	)
}

export default HeaderCartButton
