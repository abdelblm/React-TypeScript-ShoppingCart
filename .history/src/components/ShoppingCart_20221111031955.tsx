import {Offcanvas} from "react-bootstrap"

export function ShoppingCart() {
    const {closeCart} = useS
    return(
        <Offcanvas show={true} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
        </Offcanvas>
    )
}