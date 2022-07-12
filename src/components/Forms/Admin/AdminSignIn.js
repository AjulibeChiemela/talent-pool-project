import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import classes from "./AdminSignIn.module.scss";
const AdminSignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(email.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(pass.trim().length > 7);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(email.includes("@") && pass.trim().length > 7);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [email, pass]);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userInfo = {
      email: email,
      pass: pass,
    };

    console.log(userInfo);
  };
  return (
    <div className={classes.AdminSignIn}>
      <section className={classes.image_section}></section>
      <section className={classes.text_section}>
        <div className={classes.text_section_header}>
          <h2>Welcome Back !</h2>
          <p>Enter your email and password to access account</p>
        </div>
        <div className={classes.text_section_formWrap}>
          <form onSubmit={handleFormSubmit}>
            <main>
              <div
                className={`${emailIsValid === false ? classes.invalid : ""}`}
              >
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" example@gmail.com "
                  onChange={handleEmail}
                  onBlur={validateEmailHandler}
                />
              </div>
              <div
                className={`${
                  passwordIsValid === false ? classes.invalid : ""
                }`}
              >
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder=" at least 8 characters "
                  onChange={handlePass}
                  onBlur={validatePasswordHandler}
                />
              </div>
            </main>
            <div>
              <div>
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/">Forgot Password?</Link>
            </div>
            <Button
              type="submit"
              className={classes.AdminSignIn_btn}
              disabled={!formIsValid}
            >
              Log In
            </Button>
          </form>
          <div>
            <hr />
            <p>OR</p>
            <hr />
          </div>
        </div>
        <div className={classes.AdminSignIn_btns}>
          <button>
            <img src="images/Vector.png" alt="" />
            <p>Log in with Facebook</p>
          </button>
          <button>Log in using Google</button>
        </div>
        <p>
          Don’t have an account with us?{" "}
          <Link to="/Admin_SignUp" className={classes.AdminSignIn_signUp}>
            Sign Up
          </Link>
        </p>
      </section>
    </div>
  );
};

export default AdminSignIn;
