import React, { useState } from "react";
import { Link } from "react-router-dom";
import coffeemachine from "../../images/coffeemachine.jpg";
import teacup from "../../images/teacup.jpg";
import snacks from "../../images/snacks.jpg";
import allproducts from "../../images/allproducts.jpg";
function BestSeller() {
  const [show, setShow] = useState({ display: "none" });
  const [teah1, setTeah1] = useState({ display: "none" });
  const [snacksh1, setSnacksh1] = useState({ display: "none" });
  return (
    <div className="our-products-container">
      <div className="our-products">
        <h1>Our Products</h1>
        <div className="products-kinds">
          <Link to="coffeecatalogue" className="coffee">
            <img src={coffeemachine} />
            <h1>Coffee</h1>
            <p>
              Different types of Coffee for different types of people. Start
              your daily routine with Drop-Co and make the day successfull
            </p>
          </Link>
          <Link to="teacatalogue" className="tea">
            <img src={teacup} />
            <h1>Tea</h1>
            <p>
              Different types of Coffee for different types of people. Start
              your daily routine with Drop-Co and make the day successfull
            </p>
          </Link>
        </div>
        <div className="products-kinds">
          <Link to="snacks-catalogue" className="snacks">
            <img src={snacks} />
            <h1>Snacks</h1>
            <p>
              Different types of Coffee for different types of people. Start
              your daily routine with Drop-Co and make the day successfull
            </p>
          </Link>
          <Link to="allproductscatalogue" className="all-products">
            <img src={allproducts} />
            <h1>All Products</h1>
            <p>
              Different types of Coffee for different types of people. Start
              your daily routine with Drop-Co and make the day successfull
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
