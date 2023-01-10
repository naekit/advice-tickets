import Advice from "./components/Advice/Advice"
import Header from "./components/Layout/Header"
import Cart from "./components/Cart/Cart"
import { useState } from "react"
import CartProvider from "./context/CartProvider"

function App() {
	const [visible, setVisible] = useState(false)

	const toggleItem = () => {
		setVisible((prevState) => !prevState)
	}

	return (
		<CartProvider>
			<h2>Let's get started!</h2>
			{visible && <Cart onToggle={toggleItem} />}
			<Header onToggle={toggleItem} />
			<main>
				<Advice />
			</main>
		</CartProvider>
	)
}

export default App
