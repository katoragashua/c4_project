import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Logo from "../assets/images/logo.svg";

import hamburger from "../assets/images/hamburger.svg";

const Header = () => {
  const [dropDown, setDropDown] = useState(() => "");

  useEffect(() => {
    setDropDown(false);
  }, []);

  const handleDropDown = () => setDropDown((prev) => !prev);
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <Nav dropDown={dropDown} />
        <img
          src={hamburger}
          alt=""
          className="hamburger"
          onClick={handleDropDown}
        />
      </div>
    </header>
  );
};

export default Header;
