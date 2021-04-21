import React, { useState, createContext, ReactNode } from "react";

export interface ContextProviderInterface {
  children: ReactNode;
}

export const IsUserContext = createContext([]) as any;

export function IsUserProvider({
  children,
}: ContextProviderInterface): JSX.Element {
  const [isUser, setIsUser] = useState<boolean>(false);
  return (
    <IsUserContext.Provider value={[isUser, setIsUser]}>
      {children}
    </IsUserContext.Provider>
  );
}
