import React from "react";
import Card from "../UI/Card";
import classes from "./Hire.module.scss";

const Hire = () => {
  return (
    <div className={classes.hire}>
      <section className={classes.hire_steps}>
        <h2>Hire in Inters 3 Steps</h2>
        <div className={classes.hire_steps_wrap}>
          <div>
            <img src="images/one.png" alt="" />
            <p>Create Profile</p>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus
            </p>
          </div>
          <div>
            <img src="images/two.png" alt="" />
            <p>Post Request</p>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus
            </p>
          </div>
          <div>
            <img src="images/three.png" alt="" />
            <p>Discover and Hire</p>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus
            </p>
          </div>
        </div>
      </section>
      <section className={classes.hire_talents}>
        <h2>Hire the Best Talents</h2>
        <p>
          Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
          consectetuer dolor ornare dapibus enim
        </p>
        <div className={classes.hire_talents_grid}>
          <Card className={classes.hire_talents_card}>
            <img src="images/ui.png" alt="" />
            <h3>UI/UX Designers</h3>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim{" "}
            </p>
          </Card>
          <Card className={classes.hire_talents_card}>
            <img src="images/operations.png" alt="" />
            <h3>Operations</h3>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim{" "}
            </p>
          </Card>
          <Card className={classes.hire_talents_card}>
            <img src="images/mobile.png" alt="" />
            <h3>Mobile Developers</h3>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim{" "}
            </p>
          </Card>
          <Card className={classes.hire_talents_card}>
            <img src="images/frontend.png" alt="" />
            <h3>Frontend Developers</h3>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim{" "}
            </p>
          </Card>
          <Card className={classes.hire_talents_card}>
            <img src="images/backend.png" alt="" />
            <h3>Backend Developers</h3>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim{" "}
            </p>
          </Card>
          <Card className={classes.hire_talents_card}>
            <img src="images/product.png" alt="" />
            <h3>Product Managers</h3>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim{" "}
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Hire;
