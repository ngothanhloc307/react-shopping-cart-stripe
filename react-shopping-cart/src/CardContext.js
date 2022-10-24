import { createContext, useState } from "react";
import { getProductsData } from "./productsStore";

export const CardContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CardProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // product is not in cart
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      // product is in cart
      // [{id: 1, quantity: 3}, {id: 2, quantity: 1+1}]
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductsData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };
  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
}

export default CardProvider;

// CODE DOWN HERE
// Context (card, addToCart, removeCart)
// Provider -> give your React app access to all the things in your context
