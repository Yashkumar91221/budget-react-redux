import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClose}></div>
);

const ModalOverLay = (props) => (
  <div className={classes.modal}>{props.children}</div>
);

export const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverLay onClose={props.onClose}>{props.children}</ModalOverLay>,
        document.getElementById("overlays")
      )}
    </>
  );
};
