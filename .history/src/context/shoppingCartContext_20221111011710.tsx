import { useContext } from "react";

const ShoppingCartContext = create


export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}