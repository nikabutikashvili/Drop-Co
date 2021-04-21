import React, { useState } from "react";
import plus from "../../../assets/images/plus.png";
import minus from "../../../assets/images/minus.png";
import { CartContext } from "../../Products/CartContext";
import { useContext } from "react";
import axios from "axios";

function InsideProductComponent(props: any) {
  const {
    name,
    price,
    calories,
    image,
    number,
    id,
    reviews,
  } = props.location.state;
  const [cart, setCart] = useContext(CartContext);
  const [currentNumber, setCurrentNumber] = useState();
  const [comment, setComment] = useState();
  const addToCart = () => {
    if (cart.length === 0) {
      const addedProduct = {
        name: name,
        img: image,
        price: price,
        number: number,
      };
      setCart((currentCart: any) => [...currentCart, addedProduct]);
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
  function handleDeleteProduct() {
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
  function handleChange(e: any) {
    setComment(e.currentTarget.value);
  }
  const handleAdd = async () => {
    const { data: reviews } = await axios.post(
      `http://localhost:3000/coffee/?id=${id}`,
      "This is so great"
    );
    console.log(reviews);
  };
  return (
    <>
      <div className="insideproduct">
        <div className="insideproductleft">
          <div className="box-top">
            <h1>{name}</h1>
            <div className="productcircle">
              <div className="box-left">
                <img
                  className="minus"
                  src={minus}
                  onClick={handleDeleteProduct}
                />
              </div>
              <div className="box-middle">
                <img className="product-icon" src={image} />
              </div>
              <div className="box-right">
                <img className="plus" src={plus} onClick={addToCart} />
              </div>
            </div>
          </div>
          <div className="box-bottom">
            <h3>{currentNumber}</h3>
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
            <h3>Enegergy: </h3>
          </div>
          <div className="characteristic-item">
            <h3>Fat: </h3>
          </div>
        </div>
      </div>
      <div>
        <h1>Reviews</h1>
        <h3>Write Your Review</h3>
        <textarea value={comment} onChange={handleChange}></textarea>
        <button onClick={handleAdd}>Add review</button>
        {reviews ? reviews.map((item: any) => <p>{item}</p>) : ""}
      </div>
    </>
  );
}
export default InsideProductComponent;
