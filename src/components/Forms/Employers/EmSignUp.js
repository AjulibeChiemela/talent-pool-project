import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SignUpSuccess from "../../Modals/SignUpSuccess";
import Button from "../../UI/Button";
import classes from "./EmSignUp.module.scss";

const EmSignUp = () => {
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [signUpSuccess, setsignUpSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem("users", "[]");
  }, []);

  const handleOrgName = (e) => {
    setOrgName(e.target.value);
  };

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

  const handleCheck1 = () => {
    setChecked1(!checked1);
  };
  const handleCheck2 = () => {
    setChecked2(!checked2);
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
      orgName: orgName,
      email: email,
      pass: pass,
    };

    //get from ls,then save
    let users = localStorage.getItem("users");
    let userslist = JSON.parse(users) || [];
    console.log("other-user");
    userslist.push(userInfo);
    localStorage.setItem("users", JSON.stringify(userslist));
    console.log(userslist);

    setOrgName("");
    setEmail("");
    setPass("");
    setChecked1(false);
    setChecked2(false);

    setsignUpSuccess(true);
  };
  const successModalClose = () => {
    setsignUpSuccess(false);
  };

  return (
    <div className={classes.EmSignUp}>
      <section className={classes.image_section}></section>
      <section className={classes.text_section}>
        <div className={classes.text_section_header}>
          <h2>Welcome to TalentPool</h2>
          <p>
            Let's get your account setup so you can have access to a great pool
            of top talent.
          </p>
        </div>
        <div className={classes.text_section_formWrap}>
          <ul>
            <li>
              <NavLink
                to="/Em_SignUp"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.link}`
                    : `${classes.link}`
                }
              >
                Sign up Individual
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nothing2"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.link}`
                    : `${classes.link}`
                }
              >
                Sign up as Company
              </NavLink>
            </li>
          </ul>
          <hr />
          <form onSubmit={handleFormSubmit}>
            <main>
              <div>
                <label htmlFor="Organization_name">Organization Name</label>
                <input
                  type="text"
                  id="Organization_name"
                  name="Organization_name"
                  placeholder=" e.g Joe Deo"
                  onChange={handleOrgName}
                  value={orgName}
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
                  value={pass}
                />
              </div>
            </main>
            <div>
              <input
                type="checkbox"
                id="receive"
                name="receive"
                required
                onClick={handleCheck1}
                checked={checked1}
              />
              <label htmlFor="receive">
                Yes I want to recieve TalentPool emails
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="agree"
                name="agree"
                required
                onClick={handleCheck2}
                checked={checked2}
              />
              <label htmlFor="agree">
                I agree to the <Link to="/terms">Terms Policy Conditions</Link>
              </label>
            </div>
            <Button
              type="submit"
              className={classes.EmSignUp_btn}
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
        <div className={classes.EmSignUp_logos}>
          <img src="images/facebooklogo.png" alt="" />
          <img src="images/googleplus.png" alt="" />
        </div>
        <p>
          Already have an account with us?
          <Link to="/Em_SignIn" className={classes.EmSignUp_signUp}>
            Sign In
          </Link>
        </p>
      </section>
      {signUpSuccess && (
        <SignUpSuccess onCloseModal={successModalClose} link={"/Em_SignIn"} />
      )}
    </div>
  );
};

export default EmSignUp;
