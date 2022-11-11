import { useShoppingCart } from "../context/shoppingCartContext"
import { StoreItem } from "./StoreItem"

type CartItemProps= {
    id: number
    quantity: number
}
export function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = <StoreItems></StoreItems>

}