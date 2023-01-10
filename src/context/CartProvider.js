import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
	items: [],
	totalAmount: 0,
}

const cartReducer = (state, action) => {
	if (action.type === "ADD_ITEM") {
		const updatedItem = state.items.concat(action.payload)
		const updatedTotal =
			state.totalAmount + action.payload.price * action.payload.amount
		return {
			items: updatedItem,
			totalAmount: updatedTotal,
		}
	}
	if (action.type === "REMOVE_ITEM") {
	}
	return defaultCartState
}

const CartProvider = ({ children }) => {
	const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)

	const addItemToCartHandler = (item) => {
		dispatchCart({ type: "ADD_ITEM", payload: item })
	}
	const removeItemFromCartHandler = (item) => {
		dispatchCart({ type: "REMOVE_ITEM", payload: item })
	}

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	}

	return (
		<CartContext.Provider value={cartContext}>
			{children}
		</CartContext.Provider>
	)
}

export default CartProvider
