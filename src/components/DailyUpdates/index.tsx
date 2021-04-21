import * as React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const DailyUpdates: React.FC = () => {
  return (
    <div className="daily-updates">
      <div className="left-panel">
        <h1>Boost Your Energy</h1>
        <p>
          Sing Up to get exclusive access to deals on drinks this holiday season
        </p>
        <div className="achievement">
          <div className="achivement-item">
            <h1>150</h1>
            <p>people employed</p>
          </div>
          <div className="achivement-item">
            <h1>27</h1>
            <p>places to visit us</p>
          </div>
        </div>
      </div>
      <div className="right-panel">
        <Link to="/getyourdiscount">
          <button className="discount-button">Get Your Discount</button>
        </Link>
      </div>
      <div className="right-background"></div>
    </div>
  );
};

export default DailyUpdates;
