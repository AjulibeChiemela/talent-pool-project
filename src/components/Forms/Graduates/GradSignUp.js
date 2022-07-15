import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SignUpSuccess from "../../Modals/SignUpSuccess";
import Button from "../../UI/Button";
import classes from "./GradSignUp.module.scss";

const GradSignUp = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [checked, setChecked] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [signUpSuccess, setsignUpSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem("users", "[]");
  }, []);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneNo = (e) => {
    setPhoneNo(e.target.value);
  };
  const handlePass1 = (e) => {
    setPass1(e.target.value);
  };
  const handlePass2 = (e) => {
    setPass2(e.target.value);
  };

  const handleCheck = () => {
    setChecked(!checked);
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
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNo: phoneNo,
      pass1: pass1,
      pass2: pass2,
    };

    //get from ls,then save
    let users = localStorage.getItem("users");
    let userslist = JSON.parse(users) || [];
    console.log("other-user");
    userslist.push(userInfo);
    localStorage.setItem("users", JSON.stringify(userslist));
    console.log(userslist);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNo("");
    setPass1("");
    setPass2("");
    setChecked(false);

    setsignUpSuccess(true);
  };

  const successModalClose = () => {
    setsignUpSuccess(false);
  };
  return (
    <div className={classes.gradSignUp}>
      <section className={classes.image_section}></section>
      <section className={classes.text_section}>
        <div className={classes.text_section_header}>
          <h2>We make it easy for you to connect with top organizations</h2>
          <p>
            Create a profile and join the 1,000+ graduates to get connected with
            pontential employers.
          </p>
        </div>
        <div className={classes.text_section_formWrap}>
          <ul>
            <li>
              <NavLink
                to="/Graduate_SignUp"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.link}`
                    : `${classes.link}`
                }
              >
                Sign up as an Intern
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nothing1"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.link}`
                    : `${classes.link}`
                }
              >
                Sign up as a New User
              </NavLink>
            </li>
          </ul>
          <hr />
          <form onSubmit={handleFormSubmit}>
            <main>
              <div>
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder=" e.g john "
                  onChange={handleFirstName}
                  value={firstName}
                />
              </div>
              <div>
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="  e.g doe   "
                  onChange={handleLastName}
                  value={lastName}
                />
              </div>
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
                  value={email}
                />
              </div>
              <div>
                <label htmlFor="phoneNo">Phone Number</label>
                <input
                  type="number"
                  id="phoneNo"
                  name="phoneNo"
                  placeholder=" e.g +2348090000123 "
                  onChange={handlePhoneNo}
                  value={phoneNo}
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
                  autoComplete="false"
                  value={pass1}
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
                  autoComplete="false"
                  value={pass2}
                />
              </div>
            </main>
            <div>
              <input
                type="checkbox"
                id="agree"
                name="agree"
                required
                onClick={handleCheck}
                checked={checked}
              />
              <label htmlFor="agree">
                I agree to the <Link to="/terms">Terms Policy Conditions</Link>
              </label>
            </div>
            {pass1 !== pass2 && (
              <p>Passwords don't match. Please re-confirm.</p>
            )}
            <Button
              type="submit"
              className={classes.gradSignUp_btn}
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
        <div className={classes.gradSignUp_logos}>
          <img src="images/facebooklogo.png" alt="" />
          <img src="images/googleplus.png" alt="" />
        </div>
        <p>
          Already have an account with us?
          <Link to="/Graduate_SignIn" className={classes.gradSignUp_signUp}>
            Sign In
          </Link>
        </p>
      </section>
      {signUpSuccess && (
        <SignUpSuccess
          onCloseModal={successModalClose}
          link={"/Graduate_SignIn"}
        />
      )}
    </div>
  );
};

export default GradSignUp;
