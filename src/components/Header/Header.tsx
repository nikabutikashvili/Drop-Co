import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import search from "../../images/search.png";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { CartContext } from "../Products/CartContext";

function Header() {
  const [user, setUser] = useContext(UserContext);
  const [cart, setCart] = useContext(CartContext);
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <ul className="header-list">
        <li>
          <Link to="/">
            <img src={logo} className="logo-in-header" />
          </Link>
        </li>
        <li>
          <Link to="/login">
            {user.account.username ? user.account.username : "Login"}
          </Link>
        </li>
        <li>
          <Link to="/basket">Basket {cart.length > 0 ? cart.length : ""}</Link>
        </li>
        <li onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
          <Link to="/products">Products</Link>
          {/* {open && <DropDownMenu />} */}
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
