import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import classes from "./AdminSignUp.module.scss";

const AdminSignUp = () => {
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
          <form>
            <div>
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                placeholder=" e.g john doe "
              />
            </div>
            <main>
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
                <label htmlFor="admin_id">Admin ID</label>
                <input
                  type="number"
                  id="admin_id"
                  name="admin_id"
                  placeholder="e.g: ADM-000 "
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
            <Button type="submit" className={classes.AdminSignUp_btn}>
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
          <Link to="/" className={classes.AdminSignUp_signUp}>
            Sign In
          </Link>
        </p>
      </section>
    </div>
  );
};

export default AdminSignUp;
