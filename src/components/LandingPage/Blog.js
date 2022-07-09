import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Blog.module.scss";

const Blog = () => {
  return (
    <div className={classes.blog}>
      <h2>From Our Blog</h2>
      <section>
        <div>
          <Card className={classes.blog_card}>
            <img src="images/Rectangle17full.png" alt="" />
            <div>
              <p>
                Engineering<span>{">"}</span>Engineering
              </p>
              <h3>How to build design System</h3>
              <p>
                Suscipit libero pretium nullam potenti. Interdum, blandiSuscipit
                libero pretium nullam potenti. Interdum, blandit phasellus
                consectetuer dolor ornaretenti. Interdum, blandiSuscipit
              </p>
            </div>
            <Button className={classes.blog_btn}>Read More</Button>
          </Card>
        </div>
        <div>
          <Card className={classes.blog_card}>
            <img src="images/Rectangle17full.png" alt="" />
            <div>
              <p>
                Engineering<span>{">"}</span>Engineering
              </p>
              <h3>How to build design System</h3>
              <p>
                Suscipit libero pretium nullam potenti. Interdum, blandiSuscipit
                libero pretium nullam potenti. Interdum, blandit phasellus
                consectetuer dolor ornaretenti. Interdum, blandiSuscipit
              </p>
            </div>
            <Button className={classes.blog_btn}>Read More</Button>
          </Card>
        </div>
        <div>
          <Card className={classes.blog_card}>
            <img src="images/Rectangle17full.png" alt="" />
            <div>
              <p>
                Engineering<span>{">"}</span>Engineering
              </p>
              <h3>How to build design System</h3>
              <p>
                Suscipit libero pretium nullam potenti. Interdum, blandiSuscipit
                libero pretium nullam potenti. Interdum, blandit phasellus
                consectetuer dolor ornaretenti. Interdum, blandiSuscipit
              </p>
            </div>
            <Button className={classes.blog_btn}>Read More</Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
