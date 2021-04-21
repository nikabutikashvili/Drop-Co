import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

import Logo from "../../shared/Logo/Logo";
import FooterList from "./FooterList";

import "./styles.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="column-1">
          <Logo />
          <SocialMedia />
        </div>
        <div className="column-2">
          <FooterList />
        </div>
        <div className="column-3">
          <Link to="/contact">
            <button className="btn feedback-btn-footer">
              Gives Us Your Feedback
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
