import storeItems from '../data/items.json';
import { Col, Row } from 'react-bootstrap';

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="">
        {storeItems.map((item) => (
          <Col>{item.name}</Col>
        ))}
      </Row>
    </>
  );
}
