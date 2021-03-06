import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} style={{ backgroundColor: props.color }} className={classes.button}>
      {props.children}
    </button>
  );
};
export default Button;
