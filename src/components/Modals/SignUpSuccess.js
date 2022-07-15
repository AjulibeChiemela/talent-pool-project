import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./SignUpSuccess.module.scss";

const SuccessModal = (props) => {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate(props.link);
  };
  return (
    <div className={classes.SignUpSuccess_modal} onClick={props.onClick}>
      <div className={classes.SignUpSuccess_modal_content}>
        <img src="images/logo.png" alt="" />
        <img src="images/envelope.png" alt="" />
        <h3>Registration Successful !</h3>
        <p>
          A verfication link has been sent to your email address, kindly check
          your mail and click to verify your account.
        </p>
        <Button
          className={classes.SignUpSuccess_modal_btn}
          onClick={goToSignIn}
        >
          OKAY
        </Button>
      </div>
    </div>
  );
};

const SignUpSuccess = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <SuccessModal onClick={props.onCloseModal} link={props.link} />,
        document.getElementById("modal_root")
      )}
    </React.Fragment>
  );
};

export default SignUpSuccess;
