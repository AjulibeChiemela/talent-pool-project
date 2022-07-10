import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import classes from "./SignUpAs.module.scss";

const SignUpModal = () => {
  return (
    <div className={classes.SignUpAs_modal}>
      <div>
        <p>Please choose a SignUp category</p>
        <Link to="/">Graduate</Link>
        <Link to="/">Employer</Link>
        <Link to="/">Administrator</Link>
      </div>
    </div>
  );
};

const SignUpAs = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <SignUpModal />,
        document.getElementById("modal_root")
      )}
    </React.Fragment>
  );
};

export default SignUpAs;
