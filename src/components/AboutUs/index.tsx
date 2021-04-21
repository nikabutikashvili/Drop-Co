import React from "react";
import coffeeshop from "../../assets/images/coffeeshop.jpeg";

import "./styles.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-text">
        <h1>About Us</h1>
        <div className="about-us-story">
          <p>
            We have traditional breakfast choices, including eggs and pancakes,
            and plenty of healthy options (including gluten free, vegetarian,
            and vegan). Our lunch offerings include a wide variety of salads,
            sandwiches and flatbreads. And as for the late nighters… we know
            you’ll appreciate having a spot for your dessert fix as well as a
            spiked coffee.
          </p>
        </div>
      </div>
      <div className="about-us-image">
        <img className="coffee-shop-image" src={coffeeshop} alt="coffeeshop" />
      </div>
      <div className="background-cover"></div>
    </div>
  );
};

export default AboutUs;
