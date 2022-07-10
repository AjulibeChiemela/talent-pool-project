import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <main>
        <div>
          <img src="images/logo2.png" alt="" />
          <p>
            We are known for connecting top talents with top comapnies. We make
            great possibilities happen.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Directories</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Top Talent</Link>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <h3>Visit</h3>
            <p>3 Birrel Avenue, Sabo.</p>
            <p> Yaba, Lagos State, Nigeria</p>
          </div>
          <div>
            <h3>Get In Touch</h3>
            <p>hello@hng.tech</p>
            <p>{"+234 (0) 812 345 6789"}</p>
          </div>
        </div>
        <div>
          <h3>Follow</h3>
          <ul>
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li>
              <Link to="/">Linkedin</Link>
            </li>
            <li>
              <Link to="/">Twitter</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li>
              <Link to="/">Terms</Link>
            </li>
            <li>
              <Link to="/">Privacy</Link>
            </li>
          </ul>
        </div>
      </main>
      <hr />
      <p className={classes.footer_copyright}>
        TalentPool. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;