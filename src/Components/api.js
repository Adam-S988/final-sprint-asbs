// Api.JS
// Brandon S.

const prodQuantity = 10;
const prodPrice = 99.99;

const products = [
  {
    id: 1,
    name: "Placeholder 1",
    description: "Placeholder Description 1",
    qty: prodQuantity,
    price: prodPrice,
    Image:
      "https://www.ikea.com/ca/en/images/products/naemmaroe-bistro-set-outdoor-light-brown-stained__1234691_pe917203_s5.jpg?f=xs",
  },
  {
    id: 2,
    name: "Placeholder 2",
    description: "Placeholder Description 2",
    qty: prodQuantity,
    price: prodPrice,
    Image:
      "https://www.ikea.com/ca/en/images/products/naemmaroe-reclining-chair-outdoor-foldable-light-brown-stained__1138757_pe880057_s5.jpg?f=xs",
  },
  {
    id: 3,
    name: "Placeholder 3",
    description: "Placeholder Description 3",
    qty: prodQuantity,
    price: prodPrice,
    Image:
      "https://www.ikea.com/ca/en/images/products/naemmaroe-seat-sec-for-modular-sofa-outdoor-light-brown-stained__1138748_pe880048_s5.jpg?f=xs",
  },
  {
    id: 4,
    name: "Placeholder 4",
    description: "Placeholder Description 4",
    qty: prodQuantity,
    price: prodPrice,
    Image:
      "https://www.ikea.com/ca/en/images/products/naemmaroe-stool-outdoor-foldable-light-brown-stained__1138761_pe880061_s5.jpg?f=xs",
  },
  {
    id: 5,
    name: "Placeholder 5",
    description: "Placeholder Description 5",
    qty: prodQuantity,
    price: prodPrice,
    Image:
      "https://www.ikea.com/ca/en/images/products/bondholmen-loveseat-outdoor-brown-froesoen-duvholmen-dark-gray__1247781_pe922788_s5.jpg?f=xs",
  },
  {
    id: 6,
    name: "Placeholder 6",
    description: "Placeholder Description 6",
    qty: prodQuantity,
    price: prodPrice,
    Image:
      "https://www.ikea.com/ca/en/images/products/tvaroe-froesoen-4-seat-conversation-set-outdoor-dark-gray__1206716_pe907580_s5.jpg?f=xs",
  },
  {
    id: 7,
    name: "Placeholder 7",
    description: "Placeholder Description 7",
    qty: prodQuantity,
    price: prodPrice,
    Image:
      "https://www.ikea.com/ca/en/images/products/solleroen-seat-section-for-modular-sofa-outdoor-dark-gray-jaerpoen-duvholmen-anthracite__0991458_pe819463_s5.jpg?f=xs",
  },
  {
    id: 8,
    name: "Placeholder 8",
    description: "Placeholder Description 8",
    qty: prodQuantity,
    price: prodPrice,
    Image:
      "https://www.ikea.com/ca/en/images/products/solleroen-corner-section-outdoor-brown__0729492_pe737011_s5.jpg?f=xs",
  },
  {
    id: 9,
    name: "Placeholder 9",
    description: "Placeholder Description 9",
    qty: prodQuantity,
    price: prodPrice,
    Image:
      "https://www.ikea.com/ca/en/images/products/solleroen-3-seat-modular-sofa-outdoor-dark-gray-kuddarna-gray__0727777_pe735858_s5.jpg?f=xs",
  },
  {
    id: 10,
    name: "Placeholder 10",
    description: "Placeholder Description 10",
    qty: prodQuantity,
    price: prodPrice,
    Image:
      "https://www.ikea.com/ca/en/images/products/jolpen-loveseat-outdoor-white-gray-kuddarna-beige__1146146_pe882916_s5.jpg?f=xs",
  },
  {
    id: 11,
    name: "Placeholder 11",
    description: "Placeholder Description 11",
    qty: prodQuantity,
    price: prodPrice,
    Image:
      "https://www.ikea.com/ca/en/images/products/solleroen-armchair-outdoor-brown-froesoen-duvholmen-dark-gray__0589814_pe673479_s5.jpg?f=xs",
  },
  {
    id: 12,
    name: "Placeholder 12",
    description: "Placeholder Description 12",
    qty: prodQuantity,
    price: prodPrice,
    Image:
      "https://www.ikea.com/ca/en/images/products/torparoe-armchair-in-outdoor-white-gray__1138957_pe880162_s5.jpg?f=xs",
  },
];
export const getProducts = () => products;

export const getProductById = (productId) =>
  products.find((product) => product.id === productId);
