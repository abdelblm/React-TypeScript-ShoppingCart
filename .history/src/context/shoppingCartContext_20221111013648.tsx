import { createContext, ReactNode, useContext } from 'react';

type ShoppingCartProviderProps = {
  children: ReactNode;
};
type CartItem = {
    id: number
    
}
type ShoppingCartContext ={
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaceCartQuantity: (id: number) => void
    removeFroCart: (id: number) => void

}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
