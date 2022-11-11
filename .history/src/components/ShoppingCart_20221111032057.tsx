import {Offcanvas} from "react-bootstrap"
import { useShoppingCart } from "../context/shoppingCartContext"

type ShoppingCartProps ={
    is
}

export function ShoppingCart() {
    const {closeCart} = useShoppingCart()
    return(
        <Offcanvas show={true} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
        </Offcanvas>
    )
}