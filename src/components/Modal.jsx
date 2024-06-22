import classes from "./Modal.module.css"

const Modal = ({ active, setActive, children }) => {
    return(
        <div onClick={() => {setActive(false)}} className={active ? classes.modalActive : classes.modal}>
            <div onClick={(e) => e.stopPropagation()} className={active ? classes.modal__contentActive : classes.modal__content}>
                <button onClick={() => {setActive(false)}} className={classes.modal__buttonClose}>&times;</button>
                {children}
            </div>
        </div>
    )
}

export default Modal