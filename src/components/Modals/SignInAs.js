import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import classes from "./SignUpAs.module.scss";

const SignInModal = () => {
  return (
    <div className={classes.SignUpAs_modal}>
      <div>
        <p>Please choose a SignIn category</p>
        <Link to="/">Graduate</Link>
        <Link to="/">Employer</Link>
        <Link to="/">Administrator</Link>
      </div>
    </div>
  );
};

const SignInAs = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <SignInModal />,
        document.getElementById("modal_root")
      )}
    </React.Fragment>
  );
};

export default SignInAs;
