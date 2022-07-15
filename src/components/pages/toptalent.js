import React from "react";
import { Link } from "react-router-dom";
import classes from "./toptalent.module.scss";

const Toptalent = () => {
  return (
    <div className={classes.talentCont}>
      <div className={classes.recttext}>
        <div className={classes.recttext_overlay}>
          <h1>Our Top Talents</h1>
          <p>
            These talents have thrived in their different fields and are
            frquently hired by companies
          </p>
        </div>
      </div>
      <div className={classes.talent_grid}>
        <div>
          <img src="images/id1.png" alt="id1" className={classes.topimg} />
          <h3 className={classes.topname}>Meyene Udoh</h3>
          <h4 className="">mobile developer</h4>
          <p>Lagos,Nigeria</p>
          <p>
            Experienced mobile app developer who has a track record of success
            creating apps that are both well-received and commercially viable.
            Skilled with working as a team and incorporating input into
            projects.
          </p>
          <Link to="#" className={classes.toplink}>
            view details
          </Link>{" "}
          <img src="images/toptalarrow.png" alt="" />
          <br></br>
          <br></br>
          <div className={classes.icons}>
            <img src="images/il_twitter.png" alt="" className="" />
            <img src="images/dribble.png" alt="" className="" />
            <img src="images/behance.png" alt="" className="" />
          </div>
        </div>

        <div>
          <img src="images/id2.png" alt="id2" className={classes.topimg} />
          <h3 className={classes.topname}>Genesis Anosike</h3>
          <h4 className={classes.topskill}>UI/UX Designer</h4>
          <p>Abuja, Nigeria</p>
          <p>
            I love designing elegant and engaging product experiences for
            humans. I thrive on the challenge of leading interaction and visual
            design efforts with product and development.
          </p>
          <Link to="#" className={classes.toplink}>
            view details
          </Link>{" "}
          <img src="images/toptalarrow.png" alt="" />
          <br></br>
          <br></br>
          <div className={classes.icons}>
            <img src="images/il_twitter.png" alt="" className="" />
            <img src="images/dribble.png" alt="" className="" />
            <img src="images/behance.png" alt="" className="" />
          </div>
        </div>

        <div>
          <img src="images/id3.png" alt="id3" className={classes.topimg} />
          <h3 className={classes.topname}>Nifemi Adebayo</h3>
          <h4 className={classes.topskill}>Backend Developer</h4>
          <p>Port Harcourt, Nigeria</p>
          <p>
            I have 3 years experience. I create, code, and improve the server,
            server-side applications, and databases that, when combined with
            front-end codes, help create a functional, seamless experience for
            the end-user.
          </p>
          <Link to="#" className={classes.toplink}>
            view details
          </Link>{" "}
          <img src="images/toptalarrow.png" alt="" />
          <br></br>
          <br></br>
          <div className={classes.icons}>
            <img src="images/il_twitter.png" alt="" className="" />
            <img src="images/dribble.png" alt="" className="" />
            <img src="images/behance.png" alt="" className="" />
          </div>
        </div>

        <div>
          <img src="images/id4.png" alt="id4" className={classes.topimg} />
          <h3 className={classes.topname}>Jaden Tega</h3>
          <h4 className={classes.topskill}>mobile developer</h4>
          <p>Lagos,Nigeria</p>
          <p>
            Experienced mobile app developer who has a track record of success
            creating apps that are both well-received and commercially viable.
            Skilled with working as a team and incorporating input into
            projects.
          </p>
          <Link to="#" className={classes.toplink}>
            view details
          </Link>{" "}
          <img src="images/toptalarrow.png" alt="" />
          <br></br>
          <br></br>
          <div className={classes.icons}>
            <img src="images/il_twitter.png" alt="" className="" />
            <img src="images/dribble.png" alt="" className="" />
            <img src="images/behance.png" alt="" className="" />
          </div>
        </div>

        <div>
          <img src="images/id5.png" alt="id5" className={classes.topimg} />
          <h3 className={classes.topname}>Julia Orji</h3>
          <h4 className={classes.topskill}>Frontend Developer</h4>
          <p>Akwa Ibom, Nigeria</p>
          <p>
            i implementing visual and interactive elements that users engage
            with through their web browser when using a web application. which
            are supported by back-end web developer.
          </p>
          <Link to="#" className={classes.toplink}>
            view details
          </Link>{" "}
          <img src="images/toptalarrow.png" alt="" />
          <br></br>
          <br></br>
          <div className={classes.icons}>
            <img src="images/il_twitter.png" alt="" className="" />
            <img src="images/dribble.png" alt="" className="" />
            <img src="images/behance.png" alt="" className="" />
          </div>
        </div>

        <div>
          <img src="images/id6.png" alt="id6" className={classes.topimg} />
          <h3 className={classes.topname}>Oluwakemi Adeleke</h3>
          <h4 className={classes.topskill}>Frontend Developer</h4>
          <p>Lagos,Nigeria</p>
          <p>
            i implementing visual and interactive elements that users engage
            with through their web browser when using a web application. which
            are supported by back-end web developer.
          </p>
          <Link to="#" className={classes.toplink}>
            view details
          </Link>{" "}
          <img src="images/toptalarrow.png" alt="" />
          <br></br>
          <br></br>
          <div className={classes.icons}>
            <img src="images/il_twitter.png" alt="" className="" />
            <img src="images/dribble.png" alt="" className="" />
            <img src="images/behance.png" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toptalent;
