import React from "react";
import Button from "../UI/Button";
import classes from "./AboutUs.module.scss";
// import { AiFillStar } from "react-icons/ai";
// import { FaCrown } from "react-icons/fa";
// import { BiBullseye } from "react-icons/bi";

export function AboutUs() {
  return (
    <div className={classes.about}>
      <div className={classes.hero}>
        <div className={classes.overlay}>
          <h1>
            At Talent Pool we bridge the gap between top talents <br /> and
            companies in the tech industry
          </h1>
        </div>
      </div>
      <p>
        Founded in 2020, Talent Pool is an online marketplace for HNG interns to
        offer services to employers worldwide.
      </p>

      <div className={classes.mission}>
        <div>
          <img src="images/star.png" alt="" />
          <h2>Who we are?</h2>
          <p>
            Talent Pool is made up of amazing individuals, but it’s only through
            teamwork that we achieve greatness.
          </p>
          <p>We’re honest, transparent and committed to doing what's best.</p>
        </div>
        <div>
          <img src="images/goals.png" alt="" />
          <h2>Our Goals</h2>
          <p>
            Develop our people by providing an environment that fosters
            professional growth.
          </p>
          <p> Connect employers and companies with great talents.</p>
        </div>
        <div>
          <img src="images/crown.png" alt="" />
          <h2>Our Values</h2>
          <p>Commitment. Growth. Innovation. Performance. Driven. Teamwork.</p>
        </div>
      </div>
      <div className={classes.offers}>
        <div className={classes.offers_sideimg}>
          <img src="images/aboutUspic.png" alt="" className={classes.img1} />
        </div>
        <div className={classes.offers_text}>
          <div className={classes.offers_text_heading}>
            <h2>Connect With Skilled Minds</h2>
            <p>
              We streamline recruitment process for companies. Talent Pool
              allows companies to find the perfect match for their job roles.
              Intern Library
            </p>
          </div>
          <div className={classes.offers_text_sub}>
            <img src="images/search.png" alt="" />
            <div>
              <h3>Find Top Talent Easily</h3>
              <p>
                Sign up as an employer and search for interns based track and
                skillset.
              </p>
            </div>
          </div>
          <div className={classes.offers_text_sub}>
            <img src="images/recruit.png" alt="" />
            <div>
              <h3>Recruit the Best Intern</h3>
              <p>
                Choose from the available interns and recruit the best candidate
                into your company
              </p>
            </div>
          </div>
          <div className={classes.offers_text_sub}>
            <img src="images/recruit.png" alt="" />
            <div>
              <h3>Speak With Industry Experts</h3>
              <p>
                Not sure what you’re looking for? Request for a recommendation.
              </p>
            </div>
          </div>
          <Button className={classes.offers_text_btn}>Get started</Button>
        </div>
      </div>
    </div>
  );
}
