import React, { useState, createContext, ReactComponentElement } from "react";
import ProductBoxes from "../../shared/ProductBoxes";

export const CartContext = createContext([]) as any;

export const CartProvider = (props: any) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
