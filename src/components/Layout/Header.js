import React from "react"
import womanImage from "../../assets/photo-1641898843195-f8cb8622af0e.jpeg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header = ({ onToggle }) => {
	return (
		<>
			<header className={classes.header}>
				<h1>UnVeil</h1>
				<HeaderCartButton onToggle={onToggle} />
			</header>
			<div className={classes["main-image"]}>
				<img src={womanImage} alt="woman draped black" />
			</div>
		</>
	)
}

export default Header
