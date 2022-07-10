import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <div
      className={`${classes.btn} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Button;
