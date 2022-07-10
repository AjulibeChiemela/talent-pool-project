import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../../UI/Button";
import classes from "./GradSignUp.module.scss";

const GradSignUp = () => {
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
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.link}`
                    : `${classes.link}`
                }
              >
                Sign up as HNG Intern
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nothing"
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
          <form>
            <main>
              <div>
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder=" e.g john "
                />
              </div>
              <div>
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="  e.g doe   "
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" example@gmail.com "
                />
              </div>
              <div>
                <label htmlFor="phoneNo">Phone Number</label>
                <input
                  type="number"
                  id="phoneNo"
                  name="phoneNo"
                  placeholder=" e.g +2348090000123 "
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder=" at least 8 characters "
                />
              </div>
              <div>
                <label htmlFor="password2">Confirm Password</label>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder=" at least 8 characters"
                />
              </div>
            </main>
            <div>
              <input type="checkbox" id="agree" name="agree" />
              <label htmlFor="agree">
                I agree to the <Link to="/">Terms Policy Conditions</Link>
              </label>
            </div>
            <Button type="submit" className={classes.gradSignUp_btn}>
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
          <Link to="/" className={classes.gradSignUp_signUp}>
            Sign In
          </Link>
        </p>
      </section>
    </div>
  );
};

export default GradSignUp;
