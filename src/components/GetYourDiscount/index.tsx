import React, { useContext } from "react";
import { DiscountContext } from "./DiscountContext";

function GetYourDiscount() {
  const random = Math.floor(Math.random() * 1000000);
  const [Discount, setDiscount] = useContext(DiscountContext);
  setDiscount(1);

  return (
    <div className="discount-container">
      <div className="discount-box">
        <h1>Your Discount Number is:</h1>
        <h2>{random}</h2>
      </div>
    </div>
  );
}

export default GetYourDiscount;
