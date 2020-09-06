import React, { createContext, useState } from "react";

export const DiscountContext = createContext([]) as any;

export const DiscountProvider = (props: any): any => {
  const [Discount, setDiscount] = useState(0);
  return (
    <DiscountContext.Provider value={[Discount, setDiscount]}>
      {props.children}
    </DiscountContext.Provider>
  );
};
