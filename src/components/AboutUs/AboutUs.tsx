import React from "react";
import { animated, useSpring } from "react-spring";
import coffeeshop from "../../images/coffeeshop.jpeg";
function AboutUs() {
  const leftAnimation = useSpring({
    from: {
      marginLeft: "-500px",
    },
    to: {
      marginLeft: "0px",
    },
  });
  return (
    <div className="about-us">
      <animated.div style={leftAnimation} className="about-us-text">
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
      </animated.div>
      <div className="about-us-image">
        <img className="coffee-shop-image" src={coffeeshop} alt="coffeeshop" />
      </div>
      <div className="background-cover"></div>
    </div>
  );
}

export default AboutUs;
