import { Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/shoppingCartContext';
import { CartItem } from '../components/CartItem';

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className='ms-auto fw-bold fs-5'>
            Tolat (formatCurrency(cartItems.reduce((total, CartItem) => {
                const item = storeItems.find
            })))
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
