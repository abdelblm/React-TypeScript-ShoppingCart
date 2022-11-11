import { Navbar as NavbarBs, Container, Nav } from 'react-bootstrap';

export function Navbar() {
  return (
    <NavbarBs className='bg-white shadow-sm mb-3'>
      <Container>
        <Nav>
            <Nav.Link to="/">

            </Nav.Link>

        </Nav>
      </Container>
    </NavbarBs>
  );
}
