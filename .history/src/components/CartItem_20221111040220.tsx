import { useShoppingCart } from "../context/shoppingCartContext"
import storeItems from "../"

type CartItemProps= {
    id: number
    quantity: number
}
export function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems .find(i=> i.id === id)


}