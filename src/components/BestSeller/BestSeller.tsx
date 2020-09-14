import React, { useState } from "react";
import { Link } from "react-router-dom";
function BestSeller() {
  const [show, setShow] = useState({ display: "none" });
  const [teah1, setTeah1] = useState({ display: "none" });
  const [snacksh1, setSnacksh1] = useState({ display: "none" });
  return (
    <div className="best-seller">
      <div className="best-seller-title">
        <h1>Our Products</h1>
      </div>
      <div className="products-in-best-seller-1">
        <div className="coffee-in-best-seller">
          <div
            className="coffee-seeds"
            onMouseOver={() => setShow({ display: "block" })}
            onMouseLeave={() => setShow({ display: "none" })}
          >
            <Link to="/coffeecatalogue">
              <h1 style={show}>Details</h1>
            </Link>
          </div>
          <h1 className="product-name-in-best-seller">Coffee</h1>
        </div>
        <div className="tea-in-best-seller">
          <div
            className="tea-seeds"
            onMouseOver={() => setTeah1({ display: "block" })}
            onMouseLeave={() => setTeah1({ display: "none" })}
          >
            <Link to="/teacatalogue">
              <h1 style={teah1}>Details</h1>
            </Link>
          </div>
          <h1 className="product-name-in-best-seller">Tea</h1>
        </div>
      </div>
      <div className="products-in-best-seller-2">
        <div className="snacks-in-best-seller">
          <div
            className="snacksproducts"
            onMouseOver={() => setSnacksh1({ display: "block" })}
            onMouseLeave={() => setSnacksh1({ display: "none" })}
          >
            <Link to="/snackscatalogue">
              <h1 style={snacksh1}>Details</h1>
            </Link>
          </div>
          <h1 className="product-name-in-best-seller">Snacks</h1>
        </div>
        <div className="all-products">
          <div className="all-products-box">
            <Link
              to="/allproductscatalogue"
              className="all-products-best-seller"
            >
              <h1>All Products</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
