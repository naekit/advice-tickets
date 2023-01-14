import classes from "./Checkout.module.css"

const Checkout = ({ handleOrder }) => {
	return (
		<form>
			<div className={classes.control}>
				<label htmlFor="name">Your Name</label>
				<input type="text" name="name" id="name" />
			</div>
			<div className={classes.control}>
				<label htmlFor="street">Street</label>
				<input type="text" name="street" id="street" />
			</div>
			<div className={classes.control}>
				<label htmlFor="postal">Postal Code</label>
				<input type="text" name="postal" id="postal" />
			</div>
			<div className={classes.control}>
				<label htmlFor="city">City</label>
				<input type="text" name="city" id="city" />
			</div>
			<button onClick={handleOrder} type="button">
				Cancel
			</button>
			<button>Confirm</button>
		</form>
	)
}

export default Checkout
