import { useShoppingCart } from "../context/shoppingCartContext"
import {  Stack } from 'react-bootstrap';

import storeItems from "../data/items.json"

type CartItemProps= {
    id: number
    quantity: number
}
export function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems .find(i => i.id === id)
    if (item == null) return null
    return (
        <Stack direction="">

        </Stack>
    )


}