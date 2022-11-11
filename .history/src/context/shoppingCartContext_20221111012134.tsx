import { createContext, useContext } from 'react';

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);

  type ShoppingCartProvider ={
    
  }

  export function ShoppingCartProvider({ children }) {
    return(
        <ShoppingCartContext.Provider value={{}}>
        {children}
      </ShoppingCartContext.Provider>

    )
   
  }
}
