import { useRef, useState } from "react"
import classes from "./Checkout.module.css"

const Checkout = ({ handleOrder, onOrder }) => {
	const [formInputValid, setFormInputValid] = useState({
		name: true,
		street: true,
		postal: true,
		city: true,
	})

	const nameRef = useRef()
	const streetRef = useRef()
	const postalRef = useRef()
	const cityRef = useRef()
	const formRef = useRef()

	const isEmpty = (value) => value.trim() === ""
	const isFive = (value) => value.trim().length === 5

	const confirmHandler = (e) => {
		e.preventDefault()
		const userOrder = {
			name: nameRef.current.value,
			street: streetRef.current.value,
			postal: postalRef.current.value,
			city: cityRef.current.value,
		}
		const nameValid = !isEmpty(userOrder.name)
		const cityValid = !isEmpty(userOrder.city)
		const streetValid = !isEmpty(userOrder.street)
		const postalValid = isFive(userOrder.postal)

		setFormInputValid({
			name: nameValid,
			city: cityValid,
			street: streetValid,
			postal: postalValid,
		})

		const formValid = nameValid && cityValid && streetValid && postalValid
		if (!formValid) {
			return
		}
		// submit here
		onOrder(userOrder)
		formRef.current.reset()
	}

	return (
		<form ref={formRef} className={classes.form} onSubmit={confirmHandler}>
			<div
				className={`${classes.control} ${
					formInputValid.name ? "" : classes.invalid
				}`}
			>
				<label htmlFor="name">Your Name</label>
				<input ref={nameRef} type="text" name="name" id="name" />
				{!formInputValid.name && <p>Please enter a valid name!</p>}
			</div>
			<div
				className={`${classes.control} ${
					formInputValid.street ? "" : classes.invalid
				}`}
			>
				<label htmlFor="street">Street</label>
				<input ref={streetRef} type="text" name="street" id="street" />
				{!formInputValid.street && <p>Please enter a valid street!</p>}
			</div>
			<div
				className={`${classes.control} ${
					formInputValid.postal ? "" : classes.invalid
				}`}
			>
				<label htmlFor="postal">Postal Code</label>
				<input ref={postalRef} type="text" name="postal" id="postal" />
				{!formInputValid.postal && (
					<p>Please enter a valid (5 characters) postal code!</p>
				)}
			</div>
			<div
				className={`${classes.control} ${
					formInputValid.city ? "" : classes.invalid
				}`}
			>
				<label htmlFor="city">City</label>
				<input ref={cityRef} type="text" name="city" id="city" />
				{!formInputValid.city && <p>Please enter a valid city!</p>}
			</div>
			<div className={classes.actions}>
				<button onClick={handleOrder} type="button">
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	)
}

export default Checkout
