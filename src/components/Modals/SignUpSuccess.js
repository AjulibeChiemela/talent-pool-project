import React from "react";
import Button from "../UI/Button";
import classes from "./SignUpSuccess.module.scss";

const SignUpSuccess = () => {
  return (
    <div className={classes.SignUpSuccess_modal}>
      <div className={classes.SignUpSuccess_modal_content}>
        <img src="images/logo.png" alt="" />
        <img src="images/envelope.png" alt="" />
        <h3>Registration Successful !</h3>
        <p>
          A verfication link has been sent to your email address, kindly check
          your mail and click to verify your account.
        </p>
        <Button className={classes.SignUpSuccess_modal_btn}>Sign in</Button>
      </div>
    </div>
  );
};

export default SignUpSuccess;
