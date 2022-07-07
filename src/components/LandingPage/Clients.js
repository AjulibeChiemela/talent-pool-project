import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Clients.module.scss";
const Clients = () => {
  return (
    <div className={classes.clients}>
      <h2>Hear from Our Clients</h2>
      <div className={classes.clients_div}>
        <Card className={classes.client_card}>
          <div>
            <img src="images/quote.png" alt="" />
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim er dolor ornare
              dapibus enim Suscipit libero pretium nullam potenti. Interdum,
              blandit phasellus
            </p>
          </div>
          <div>
            <img src="images/ellipse90.png" alt="" />
            <div className={classes.client_card_foot}>
              <p>Adeleke Oluwakemi</p>
              <p>
                CEO at <span>Facebook</span>
              </p>
            </div>
          </div>
        </Card>
        <Card className={classes.client_card}>
          <div>
            <img src="images/quote.png" alt="" />
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim er dolor ornare
              dapibus enim
            </p>
          </div>
          <div>
            <img src="images/ellipse90.png" alt="" />
            <div className={classes.client_card_foot}>
              <p>Adeleke Oluwakemi</p>
              <p>
                CEO at <span>Facebook</span>
              </p>
            </div>
          </div>
        </Card>
        <Card className={classes.client_card}>
          <div>
            <img src="images/quote.png" alt="" />
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim er dolor ornare
              dapibus enim
            </p>
          </div>
          <div>
            <img src="images/ellipse90.png" alt="" />
            <div className={classes.client_card_foot}>
              <p>Adeleke Oluwakemi</p>
              <p>
                CEO at <span>Facebook</span>
              </p>
            </div>
          </div>
        </Card>
      </div>
      <Button className={classes.client_btn}>{`View More >`}</Button>
    </div>
  );
};

export default Clients;
