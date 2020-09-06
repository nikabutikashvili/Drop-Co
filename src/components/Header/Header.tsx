import React from "react";
import Select from "react-select";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import search from "../../images/search.png";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { CartContext } from "../Products/CartContext";

function Header() {
  const [user, setUser] = useContext(UserContext);
  const [cart, setCart] = useContext(CartContext);
  const anim = useSpring({
    from: {
      marginTop: "-500px",
    },
    to: {
      marginTop: "0px",
    },
  });
  const languages = [
    { value: "English", label: "English" },
    { value: "ქართული", label: "Georgian" },
  ];
  return (
    <div className="header">
      <ul className="header-list">
        <li>
          <Link to="/">
            <img src={logo} className="logo-in-header" />
          </Link>
        </li>
        <li>
          <Link to="/login">{user}</Link>
        </li>
        <li>
          <Link to="/basket">Basket {cart.length > 0 ? cart.length : ""}</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
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
}

export default Header;
