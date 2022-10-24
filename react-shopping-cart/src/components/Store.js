import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productsStore";
import ProductCard from "./ProductCard";
// [{...},{...}]

function Store() {
  return (
    <>
      <h1>Welcome to the store!</h1>
      <Row xs={1} md={3} className="g-4 p-3">
        {productsArray.map((product, index) => (
          <Col align="center" key={index}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
export default Store;
