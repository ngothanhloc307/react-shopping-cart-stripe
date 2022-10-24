import { Button } from "react-bootstrap";
import { CardContext } from "../CardContext";
import { useContext } from "react";
import { getProductsData } from "../productsStore";

function CardProduct(props) {
  const cart = useContext(CardContext);
  const id = props.id;
  const quantity = props.quantity;
  const ProductsData = getProductsData(id);

  return (
    <>
      <h3>{ProductsData.title}</h3>
      <p>{quantity} total</p>
      <p>${quantity * ProductsData.price.toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>
      <hr></hr>
    </>
  );
}

export default CardProduct;
