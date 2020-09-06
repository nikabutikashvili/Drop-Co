import React from "react";
import { Link } from "react-router-dom";
function Products() {
  return (
    <div className="products">
      <div className="product-box coffe-category">
        <Link to="/coffeecatalogue">
          <img
            className="products-image"
            alt="product"
            src="https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          />
          <h3>Coffee</h3>
        </Link>
      </div>
      <div className="product-box tea-category">
        <Link to="/teacatalogue">
          <img
            className="products-image"
            alt="product"
            src="https://images.unsplash.com/photo-1498604636225-6b87a314baa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1869&q=80"
          />
          <h3>Tea</h3>
        </Link>
      </div>
      <div className="product-box snacks-category">
        <Link to="/snackscatalogue">
          <img
            className="products-image"
            alt="product"
            src="https://images.unsplash.com/photo-1517093602195-b40af9688b46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          />
          <h3>Snacks</h3>
        </Link>
      </div>
    </div>
  );
}

export default Products;
