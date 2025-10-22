import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import man_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footertop">
        <div className="footertop-left">
          <img src={logo} alt="" />
          <p>
            Iam a frontend developer from, Egypt With 2+ Years of experience in
            companies like Microsoft, Tesla and Apple.
          </p>
        </div>
        <div className="footertop-right">
          <div className="footer-email-info">
            <img src={man_icon} alt="" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footerbottom">
        <div className="footerbottom-left">
          <p>&copy; 2024 ASaied. All rights reserved.</p>
        </div>
        <div className="footerbottom-right">
          <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
            <li>Connect With me</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
