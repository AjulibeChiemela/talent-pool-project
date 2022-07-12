import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import classes from "./AdminSignUp.module.scss";

const AdminSignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [adminID, setAdminID] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminID = (e) => {
    setAdminID(e.target.value);
  };
  const handlePass1 = (e) => {
    setPass1(e.target.value);
  };
  const handlePass2 = (e) => {
    setPass2(e.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(email.includes("@"));
  };

  const validatePassword1Handler = () => {
    setPasswordIsValid(pass1.trim().length > 7);
  };

  const validatePassword2Handler = () => {
    setPasswordIsValid(pass2.trim().length > 7);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(
        email.includes("@") &&
          pass1.trim().length > 7 &&
          pass2.trim().length > 7 &&
          pass1 === pass2
      );
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [email, pass1, pass2]);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userInfo = {
      fullName: fullName,
      email: email,
      AdminID: adminID,
      pass1: pass1,
      pass2: pass2,
    };

    console.log(userInfo);
  };
  return (
    <div className={classes.AdminSignUp}>
      <section className={classes.image_section}></section>
      <section className={classes.text_section}>
        <div className={classes.text_section_header}>
          <h2>Connect great talents with top organizations</h2>
          <p>
            Create a profile to stay connected with the 1,000+ graduates and
            potential employers.
          </p>
        </div>
        <div className={classes.text_section_formWrap}>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                placeholder=" e.g john doe "
                onChange={handleFullName}
              />
            </div>
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
              <div>
                <label htmlFor="admin_id">Admin ID</label>
                <input
                  type="text"
                  id="admin_id"
                  name="admin_id"
                  placeholder="e.g: ADM-000 "
                  onChange={handleAdminID}
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
                  onChange={handlePass1}
                  onBlur={validatePassword1Handler}
                />
              </div>
              <div
                className={`${
                  passwordIsValid === false ? classes.invalid : ""
                }`}
              >
                <label htmlFor="password2">Confirm Password</label>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder=" at least 8 characters"
                  onChange={handlePass2}
                  onBlur={validatePassword2Handler}
                />
              </div>
            </main>
            <div>
              <input type="checkbox" id="agree" name="agree" />
              <label htmlFor="agree">
                I agree to the <Link to="/">Terms Policy Conditions</Link>
              </label>
            </div>
            {pass1 !== pass2 && (
              <p>Passwords don't match. Please re-confirm.</p>
            )}
            <Button
              type="submit"
              className={classes.AdminSignUp_btn}
              disabled={!formIsValid}
            >
              Sign Up
            </Button>
          </form>
          <div>
            <hr />
            <p>OR</p>
            <hr />
          </div>
        </div>
        <div className={classes.AdminSignUp_btns}>
          <button>
            <img src="images/Vector.png" alt="" />
            <p>Log in with Facebook</p>
          </button>
          <button>Log in using Google</button>
        </div>
        <p>
          Already have an account with us?
          <Link to="/Admin_SignIn" className={classes.AdminSignUp_signUp}>
            Sign In
          </Link>
        </p>
      </section>
    </div>
  );
};

export default AdminSignUp;
