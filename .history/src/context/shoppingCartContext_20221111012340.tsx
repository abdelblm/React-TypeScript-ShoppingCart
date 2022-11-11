import { createContext, ReactNode, useContext } from 'react';

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type ShoppingCartProvider = {
  children: ReactNode;
};

export function ShoppingCartProvider({ children } :Sh) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
