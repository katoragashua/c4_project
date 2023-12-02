import React from "react";
import facebook_logo from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
import footerLogo from "../assets/images/logo-footer.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="logo">
          <img src={footerLogo} />
        </div>
        <div className="footer-nav">
          <div className="footer-links">
            <h4>Features</h4>
            <ul className="footer-list">
              <li>
                <a href="#">Link Shortening</a>
              </li>
              <li>
                <a href="#">Branded Links</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Resources</h4>
            <ul className="footer-list">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul className="footer-list">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <img src={facebook_logo} alt="facebook icon" />
            <img src={twitter} alt="twitter icon" />
            <img src={pinterest} alt="pinterest icon" />
            <img src={instagram} alt="instagram icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
