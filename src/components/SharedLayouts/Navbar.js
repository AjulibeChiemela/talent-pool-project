import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom";
import SignInAs from "../Modals/SignInAs";
import SignUpAs from "../Modals/SignUpAs";

const Navbar = () => {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const handleSignUp = () => {
    setSignUp(true);
  };
  const handleSignIn = () => {
    setSignIn(true);
  };
  const handleModalClose = () => {
    setSignUp(false);
    setSignIn(false);
  };
  const handleNavDisplay = () => {
    setShowNav(!showNav);
  };
  const handleRemoveNav = () => {
    setShowNav(false);
  };
  return (
    <div className={classes.nav}>
      <img src="images/logo.png" alt="talent-pool logo" />
      <img
        src="images/hamburger.png"
        alt=""
        className={classes.nav_ham}
        onClick={handleNavDisplay}
      />
      <div
        className={`${classes.navig} ${
          showNav ? `${classes.navig_show}` : `${classes.navig_hide}`
        }`}
        onClick={handleRemoveNav}
      >
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes.link}`
                  : `${classes.link}`
              }
            >
              About Us
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/directories"
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes.link}`
                  : `${classes.link}`
              }
            >
              Directories
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/top_talent"
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes.link}`
                  : `${classes.link}`
              }
            >
              Top Talent
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/3"
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes.link}`
                  : `${classes.link}`
              }
            >
              FAQ
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes.link}`
                  : `${classes.link}`
              }
            >
              Contact Us
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/privacy"
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes.link}`
                  : `${classes.link}`
              }
            >
              Privacy Policy
            </NavLink>
          </li>
        </ul>
        <Button className={classes.nav_btn} onClick={handleSignIn}>
          Sign In
        </Button>
        <Button className={classes.nav_btn} onClick={handleSignUp}>
          Sign Up
        </Button>
        {signIn && <SignInAs onExitModal={handleModalClose} />}
        {signUp && <SignUpAs onExitModal={handleModalClose} />}
      </div>
    </div>
  );
};

export default Navbar;
