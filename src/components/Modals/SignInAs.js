import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import classes from "./SignUpAs.module.scss";

const SignInModal = (props) => {
  return (
    <div className={classes.SignUpAs_modal} onClick={props.onClick}>
      <div>
        <p>Please choose a SignIn category</p>
        <Link to="/Graduate_SignIn">Graduate</Link>
        <Link to="/Em_SignIn">Employer</Link>
        <Link to="/Admin_SignIn">Administrator</Link>
      </div>
    </div>
  );
};

const SignInAs = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <SignInModal onClick={props.onExitModal} />,
        document.getElementById("modal_root")
      )}
    </React.Fragment>
  );
};

export default SignInAs;
