import { useShoppingCart } from "../context/shoppingCartContext"

type CartItemProps= {
    id: number
    quantity: number
}
export function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = sto

}