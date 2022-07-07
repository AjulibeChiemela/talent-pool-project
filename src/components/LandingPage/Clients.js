import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Clients.module.scss";
const Clients = () => {
  return (
    <div className={classes.clients}>
      <h2>Hear from Our Clients</h2>
      <div>
        <Card className={classes.client_card}></Card>
      </div>
      <Button className={classes.client_btn}>{`View More >`}</Button>
    </div>
  );
};

export default Clients;
