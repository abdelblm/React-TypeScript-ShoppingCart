import { createContext, useContext } from 'react';

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
  <ShoppingCartContext.Provider value={{}}>
    
  </ShoppingCartContext.Provider>
}
