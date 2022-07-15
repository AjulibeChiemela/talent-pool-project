import React, { useState } from "react";
import Sidebar from "./Sidebar";
import classes from "./Dashboard.module.scss";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {
  props.displayNavFoot(false);
  const navigate = useNavigate();
  const [showSignOut, setShowSignOut] = useState(false);
  const handleShowSignOut = () => {
    setShowSignOut(!showSignOut);
  };
  const handleSignOut = () => {
    props.displayNavFoot(true);
    navigate("/");
  };
  return (
    <div className={classes.dashboard}>
      <Sidebar className={classes.side_bar} />
      <div className={classes.main}>
        <div className={classes.nav}>
          <div className={classes.nav_main}>
            <img src="images/bell.png" alt="" className={classes.nav_icon} />
            <div className={classes.nav_userInfo}>
              <img src="images/dashpic1.png" alt="" />
              <div>
                <p>Adelanke Adelanke</p>
                <p>Employer</p>
              </div>
              <img
                src="images/dropdown.png"
                alt=""
                className={classes.nav_icon}
                onClick={handleShowSignOut}
              />
            </div>
          </div>
          {showSignOut && (
            <div className={classes.nav_signout}>
              <Button className={classes.signout_btn} onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          )}
        </div>
        <div className={classes.main_text}>
          <div className={classes.main_top_section}>
            <div>
              <h2>Goal Remainder</h2>
              <Card className={classes.dashboard_card}>
                <div>
                  <div>
                    <h4>Technical Product Manager</h4>
                    <div className={classes.card_foot}>
                      <p>PM</p>
                      <p>3</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h4>User Experience designer</h4>
                    <div className={classes.card_foot}>
                      <p>DESIGN</p>
                      <p>8</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h4>NodeJS, Laravel developer</h4>
                    <div className={classes.card_foot}>
                      <p>BACKEND</p>
                      <p>1</p>
                    </div>
                  </div>
                </div>
                <p className={classes.card_link}>{`See all hire goals >`}</p>
              </Card>
            </div>
            <div>
              <h2>Pending Hire</h2>
              <Card className={`${classes.dashboard_card} ${classes.img_card}`}>
                <div>
                  <img src="images/dashpic2.png" alt="" />
                  <div>
                    <h4>Danny Smith</h4>
                    <div className={classes.card_foot}>
                      <p>Frontend developer</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src="images/dashpic2.png" alt="" />
                  <div>
                    <h4>Seyi Onifade</h4>
                    <div className={classes.card_foot}>
                      <p>NodeJS developer</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src="images/dashpic2.png" alt="" />
                  <div>
                    <h4>John Doe</h4>
                    <div className={classes.card_foot}>
                      <p>Designer</p>
                    </div>
                  </div>
                </div>
                <p className={classes.card_link}>{`See all pending hires >`}</p>
              </Card>
            </div>
            <div>
              <h2>Recommended Interns</h2>
              <Card className={`${classes.dashboard_card} ${classes.img_card}`}>
                <div>
                  <img src="images/dashpic2.png" alt="" />
                  <div>
                    <h4>Danny Smith</h4>
                    <div className={classes.card_foot}>
                      <p>Frontend developer</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src="images/dashpic2.png" alt="" />
                  <div>
                    <h4>Seyi Onifade</h4>
                    <div className={classes.card_foot}>
                      <p>NodeJS developer</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src="images/dashpic2.png" alt="" />
                  <div>
                    <h4>John Doe</h4>
                    <div className={classes.card_foot}>
                      <p>Designer</p>
                    </div>
                  </div>
                </div>
                <p className={classes.card_link}>{`See all interns >`}</p>
              </Card>
            </div>
          </div>
          <div className={classes.main_bottom_section}>
            <h2>Goal Overview</h2>
            <div className={classes.bottom_section_ratings}>
              <div className={classes.bottom_section_ratings_wrap}>
                <p>Designers</p>
                <div>
                  <img src="images/rating1.png" alt="" />
                  <p>{`4/5`}</p>
                </div>
              </div>
              <div className={classes.bottom_section_ratings_wrap}>
                <p>Product Manager</p>
                <div>
                  <img src="images/rating2.png" alt="" />
                  <p>{`3/10`}</p>
                </div>
              </div>
              <div className={classes.bottom_section_ratings_wrap}>
                <p>Mobile Developer</p>
                <div>
                  <img src="images/rating3.png" alt="" />
                  <p>{`2/3`}</p>
                </div>
              </div>
              <div className={classes.bottom_section_ratings_wrap}>
                <p>Site reliability engineer</p>
                <div>
                  <img src="images/rating4.png" alt="" />
                  <p>{`4/5`}</p>
                </div>
              </div>
              <div className={classes.bottom_section_ratings_wrap}>
                <p>Frontend developer</p>
                <div>
                  <img src="images/rating5.png" alt="" />
                  <p>{`1/2`}</p>
                </div>
              </div>
              <div className={classes.bottom_section_ratings_wrap}>
                <p>Quality Assuarance</p>
                <div>
                  <img src="images/rating6.png" alt="" />
                  <p>{`4/5`}</p>
                </div>
              </div>
              <div className={classes.bottom_section_ratings_wrap}>
                <p>Backend developer</p>
                <div>
                  <img src="images/rating7.png" alt="" />
                  <p>{`2/5`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
