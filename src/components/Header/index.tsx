import * as React from "react";
import { Link } from "react-router-dom";
import List from "../../shared/List";
import Logo from "../../shared/Logo/Logo";
import "./styles.css";

import { CartContext } from "../Products/CartContext";

const Header: React.FC = () => {
  const [cart, setCart] = React.useContext(CartContext);

  return (
    <div className="header">
      <ul className="header-list">
        <Link to="/">
          <li>
            <Logo />
          </li>
        </Link>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/basket">Basket {cart.length > 0 ? cart.length : ""}</Link>
        </li>
        <li className="item-with-drop-down">
          <Link to="/products" className="product-in-header">
            Products
          </Link>
          <List
            menuItems={[
              { name: "Coffee", link: "/coffeecatalogue" },
              { name: "Tea", link: "/teacatalogue" },
              { name: "Snacks", link: "/snackscatalogue" },
            ]}
            className="drop-down-menu"
          />
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
