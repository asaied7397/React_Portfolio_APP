import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./NavBar.css";
import { useRef } from "react";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const NavBar = () => {
  const [menu, setMenu] = React.useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} className="nav-mob-open" alt="" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          className="nav-mob-close"
          alt=""
        />
        <li>
          <AnchorLink className="anchor" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
            {menu === "home" ? <img src={underline} alt="" /> : null}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
            {menu === "about" ? <img src={underline} alt="" /> : null}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
            {menu === "services" ? <img src={underline} alt="" /> : null}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor" offset={50} href="#work">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
            {menu === "portfolio" ? <img src={underline} alt="" /> : null}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
            {menu === "contact" ? <img src={underline} alt="" /> : null}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  );
};

export default NavBar;
