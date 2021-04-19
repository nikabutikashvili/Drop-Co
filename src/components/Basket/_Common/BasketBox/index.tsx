import React from "react";

interface Basket {
  name: string;
  price: number;
  img: string;
  number: number;
  delete(): void;
  add(): void;
}

function BasketBox(props: Basket) {
  return (
    <tr className="basket-box">
      <td>
        <img className="product-image-in-basket" src={props.img} />
      </td>
      <td>{props.name}</td>
      <td>$ {props.price * props.number}</td>
      <td>{props.number}</td>
      <td onClick={props.delete} className="sign">
        -
      </td>
      <td onClick={props.add} className="sign">
        +
      </td>
    </tr>
  );
}

export default BasketBox;
