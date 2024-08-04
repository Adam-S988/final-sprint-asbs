// Api.JS

const products = [
  {
    id: 1,
    name: "Placeholder 1",
    description: "Placeholder Description 1",
    qty: { prodQuantity },
    price: { prodPrice },
  },
  {
    id: 2,
    name: "Placeholder 2",
    description: "Placeholder Description 2",
    qty: { prodQuantity },
    price: { prodPrice },
  },
  {
    id: 3,
    name: "Placeholder 3",
    description: "Placeholder Description 3",
    qty: { prodQuantity },
    price: { prodPrice },
  },
  {
    id: 4,
    name: "Placeholder 4",
    description: "Placeholder Description 4",
    qty: { prodQuantity },
    price: { prodPrice },
  },
  {
    id: 5,
    name: "Placeholder 5",
    description: "Placeholder Description 5",
    qty: { prodQuantity },
    price: { prodPrice },
  },
  {
    id: 6,
    name: "Placeholder 6",
    description: "Placeholder Description 6",
    qty: { prodQuantity },
    price: { prodPrice },
  },
  {
    id: 7,
    name: "Placeholder 7",
    description: "Placeholder Description 7",
    qty: { prodQuantity },
    price: { prodPrice },
  },
  {
    id: 8,
    name: "Placeholder 8",
    description: "Placeholder Description 8",
    qty: { prodQuantity },
    price: { prodPrice },
  },
  {
    id: 9,
    name: "Placeholder 9",
    description: "Placeholder Description 9",
    qty: { prodQuantity },
    price: { prodPrice },
  },
  {
    id: 10,
    name: "Placeholder 10",
    description: "Placeholder Description 10",
    qty: { prodQuantity },
    price: { prodPrice },
  },
];

export const getProducts = () => products;

export const getProductById = (productId) =>
  products.find((product) => product.id === productId);
