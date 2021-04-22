import * as React from "react";

import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

const InsideProductComponent = (props: any) => {
  const {
    name,
    price,
    calories,
    image,
    number,
    id,
    reviews,
    energy,
    fat,
  } = props.location.state;
  const [cart, setCart] = React.useContext(CartContext);
  const [currentNumber, setCurrentNumber] = React.useState(0);

  const addToCart = () => {
    if (cart.length === 0) {
      const addedProduct = {
        name: name,
        img: image,
        price: price,
        number: number,
      };
      setCart((currentCart: any) => [...currentCart, addedProduct]);
      setCurrentNumber(1);
    } else {
      for (let index = 0; index < cart.length; index++) {
        if (cart[index].name === name) {
          let newCart = [...cart];
          newCart[index].number = cart[index].number + 1;
          setCurrentNumber(newCart[index].number);
          setCart(newCart);
          break;
        } else if (index + 1 === cart.length) {
          const addedProduct = {
            name: name,
            img: image,
            price: price,
            number: number,
          };
          setCart((currentCart: any) => [...currentCart, addedProduct]);
        }
      }
    }
  };
  const handleDeleteProduct = (name: string): void => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        if (cart[i].number > 1) {
          let newCart = [...cart];
          newCart[i].number = cart[i].number - 1;
          setCurrentNumber(newCart[i].number);
          setCart(newCart);
        } else {
          let array = [...cart];
          array.splice(i, 1);
          setCurrentNumber(0);
          setCart(array);
        }
      }
    }
  };

  return (
    <>
      <div className="insideproduct">
        <div className="insideproductleft">
          <div className="box-top">
            <h1>{name}</h1>
            <div className="productcircle">
              <img className="product-icon" src={image} />
            </div>
          </div>
          <div className="box-bottom">
            <h3>{currentNumber && "x" + currentNumber}</h3>
          </div>
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
            <h3>Energy: {energy} </h3>
          </div>
          <div className="characteristic-item">
            <h3>Fat: {fat}</h3>
          </div>
        </div>
      </div>
      <div className="product-bottom-navigation">
        <div className="product-bottom-naviation-section">
          <button className="btn" onClick={addToCart}>
            Add to Cart
          </button>
          <button className="btn" onClick={() => handleDeleteProduct(name)}>
            Delete from Cart
          </button>
        </div>
        <div className="product-bottom-naviation-section">
          <Link to="/basket">
            <button className="btn">Go to your Cart</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default InsideProductComponent;
