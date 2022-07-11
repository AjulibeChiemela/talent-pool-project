import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import classes from "./SignUpAs.module.scss";

const SignUpModal = (props) => {
  return (
    <div className={classes.SignUpAs_modal} onClick={props.onClick}>
      <div>
        <p>Please choose a SignUp category</p>
        <Link to="/Graduate_SignUp">Graduate</Link>
        <Link to="/Em_SignUp">Employer</Link>
        <Link to="/Admin_SignUp">Administrator</Link>
      </div>
    </div>
  );
};

const SignUpAs = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <SignUpModal onClick={props.onExitModal} />,
        document.getElementById("modal_root")
      )}
    </React.Fragment>
  );
};

export default SignUpAs;
