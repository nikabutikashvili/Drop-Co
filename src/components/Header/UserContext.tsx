import React, { createContext, useState } from "react";

export const UserContext = createContext([]) as any;

export function UserProvider(props: any) {
  const [user, setUser] = useState("Login");
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}
