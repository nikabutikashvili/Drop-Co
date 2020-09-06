import React, { useState } from "react";
import plus from "../../../images/plus.png";
import minus from "../../../images/minus.png";
import { CartContext } from "../../Products/CartContext";
import { useContext } from "react";

function InsideProductComponent(props: any) {
  const { name, price, calories, image } = props.location.state;
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const addedProduct = {
      name: name,
      img: image,
      price: price,
    };
    setCart((currentCart: []) => [...currentCart, addedProduct]);
  };
  const deleteFromCart = () => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        let array = [...cart];
        array.splice(i, 1);
        setCart(array);
      }
    }
  };
  return (
    <div className="insideproduct">
      <div className="insideproductleft">
        <div className="box-top">
          <h1>{name}</h1>
          <div className="productcircle">
            <div className="box-left">
              <img className="minus" src={minus} onClick={deleteFromCart} />
            </div>
            <div className="box-middle">
              <img className="product-icon" src={image} />
            </div>
            <div className="box-right">
              <img className="plus" src={plus} onClick={addToCart} />
            </div>
          </div>
        </div>
        <div className="box-bottom"></div>
      </div>
      <div className="insideproductright">
        <h1>Characteristics</h1>
        <div className="characteristic-item">
          <h3>Price: {price} </h3>
        </div>
        <div className="characteristic-item">
          <h3>Calories: {calories} </h3>
        </div>
        <div className="characteristic-item">
          <h3>Enegergy: </h3>
        </div>
        <div className="characteristic-item">
          <h3>Fat: </h3>
        </div>
      </div>
    </div>
  );
}
export default InsideProductComponent;
