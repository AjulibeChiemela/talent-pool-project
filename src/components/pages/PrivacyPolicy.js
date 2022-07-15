import React from "react";
import classes from "./PrivacyPolicy.module.scss";

const PrivacyPolicy = () => {
  return (
    <div className={classes.privacy}>
      <div className={classes.privacy_bg}>
        <img src="images/termsbg.png" alt="" />
      </div>
      <div className={classes.privacy_text_wrap}>
        <div className={classes.privacy_text}>
          <h1>PRIVACY POLICY</h1>
          <main>
            <h2>Last updated: 15th July, 2022.</h2>
            <p>
              Fund my Laptop operates http://www.mysite.com (change this) (the
              "Site"). This page informs you of our policies regarding the
              collection, use and disclosure of Personal Information we receive
              from users of the Site.
            </p>
            <p>
              We use your Personal Information only for providing and improving
              the Site. By using the Site, you agree to the collection and use
              of information in accordance with this policy.
            </p>
            <div>
              <h3>Information Collection And Use</h3>
              <p>
                While using our Site, we may ask you to provide us with certain
                personally identifiable information that can be used to contact
                or identify you. Personally identifiable information may
                include, but is not limited to your name ("Personal
                Information").
              </p>
            </div>
            <div>
              <h3>Log Data</h3>
              <p>
                This Log Data may include information such as your computer's
                Internet Protocol ("IP") address, browser type, browser version,
                the pages of our Site that you visit, the time and date of your
                visit, the time spent on those pages and other statistics.
              </p>
              <p>
                businesses that use analytics or tracking services in websites
                or apps, like Google Analytics. For the full disclosure section,
                create your own Privacy Policy.
              </p>
            </div>
            <div>
              <h3>Communications</h3>
              <p>
                We may use your Personal Information to contact you with
                newsletters, marketing or promotional materials and other
                information that ...
              </p>
              <p>
                The Communications section is for businesses that may contact
                users via email (email newsletters) or other methods. For the
                full disclosure section, create your own Privacy Policy.
              </p>
            </div>
            <div>
              <h3>Cookies</h3>
              <p>
                Cookies are files with small amount of data, which may include
                an anonymous unique identifier. Cookies are sent to your browser
                from a web site and stored on your computer's hard drive.
              </p>
              <p>
                Like many sites, we use "cookies" to collect information. You
                can instruct your browser to refuse all cookies or to indicate
                when a cookie is being sent. However, if you do not accept
                cookies, you may not be able to use some portions of our Site.
              </p>
            </div>
            <div>
              <h3>Security</h3>
              <p>
                The security of your Personal Information is important to us,
                but remember that no method of transmission over the Internet,
                or method of electronic storage, is 100% secure. While we strive
                to use commercially acceptable means to protect your Personal
                Information, we cannot guarantee its absolute security.
              </p>
            </div>
            <div>
              <h3>Changes To This Privacy Policy</h3>
              <p>
                This Privacy Policy is effective as of (add date) and will
                remain in effect except with respect to any changes in its
                provisions in the future, which will be in effect immediately
                after being posted on this page.
              </p>
              <p>
                We reserve the right to update or change our Privacy Policy at
                any time and you should check this Privacy Policy periodically.
                Your continued use of the Service after we post any
                modifications to the Privacy Policy on this page will constitute
                your acknowledgment of the modifications and your consent to
                abide and be bound by the modified Privacy Po
              </p>
              <p>
                make any material changes to this Privacy Policy, we will notify
                you either through the email address you have provided us, or by
                placing a prominent notice on our website.
              </p>
            </div>
            <div>
              <h3>Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
