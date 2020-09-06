import React, { useContext } from "react";
import BasketBox from "./BasketBox";
import { CartContext } from "../Products/CartContext";
import { DiscountContext } from "../GetYourDiscount/DiscountContext";

function Basket() {
  const [cart, setCart] = useContext(CartContext);
  const [Discount, setDiscount] = useContext(DiscountContext);
  let totalSum = 0;
  cart.map((item: any) => {
    totalSum = totalSum + item.price;
  });
  function handleDeleteProduct(name: any) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        let array = [...cart];
        array.splice(i, 1);
        setCart(array);
      }
    }
  }
  return (
    <div className="basket-section">
      {cart.map((item: any) => (
        <>
          <BasketBox
            name={item.name}
            price={item.price}
            img={item.img}
            delete={() => handleDeleteProduct(item.name)}
          />
        </>
      ))}
      <h1>
        Total Sum: {Discount > 0 ? (totalSum * 0.8).toFixed(2) : totalSum}
      </h1>
      <button>Check Out</button>
    </div>
  );
}

export default Basket;
