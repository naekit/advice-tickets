import React, { useRef } from "react"
import Input from "../../UI/Input"
import classes from "./AdviceItemForm.module.css"

const AdviceItemForm = ({ id }) => {
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
			return
		}
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
					default: "1",
				}}
			/>
			<button>+ Add</button>
		</form>
	)
}

export default AdviceItemForm
