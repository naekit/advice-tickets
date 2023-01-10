import ReactDOM from "react-dom"
import classes from "./Modal.module.css"

const Backdrop = () => {
	return <div className={classes.backdrop} />
}

const ModalOverlay = ({ children }) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{children}</div>
		</div>
	)
}

const portalTarget = document.getElementById("overlays")

const Modal = ({ children }) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, portalTarget)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				portalTarget
			)}
		</>
	)
}

export default Modal
