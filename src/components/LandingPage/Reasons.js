import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Reasons.module.scss";
const Reasons = () => {
  return (
    <div className={classes.reasons}>
      <div className={classes.reasons_grid}>
        <Card className={classes.reasons_grid_item}>
          <h2>Why Organizations Choose Talentpool</h2>
          <p>
            Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
            consectetuer dolor ornare dapibus enim
          </p>
        </Card>
        <Card className={classes.reasons_grid_item}>
          <div className={classes.overlay}>
            <p>Adelanke</p>
            <p>Developing Oculus VR</p>
          </div>
        </Card>
        <Card className={classes.reasons_grid_item}>
          <div className={classes.overlay}>
            <p>Adelanke</p>
            <p>Redefine your Style guides</p>
          </div>
        </Card>
        <Card className={classes.reasons_grid_item}>
          <div className={classes.overlay}>
            <p>Adelanke</p>
            <p>Developing Oculus VR</p>
          </div>
        </Card>
        <Card className={classes.reasons_grid_item}>
          <div className={classes.overlay}>
            <p>Adelanke</p>
            <p>Developing Oculus VR</p>
          </div>
        </Card>
        <Card className={classes.reasons_grid_item}>
          <div className={classes.overlay}>
            <p>Adelanke</p>
            <p>Redefine your Style guides</p>
          </div>
        </Card>
        <Card className={classes.reasons_grid_item}>
          <h2>Collaborating with Top Companies</h2>
          <p>
            Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
            consectetuer dolor ornare dapibus enim
          </p>
        </Card>
        <div className={classes.black_cards}>
          <div>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim
            </p>
            <p>
              Read more
              <img src="images/arrow.png" alt="" />
            </p>
          </div>
          <div>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim
            </p>
            <p>
              Read more
              <img src="images/arrow.png" alt="" />
            </p>
          </div>
          <div>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim
            </p>
            <p>
              Read more
              <img src="images/arrow.png" alt="" />
            </p>
          </div>
        </div>
      </div>
      <section>
        <h3>Ready to get started?</h3>
        <Button className={classes.cta}>Hire Top Talent</Button>
      </section>
    </div>
  );
};

export default Reasons;
