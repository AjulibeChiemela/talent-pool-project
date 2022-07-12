import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={`${props.className} ${classes.btn}`}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
