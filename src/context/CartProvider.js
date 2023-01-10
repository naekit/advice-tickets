import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
	items: [],
	totalAmount: 0,
}

const cartReducer = (state, action) => {
	if (action.type === "ADD_ITEM") {
		const updatedTotal =
			state.totalAmount + action.payload.price * action.payload.amount
		const existingItemIndex = state.items.findIndex(
			(item) => item.id === action.payload.id
		)
		const existingItem = state.items[existingItemIndex]

		let updatedItems
		if (existingItem) {
			const updatedItem = {
				...existingItem,
				amount: existingItem.amount + action.payload.amount,
			}
			updatedItems = [...state.items]
			updatedItems[existingItemIndex] = updatedItem
		} else {
			updatedItems = state.items.concat(action.payload)
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotal,
		}
	}
	if (action.type === "REMOVE_ITEM") {
		const existingItemIndex = state.items.findIndex(
			(item) => item.id === action.id
		)
		const existingItem = state.items[existingItemIndex]
		const updatedTotal = state.totalAmount - existingItem.price
		let updatedItems
		if (existingItem.amount === 1) {
			updatedItems = state.items
			updatedItems.splice(existingItemIndex, 1)
		} else {
			const updatedItem = {
				...existingItem,
				amount: existingItem.amount - 1,
			}
			updatedItems = [...state.items]
			updatedItems[existingItemIndex] = updatedItem
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotal,
		}
	}
	return defaultCartState
}

const CartProvider = ({ children }) => {
	const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)

	const addItemToCartHandler = (item) => {
		dispatchCart({ type: "ADD_ITEM", payload: item })
	}
	const removeItemFromCartHandler = (id) => {
		dispatchCart({ type: "REMOVE_ITEM", id: id })
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
