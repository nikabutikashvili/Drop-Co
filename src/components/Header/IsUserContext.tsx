import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const IsUserContext = createContext([]) as any;

export function IsUserProvider(props: any) {
  const [isUser, setIsUser] = useState(false);
  return (
    <IsUserContext.Provider value={[isUser, setIsUser]}>
      {props.children}
    </IsUserContext.Provider>
  );
}
