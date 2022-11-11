import storeItems from "../data/items.json"
import {Col, Row} from "react-bootstrap"


export function Store() {
  return (
    <>
    <h1>Store</h1>
    <Row>
      {storeItems.map(item => (
      <Col>json.stringfy(item</Col>

      ))}
    </Row>
    </>
  )
}

