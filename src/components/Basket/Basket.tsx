import React, { useContext } from "react";
import BasketBox from "./BasketBox";
import { CartContext } from "../Products/CartContext";
import { DiscountContext } from "../GetYourDiscount/DiscountContext";

function Basket() {
  const [cart, setCart] = useContext(CartContext);
  const [Discount, setDiscount] = useContext(DiscountContext);
  let totalSum = 0;
  cart.map((item: any) => {
    totalSum = totalSum + item.price * item.number;
  });
  function handleDeleteProduct(name: string) {
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
  }
  function handleAddProduct(name: string) {
    for (let index = 0; index < cart.length; index++) {
      if (cart[index].name === name) {
        let newCart = [...cart];
        newCart[index].number = cart[index].number + 1;
        setCart(newCart);
      }
    }
  }
  return (
    <div className="basket-section">
      {cart.length > 0 ? (
        <table>
          <tr className="basket-box">
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
            <th>Add</th>
          </tr>
          {cart.map((item: any) => (
            <>
              <BasketBox
                name={item.name}
                price={item.price}
                img={item.img}
                number={item.number}
                delete={() => handleDeleteProduct(item.name)}
                add={() => handleAddProduct(item.name)}
              />
            </>
          ))}
        </table>
      ) : (
        ""
      )}
      {cart.length > 0 ? (
        <>
          {" "}
          <h1>
            Total Sum: $ {Discount > 0 ? (totalSum * 0.8).toFixed(2) : totalSum}
          </h1>
          <button className="btn">Check Out</button>
        </>
      ) : (
        <h3>There are no items in your Basket</h3>
      )}
    </div>
  );
}

export default Basket;
