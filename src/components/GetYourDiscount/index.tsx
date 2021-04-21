import * as React from "react";
import { DiscountContext } from "./DiscountContext";

import "./styles.css";

const GetYourDiscount: React.FC = () => {
  const random = Math.floor(Math.random() * 1000000);
  const [Discount, setDiscount] = React.useContext(DiscountContext);
  React.useEffect(() => {
    setDiscount(1);
  }, []);

  return (
    <div className="discount-container">
      <div className="discount-box">
        <h1>Your Discount Number is:</h1>
        <h2>{random}</h2>
      </div>
    </div>
  );
};

export default GetYourDiscount;
