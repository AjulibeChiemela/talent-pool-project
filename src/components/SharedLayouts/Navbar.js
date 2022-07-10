import React from "react";
import classes from "./Navbar.module.scss";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <img src="images/logo.png" alt="talent-pool logo" />
      <div className={classes.navig}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive && `${classes.active}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/1"
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes.link}`
                  : `${classes.link}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/2"
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes.link}`
                  : `${classes.link}`
              }
            >
              Directories
            </NavLink>
          </li>
          <li>
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
          </li>
          <li>
            <NavLink
              to="/4"
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes.link}`
                  : `${classes.link}`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <Button className={classes.nav_btn}>Sign In</Button>
        <Button className={classes.nav_btn}>Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
