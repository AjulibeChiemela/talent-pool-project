import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../../UI/Button";
import classes from "./EmSignUp.module.scss";

const EmSignUp = () => {
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
          <form>
            <main>
              <div>
                <label htmlFor="Organization_name">Organization Name</label>
                <input
                  type="text"
                  id="Organization_name"
                  name="Organization_name"
                  placeholder=" e.g Joe Deo"
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder=" at least 8 characters "
                />
              </div>
            </main>
            <div>
              <input type="checkbox" id="receive" name="receive" />
              <label htmlFor="receive">
                Yes I want to recieve TalentPool emails
              </label>
            </div>
            <div>
              <input type="checkbox" id="agree" name="agree" />
              <label htmlFor="agree">
                I agree to the <Link to="/">Terms Policy Conditions</Link>
              </label>
            </div>
            <Button type="submit" className={classes.EmSignUp_btn}>
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
    </div>
  );
};

export default EmSignUp;
