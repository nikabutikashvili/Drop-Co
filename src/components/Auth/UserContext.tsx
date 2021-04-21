import React, { createContext, ReactNode, useState } from "react";

export interface ContextProviderInterface {
  children: ReactNode;
}

export interface User {
  account: {
    username: string;
    password: string;
  };
  errors: {};
}

export const UserContext = createContext([]) as any;

export const UserProvider = ({
  children,
}: ContextProviderInterface): JSX.Element => {
  const [user, setUser] = useState<User>({
    account: {
      username: "",
      password: "",
    },
    errors: {},
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
