import React from "react";
import classes from "./HeroFooter.module.scss";

const HeroFooter = () => {
  return (
    <div className={classes.hero_footer}>
      <div className={classes.para}>
        <p>Trusted by Top Companies</p>
      </div>
      <div>
        <img src="images/chatdesk.png" alt="" />
        <img src="images/flutterwave.png" alt="" />
        <img src="images/piggyvest.png" alt="" />
        <img src="images/hotels.png" alt="" />
        <img src="images/verifi.png" alt="" />
        <img src="images/oracle.png" alt="" />
      </div>
    </div>
  );
};

export default HeroFooter;
