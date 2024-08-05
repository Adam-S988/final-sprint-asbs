// Api.JS
// Brandon S.

const prodQuantity = 10; // Define the quantity for all products
const prodPrice = 99.99; // Define the price for all products

const products = [
  {
    id: 1,
    name: "Placeholder 1",
    description: "Placeholder Description 1",
    qty: prodQuantity,
    price: prodPrice,
    Image: "https://m.media-amazon.com/images/I/71EXyc9LtzL.jpg",
  },
  {
    id: 2,
    name: "Placeholder 2",
    description: "Placeholder Description 2",
    qty: prodQuantity,
    price: prodPrice,
    Image:
      "https://m.media-amazon.com/images/I/61VZQHeohKL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "Placeholder 3",
    description: "Placeholder Description 3",
    qty: prodQuantity,
    price: prodPrice,
  },
  {
    id: 4,
    name: "Placeholder 4",
    description: "Placeholder Description 4",
    qty: prodQuantity,
    price: prodPrice,
  },
  {
    id: 5,
    name: "Placeholder 5",
    description: "Placeholder Description 5",
    qty: prodQuantity,
    price: prodPrice,
  },
  {
    id: 6,
    name: "Placeholder 6",
    description: "Placeholder Description 6",
    qty: prodQuantity,
    price: prodPrice,
  },
  {
    id: 7,
    name: "Placeholder 7",
    description: "Placeholder Description 7",
    qty: prodQuantity,
    price: prodPrice,
  },
  {
    id: 8,
    name: "Placeholder 8",
    description: "Placeholder Description 8",
    qty: [prodQuantity],
    price: prodPrice,
  },
  {
    id: 9,
    name: "Placeholder 9",
    description: "Placeholder Description 9",
    qty: prodQuantity,
    price: prodPrice,
  },
  {
    id: 10,
    name: "Placeholder 10",
    description: "Placeholder Description 10",
    qty: prodQuantity,
    price: prodPrice,
  },
  {
    id: 11,
    name: "Placeholder 11",
    description: "Placeholder Description 11",
    qty: prodQuantity,
    price: prodPrice,
  },
  {
    id: 12,
    name: "Placeholder 12",
    description: "Placeholder Description 12",
    qty: prodQuantity,
    price: prodPrice,
  },
  {
    id: 13,
    name: "Placeholder 13",
    description: "Placeholder Description 13",
    qty: prodQuantity,
    price: prodPrice,
  },
];
export const getProducts = () => products;

export const getProductById = (productId) =>
  products.find((product) => product.id === productId);
