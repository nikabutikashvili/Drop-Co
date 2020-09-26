import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import search from "../../images/search.png";
import { useContext } from "react";
import { CartContext } from "../Products/CartContext";
import { UserContext } from "./UserContext";
import { IsUserContext } from "./IsUserContext";

function Header() {
  const [user, setUser] = useContext(UserContext);
  const [cart, setCart] = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [isUser, setIsUser] = useContext(IsUserContext);
  return (
    <div className="header">
      <ul className="header-list">
        <Link to="/">
          <li>
            <div className="logo">
              <div className="logo-1"></div>
              <div className="logo-2"></div>
              <div className="logo-3"></div>
            </div>
          </li>
        </Link>
        <li>
          <Link to="/login">{isUser ? user.account.username : "Login"}</Link>
        </li>
        <li>
          <Link to="/basket">Basket {cart.length > 0 ? cart.length : ""}</Link>
        </li>
        <li onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
          <Link to="/products" className="product-in-header">
            Products
          </Link>
          <ul className="drop-down-menu">
            <li>
              <Link to="/coffeecatalogue">Coffee</Link>
            </li>
            <li>
              <Link to="/teacatalogue">Tea</Link>
            </li>
            <li>
              <Link to="/snackscatalogue">Snacks</Link>
            </li>
          </ul>
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
