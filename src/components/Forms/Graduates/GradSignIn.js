import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import classes from "./GradSignIn.module.scss";
const GradSignIn = () => {
  return (
    <div className={classes.gradSignIn}>
      <section className={classes.image_section}></section>
      <section className={classes.text_section}>
        <div className={classes.text_section_header}>
          <h2>Welcome Back !</h2>
          <p>Get connected to the right job. Keep an eye on your career</p>
        </div>
        <div className={classes.text_section_formWrap}>
          <form>
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
              <div>
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/">Forgot Password?</Link>
            </div>
            <Button type="submit" className={classes.gradSignIn_btn}>
              Log In
            </Button>
          </form>
          <div>
            <hr />
            <p>OR</p>
            <hr />
          </div>
        </div>
        <div className={classes.gradSignIn_logos}>
          <img src="images/facebooklogo.png" alt="" />
          <img src="images/googleplus.png" alt="" />
        </div>
        <p>
          Don’t have an account with us?{" "}
          <Link to="/Graduate_SignUp" className={classes.gradSignIn_signUp}>
            Sign Up
          </Link>
        </p>
      </section>
    </div>
  );
};

export default GradSignIn;
