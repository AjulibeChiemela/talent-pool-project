import React from "react";
import classes from "./Navbar.module.scss";
import Button from "../UI/Button";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <img src="images/logo.png" alt="talent-pool logo" />
      <div className={classes.navig}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Directories</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
        <Button className={classes.nav_btn}>Sign In</Button>
        <Button className={classes.nav_btn}>Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
