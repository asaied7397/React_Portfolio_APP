import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import Profile_img from "../../assets/profile_img3.jpg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={Profile_img} alt="" />
      <h1>
        <span>I'm Ahmed Saied,</span> Frontend Developer Based in Egypt.
      </h1>
      <p>
        I am a frontend developer from Cairo, Egypt with 2 Years of experience
        in multiple companies.
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor" offset={50} href="#contact">
          <div className="hero-connect">Connect With Me</div>
        </AnchorLink>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
