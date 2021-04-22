import * as React from "react";

interface Basket {
  name: string;
  price: number;
  img: string;
  number: number;
}

interface Props {
  cart: [Basket];
  handleAddProduct: (name: string) => void;
  handleDeleteProduct: (name: string) => void;
}

const BasketBox: React.FC<Props> = ({
  cart,
  handleAddProduct,
  handleDeleteProduct,
}) => {
  return (
    <>
      {cart?.map(({ name, price, img, number }: Basket) => {
        return (
          <div key={name} className="basket-box">
            <div className="cart-item">
              <img className="product-image-in-basket" src={img} alt={name} />
            </div>
            <div className="cart-item">{name}</div>
            <div className="cart-item">$ {price * number}</div>
            <div className="cart-item">{number}</div>
            <div
              className="cart-item sign"
              onClick={() => handleDeleteProduct(name)}
            >
              -
            </div>
            <div
              onClick={() => handleAddProduct(name)}
              className="cart-item sign"
            >
              +
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BasketBox;
