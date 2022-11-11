import { createContext, ReactNode, useContext } from 'react';

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type ShoppingCartProvider = {
  h: ReactNode;
};

export function ShoppingCartProvider({ h }) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {h}
    </ShoppingCartContext.Provider>
  );
}
