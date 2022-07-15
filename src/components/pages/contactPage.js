import React from "react";
import classes from "./contactPage.module.scss";

const ContactPage = () => {
  return (
    <div className={classes.contpage}>
      <div className={classes.contrect}>
        <h1>Let’s talk about your next hire</h1>
      </div>
      <div className={classes.contgrid}>
        <div className={classes.gridboxes}>
          <h3>Admin</h3>
          <p>
            <span>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus
            </span>{" "}
          </p>
          <p>
            <b>Admin@talentpool.com</b>
          </p>
        </div>

        <div className={classes.gridboxes}>
          <h3>Head of Interns</h3>
          <p>
            <span>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus{" "}
            </span>
          </p>
          <p>
            <b>Admin@talentpool.com</b>
          </p>
        </div>

        <div className={classes.gridboxes}>
          <h3>Our Office</h3>
          <p>
            <span>Opening soon</span>
          </p>
        </div>
      </div>
      <div className={classes.contouterform}>
        <h4>Feel free to say hello!</h4>
      </div>
      <div className={classes.contform}>
        <form>
          <input
            type="text"
            placeholder="Your Name*"
            className={classes.forminput}
          ></input>
          <br></br>
          <br></br>
          <input
            type="email"
            placeholder="Your Email*"
            className={classes.forminput}
          ></input>
          <br></br>
          <br></br>
          <input
            type="text"
            placeholder="Subject"
            className={classes.forminput}
          ></input>
          <br></br>
          <br></br>
          <textarea
            placeholder="Message"
            rows={10}
            className={classes.forminput}
          ></textarea>
        </form>
        <button className={classes.sendmessage}>Send Message</button>
      </div>
    </div>
  );
};

export default ContactPage;
