import React from "react";
import Nav from "./Nav";
import Logo from "../assets/images/logo.svg";

import hamburger from "../assets/images/hamburger.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <Nav />
        <img src={hamburger} alt="" className="hamburger" />
      </div>
    </header>
  );
};

export default Header;
