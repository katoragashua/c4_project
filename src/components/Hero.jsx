import React from "react";
import Button from "./Button";
import urlBgDesktop from "../assets/images/bg-shorten-desktop.svg";
import heroIllustration from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <section className="hero container">
      <img className="hero-img" src={heroIllustration} alt="" />
      <div className="hero-text">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        <Button text={"Get Started"} />
      </div>

      <div className="url-shortener-div">
        <form action="">
          <input
            type="text"
            name="url"
            id="url"
            placeholder="Shorten a link here..."
          />
          <Button text={"Shorten It!"} />
        </form>
      </div>
    </section>
  );
};

export default Hero;
