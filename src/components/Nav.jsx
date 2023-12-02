import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import hamburger from "../assets/images/hamburger.svg";

const Nav = () => {
  return (
    <nav className="navigation">
      
      <div className="nav">
        <ul>
          <NavLink>Features</NavLink>
        </ul>
        <ul>
          <NavLink>Pricing</NavLink>
        </ul>
        <ul>
          <NavLink>Resources</NavLink>
        </ul>
      </div>
      <div className="auth">
        <ul>
          <NavLink>Login</NavLink>
        </ul>
        <ul>
          <Button text={"Sign Up"}/>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
