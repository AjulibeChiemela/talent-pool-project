import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <section className={classes.text_section}>
        <h1>Find the perfect fit for your Company</h1>
        <p>
          Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
          consectetuer dolor ornare dapibus{" "}
        </p>
        <Button className={classes.hero_btn}>Hire Top Talent</Button>
      </section>
      <section className={classes.images_section}>
        <Card className={classes.img_card}>
          <img src="images/adelanke1.png" alt="" />
          <div className={classes.wrap_div}>
            <div className={classes.card_text}>
              <p>Adelanke Adelanke</p>
              <p>Frontend Developer</p>
            </div>
            <div>
              <p>Previously at </p>
              <img src="images/buypower.png" alt="" />
            </div>
          </div>
        </Card>
        <Card className={classes.img_card}>
          <img src="images/adelanke2.png" alt="" />
          <div className={classes.wrap_div}>
            <div className={classes.card_text}>
              <p>Adelanke Adelanke</p>
              <p>Frontend Developer</p>
            </div>
            <div>
              <p>Previously at </p>
              <img src="images/barterlogo.png" alt="" />
            </div>
          </div>
        </Card>
        <Card className={classes.img_card}>
          <img src="images/adelanke3.png" alt="" />
          <div className={classes.wrap_div}>
            <div className={classes.card_text}>
              <p>Adelanke Adelanke</p>
              <p>Frontend Developer</p>
            </div>
            <div>
              <p>Previously at </p>
              <img src="images/accesslogo.png" alt="" />
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Hero;
