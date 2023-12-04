import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Nav = ({dropDown}) => {
  return (
    <nav className={`navigation ${dropDown && "drop-down"}`} >
      
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
      <hr />
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
