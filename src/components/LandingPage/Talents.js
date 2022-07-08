import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Talents.module.scss";
const Talents = () => {
  return (
    <div className={classes.talents}>
      <h2>Meet Our Talents</h2>
      <ul>
        <li>
          <NavLink
            to="#"
            className={({ isActive }) =>
              isActive ? `${classes.active} ${classes.li}` : `${classes.li}`
            }
          >
            Designers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="##"
            className={({ isActive }) =>
              isActive ? `${classes.active} ${classes.li}` : `${classes.li}`
            }
          >
            Developers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className={({ isActive }) =>
              isActive ? `${classes.active} ${classes.li}` : `${classes.li}`
            }
          >
            Product Managers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className={({ isActive }) =>
              isActive ? `${classes.active} ${classes.li}` : `${classes.li}`
            }
          >
            Operations
          </NavLink>
        </li>
      </ul>
      <div className={classes.talents_card_wrap}>
        <Card className={classes.talents_card}>
          <img src="images/Rectangle17.png" alt="" />
          <div className={classes.talents_text}>
            <div>
              <p>Adelanke Adelanke</p>
              <p>UI/UX Designer </p>
            </div>
            <div>
              <p>
                Suscipit libero pretium nullam potenti. Interdum, blandiSuscipit
                libero pretium nullam potenti. Interdum, blandit phasellus
                consectetuer dolor ornare
              </p>
            </div>
            <div>
              <p>
                Previously at <span>Facebook</span>
              </p>
              <img src="images/facebook.png" alt="" />
            </div>
          </div>
          <Button className={classes.talents_btn}>Visit Adelanke</Button>
        </Card>
        <Card className={classes.talents_card}>
          <img src="images/Rectangle18.png" alt="" />
          <div className={classes.talents_text}>
            <div>
              <p>Adelanke Adelanke</p>
              <p>UI/UX Designer </p>
            </div>
            <div>
              <p>
                Suscipit libero pretium nullam potenti. Interdum, blandiSuscipit
                libero pretium nullam potenti. Interdum, blandit phasellus
                consectetuer dolor ornare
              </p>
            </div>
            <div>
              <p>
                Previously at <span>Netflix</span>
              </p>
              <img src="images/netflix.png" alt="" />
            </div>
          </div>
          <Button className={classes.talents_btn}>Visit Adelanke</Button>
        </Card>
        <Card className={classes.talents_card}>
          <img src="images/Rectangle19.png" alt="" />
          <div className={classes.talents_text}>
            <div>
              <p>Adelanke Adelanke</p>
              <p>UI/UX Designer </p>
            </div>
            <div>
              <p>
                Suscipit libero pretium nullam potenti. Interdum, blandiSuscipit
                libero pretium nullam potenti. Interdum, blandit phasellus
                consectetuer dolor ornare
              </p>
            </div>
            <div>
              <p>
                Previously at <span>Barter</span>
              </p>
              <img src="images/barterlogo.png" alt="" />
            </div>
          </div>
          <Button className={classes.talents_btn}>Visit Adelanke</Button>
        </Card>
      </div>
    </div>
  );
};

export default Talents;
