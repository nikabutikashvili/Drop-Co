import React from "react";
import coffeegreen from "../../images/coffeegreen.jpg";
import barred from "../../images/barred.jpg";
import { Link } from "react-router-dom";
function DailyUpdates() {
  return (
    <div className="daily-updates">
      <div className="left-panel">
        <h1>Boost Your Energy</h1>
        <p>
          Sing Up to get exclusive access to deals on drinks this holiday season
        </p>
      </div>
      <div className="right-panel">
        <Link to="/getyourdiscount">
          <button className="discount-button">Get Your Discount</button>
        </Link>
      </div>
      <div className="right-background"></div>
    </div>
  );
}

export default DailyUpdates;
