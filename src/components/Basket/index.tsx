import * as React from "react";

import BasketBox from "./_Common/BasketBox";
import { CartContext } from "../Products/CartContext";
import { DiscountContext } from "../GetYourDiscount/DiscountContext";

import "./styles.css";

export interface Item {
  price: number;
  number: number;
}

const Basket: React.FC = () => {
  const [cart, setCart] = React.useContext(CartContext);
  const [Discount] = React.useContext(DiscountContext);

  let totalSum = 0;
  cart.map((item: Item) => {
    return (totalSum = totalSum + item.price * item.number);
  });

  const handleDeleteProduct = (name: string): void => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        if (cart[i].number > 1) {
          let newCart = [...cart];
          newCart[i].number = cart[i].number - 1;
          setCart(newCart);
        } else {
          let array = [...cart];
          array.splice(i, 1);
          setCart(array);
        }
      }
    }
  };

  const handleAddProduct = (name: string): void => {
    for (let index = 0; index < cart.length; index++) {
      if (cart[index].name === name) {
        let newCart = [...cart];
        newCart[index].number = cart[index].number + 1;
        setCart(newCart);
      }
    }
  };

  return (
    <div className="basket-section">
      <div className="cart-items">
        {cart.length > 0 ? (
          <>
            <div className="basket-box">
              <div className="cart-item" />
              <p className="cart-item">Name</p>
              <p className="cart-item">Price</p>
              <p className="cart-item">Quantity</p>
              <p className="cart-item">Delete</p>
              <p className="cart-item">Add</p>
            </div>
            <BasketBox
              cart={cart}
              handleAddProduct={handleAddProduct}
              handleDeleteProduct={handleDeleteProduct}
            />
          </>
        ) : null}
      </div>
      <div className="payment">
        <h1>
          Total Sum: $ {Discount > 0 ? (totalSum * 0.8).toFixed(2) : totalSum}
        </h1>
        <button className="btn">Check Out</button>
      </div>
    </div>
  );
};

export default Basket;
