import ReactDOM from "react-dom"
import classes from "./Modal.module.css"

const Backdrop = ({ onToggle }) => {
	return <div className={classes.backdrop} onClick={onToggle} />
}

const ModalOverlay = ({ children }) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{children}</div>
		</div>
	)
}

const portalTarget = document.getElementById("overlays")

const Modal = ({ children, onToggle }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onToggle={onToggle} />,
				portalTarget
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				portalTarget
			)}
		</>
	)
}

export default Modal
