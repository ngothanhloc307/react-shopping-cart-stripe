// Cofee : price_1LwQWgEAbRUgVG5AFMLKqJb9
// Cake: price_1LwQYOEAbRUgVG5A5mVZzEOH
// Sting:price_1LwQYxEAbRUgVG5AhT6x9EWo

const productsArray = [
  { id: "price_1LwQWgEAbRUgVG5AFMLKqJb9", title: "Coffee", price: 4.99 },
  { id: "price_1LwQYOEAbRUgVG5A5mVZzEOH", title: "Cake", price: 3.99 },
  { id: "price_1LwQYxEAbRUgVG5AhT6x9EWo", title: "Sting", price: 4.99 },
];

function getProductsData(id) {
  let productsData = productsArray.find((product) => product.id === id);

  if (productsData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productsData;
}

export { productsArray, getProductsData };
