import React from "react";
import Button from "../UI/Button";
import classes from "./Join.module.scss";
const Join = () => {
  return (
    <div className={classes.join}>
      <h2>
        Not a graduate? you can join the pool of the top vetted talents around
        the world
      </h2>
      <Button className={classes.join_btn}>Join Talentpool</Button>
    </div>
  );
};

export default Join;
