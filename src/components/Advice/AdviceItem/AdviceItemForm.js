import React, { useRef, useState } from "react"
import Input from "../../UI/Input"
import classes from "./AdviceItemForm.module.css"

const AdviceItemForm = ({ id, onAddToCart }) => {
	const [validAmount, setValidAmount] = useState(true)
	const inputRef = useRef()

	const submitHandler = (e) => {
		e.preventDefault()

		const enteredAmount = inputRef.current.value
		const amountNumber = +enteredAmount

		if (
			enteredAmount.trim().length === 0 ||
			amountNumber < 1 ||
			amountNumber > 5
		) {
			setValidAmount(false)
			return
		}

		onAddToCart(amountNumber)
	}

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<Input
				ref={inputRef}
				label="Hours"
				input={{
					type: "number",
					id: `amount_${id}`,
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button>+ Add</button>
			{!validAmount && <p>Please enter a valid amount (1-5)</p>}
		</form>
	)
}

export default AdviceItemForm
