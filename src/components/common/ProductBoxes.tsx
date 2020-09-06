import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Products/CartContext";
function Boxes(props: any) {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div className="grids">
      {props.products.map((product: any) => {
        const addToCart = () => {
          const addedProduct = {
            name: product.name,
            img: product.img,
            price: product.price,
          };
          setCart((currentCart: any) => [...currentCart, addedProduct]);
        };
        return (
          <div className="grid-items">
            <Link
              to={{
                pathname: `products/${product.name.toLowerCase()}`,
                state: {
                  name: product.name,
                  price: product.price,
                  about: product.about,
                  calories: product.calories,
                  image: product.img,
                },
              }}
            >
              <img src={product.img} className="product-image" />
              <h5>{product.name}</h5>
              <h5>{product.about}</h5>
              <h5>price: ${product.price}</h5>
            </Link>
            <button onClick={addToCart} className="add-to-basket-btn">
              Add to basket
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Boxes;
