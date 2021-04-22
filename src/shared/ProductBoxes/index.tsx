import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/Products/CartContext";

interface Props {
  products: [
    {
      name: string;
      img: string;
      price: number;
      number: number;
      about: string;
      calories: number;
      id: number;
      energy: number;
      fat: number;
    }
  ];
}

const Boxes: React.FC<Props> = ({ products }) => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div className="grids">
      {products?.map(
        ({ name, img, price, number, about, calories, id, energy, fat }) => {
          const addToCart = () => {
            if (cart.length === 0) {
              const addedProduct = {
                name: name,
                img: img,
                price: price,
                number: number,
              };
              setCart((currentCart: any) => [...currentCart, addedProduct]);
            } else {
              for (let index = 0; index < cart.length; index++) {
                if (cart[index].name === name) {
                  let newCart = [...cart];
                  newCart[index].number = cart[index].number + 1;
                  setCart(newCart);
                  break;
                } else if (index + 1 === cart.length) {
                  const addedProduct = {
                    name: name,
                    img: img,
                    price: price,
                    number: number,
                  };
                  setCart((currentCart: any) => [...currentCart, addedProduct]);
                }
              }
            }
          };
          return (
            <div className="grid-items">
              <Link
                to={{
                  pathname: `products/${name.toLowerCase()}`,
                  state: {
                    name,
                    price,
                    about,
                    calories,
                    image: img,
                    number,
                    id,
                    energy,
                    fat,
                  },
                }}
              >
                <img src={img} className="product-image" />
                <h5>{name}</h5>
                <h5>{about}</h5>
                <h5>price: ${price}</h5>
              </Link>
              <button onClick={addToCart} className="add-to-basket-btn">
                Add to basket
              </button>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Boxes;
