import React from "react";
import recognition from "../assets/images/icon-brand-recognition.svg";
import records from "../assets/images/icon-detailed-records.svg";
import customizable from "../assets/images/icon-fully-customizable.svg";
import Boost from "./Boost";

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-text">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="stats-cards">
          <div className="recognition card">
            <span className="card-img">
              <img src={recognition} alt="brand recognition icon" />
            </span>
            <h4>Brand Recognition</h4>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="records card">
            <span className="card-img">
              <img src={records} alt="detailed records" />
            </span>
            <h4>Detailed Records</h4>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="customizable card">
            <span className="card-img">
              <img src={customizable} alt="fully customizable icon" />
            </span>
            <h4>Fully Customizable</h4>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
