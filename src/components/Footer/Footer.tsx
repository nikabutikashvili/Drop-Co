import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import snapchat from "../../images/snapchat.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="column-1">
          <div className="logo-in-footer-box">
            <img className="logo-in-footer" src={logo} alt="logo" />
          </div>
          <div className="social-media-box">
            <img
              className="social-media-icon"
              src={facebook}
              alt="facebook-icon"
            />
            <img
              className="social-media-icon"
              src={instagram}
              alt="instagram-icon"
            />
            <img
              className="social-media-icon"
              src={twitter}
              alt="twitter-icon"
            />
            <img
              className="social-media-icon last-icon"
              src={snapchat}
              alt="snapchat-icon"
            />
          </div>
        </div>
        <div className="column-2">
          <ul className="footer-list-1">
            <Link to="/">
              <li>Main Page</li>
            </Link>
            <Link to="/aboutus">
              <li>About Us</li>
            </Link>
            <Link to="/Contact">
              <li>Contact</li>
            </Link>
            <Link to="/">
              <li>Career</li>
            </Link>
            <Link to="/">
              <li>Privacy</li>
            </Link>
          </ul>
          <ul className="footer-list-2">
            <Link to="/coffeecatalogue">
              <li>Coffee</li>
            </Link>
            <Link to="/teacatalogue">
              <li>Tea</li>
            </Link>
            <Link to="/snackscatalogue">
              <li>Snacks</li>
            </Link>
            <Link to="/">
              <li>Best Sellers</li>
            </Link>
            <Link to="/">
              <li>Discounts</li>
            </Link>
          </ul>
        </div>
        <div className="column-3">
          <Link to="/contact">
            <button className="feedback-btn-footer btn">
              Gives Us Your Feedback
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
