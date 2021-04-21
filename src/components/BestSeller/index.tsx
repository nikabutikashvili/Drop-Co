import * as React from "react";

import ProductBar from "./ProductBar";

import coffeemachine from "../../assets/images/coffeemachine.jpg";
import teacup from "../../assets/images/teacup.jpg";
import snacks from "../../assets/images/snacks.jpg";
import allproducts from "../../assets/images/allproducts.jpg";

import "./styles.css";

const BestSeller: React.FC = () => {
  return (
    <div className="our-products-container">
      <div className="our-products">
        <h1>Our Products</h1>
        <div className="products-kinds">
          <ProductBar
            link="coffeecatalogue"
            className="coffee"
            img={coffeemachine}
            title="Coffee"
            text="Different types of Coffee for different types of people. Start
              your daily routine with Drop-Co and make the day successfull"
          />
          <ProductBar
            link="teacatalogue"
            className="tea"
            img={teacup}
            title="Tea"
            text="Different types of Coffee for different types of people. Start
              your daily routine with Drop-Co and make the day successfull"
          />
        </div>
        <div className="products-kinds">
          <ProductBar
            link="snackscatalogue"
            className="snacks"
            img={snacks}
            title="Snacks"
            text="Different types of Coffee for different types of people. Start
              your daily routine with Drop-Co and make the day successfull"
          />
          <ProductBar
            link="allproductscatalogue"
            className="all-products"
            img={allproducts}
            title="All Products"
            text="Different types of Coffee for different types of people. Start
              your daily routine with Drop-Co and make the day successfull"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
