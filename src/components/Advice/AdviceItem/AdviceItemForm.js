import React from "react"
import Input from "../../UI/Input"
import classes from "./AdviceItemForm.module.css"

const AdviceItemForm = ({ id }) => {
	return (
		<form className={classes.form}>
			<Input
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
