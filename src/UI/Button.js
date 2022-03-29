import React from "react";
import classes from "./Button.module.css";

export const Button = (props) => {
  return (
    <button style={{ backgroundColor: props.color }} className={classes.button}>
      {props.children}
    </button>
  );
};
