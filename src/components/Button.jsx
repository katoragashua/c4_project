import React from "react";

const Button = ({ text }) => {
  let class_name = "";
  switch (text) {
    case "Sign Up":
      class_name = "sign-up";
      break;
    case "Get Started":
      class_name = "get-started";
      break;
    case "Shorten It!":
      class_name = "shorten-it";
      break;
    default:
      break;
  }
  return <button className={`btn ${class_name}`}>{text}</button>;
};

export default Button;
