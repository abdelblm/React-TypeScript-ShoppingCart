import { createContext, ReactNode, useContext, useState } from 'react';

type ShoppingCartProviderProps = {
  children: ReactNode;
};
type CartItem = {
  id: number;
  quantity: number;
};
type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaceCartQuantity: (id: number) => void;
  removeFroCart: (id: number) => void;
};
const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [CartItems, setCartItems]= useState<CartItem[]>([])
    function getItemQuantity(id: number){
        return CartItems.find(item => item.id ===id)?.quantity || 0
    }
    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, {id, quantity:1}]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return
                    }
                })
            }
        })
    }
  return (
    <ShoppingCartContext.Provider value={{getItemQuantity,}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
