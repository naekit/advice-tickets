import Advice from "./components/Advice/Advice"
import Header from "./components/Layout/Header"
import Cart from "./components/Cart/Cart"
import { useState } from "react"

function App() {
	const [visible, setVisible] = useState(false)

	const toggleItem = () => {
		setVisible((prevState) => !prevState)
	}

	return (
		<>
			<h2>Let's get started!</h2>
			{visible && <Cart onToggle={toggleItem} />}
			<Header onToggle={toggleItem} />
			<main>
				<Advice />
			</main>
		</>
	)
}

export default App
