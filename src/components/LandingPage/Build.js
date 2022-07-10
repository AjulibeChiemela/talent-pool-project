import React from "react";
import Card from "../UI/Card";
import classes from "./Build.module.scss";

const Build = () => {
  return (
    <div className={classes.build}>
      <section className={classes.build_text}>
        <div>
          <h2>Build Amazing Teams on Demand</h2>
          <p>Suscipit libero pretium nullam potenti. Interdum</p>
        </div>
        <div className={classes.build_grid}>
          <div>
            <div>
              <img src="images/image21.png" alt="" />
              <p className={classes.build_heading_p}>Hire the Best</p>
            </div>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim
            </p>
          </div>
          <div>
            <div>
              <img src="images/image22.png" alt="" />
              <p className={classes.build_heading_p}>A Level Talents</p>
            </div>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim
            </p>
          </div>
          <div>
            <div>
              <img src="images/image23.png" alt="" />
              <p className={classes.build_heading_p}>100% Guaranted</p>
            </div>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim
            </p>
          </div>
          <div>
            <div>
              <img src="images/image24.png" alt="" />
              <p className={classes.build_heading_p}>Specialized Skills</p>
            </div>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim
            </p>
          </div>
        </div>
        <div></div>
      </section>
      <section className={classes.build_images}>
        <Card className={classes.img_card}>
          <img src="images/adelanke1.png" alt="" />
          <div className={classes.wrap_div}>
            <div className={classes.card_text}>
              <p>Adelanke Adelanke</p>
              <p>UI/UX Designer </p>
            </div>
            <div>
              <p>Previously at </p>
              <img src="images/barterlogo.png" alt="" />
            </div>
          </div>
        </Card>
        <Card className={classes.img_card}>
          <img src="images/adelanke2.png" alt="" />
          <div className={classes.wrap_div}>
            <div className={classes.card_text}>
              <p>Adelanke Adelanke</p>
              <p>UI/UX Designer </p>
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
              <p>UI/UX Designer </p>
            </div>
            <div>
              <p>Previously at </p>
              <img src="images/barterlogo.png" alt="" />
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Build;
