// Api.JS
// Brandon S.

// const prodQuantity = 10;
const prodPrice1 = 199.99;
const prodPrice2 = 49.99;
const prodPrice3 = 69.99;
const prodPrice4 = 79.99;
const prodPrice5 = 199.99;
const prodPrice6 = 349.99;
const prodPrice7 = 99.99;
const prodPrice8 = 129.99;
const prodPrice9 = 169.99;
const prodPrice10 = 149.99;
const prodPrice11 = 119.99;
const prodPrice12 = 39.99;

const products = [
  {
    id: 1,
    name: "Naemmaroe Bistro Set",
    description: "Placeholder Description 1",
    price: prodPrice1,
    Image:
      "https://www.ikea.com/ca/en/images/products/naemmaroe-bistro-set-outdoor-light-brown-stained__1234691_pe917203_s5.jpg?f=xs",
  },
  {
    id: 2,
    name: "Naeemaroe Reclining Chair",
    description: "Placeholder Description 2",

    price: prodPrice2,
    Image:
      "https://www.ikea.com/ca/en/images/products/naemmaroe-reclining-chair-outdoor-foldable-light-brown-stained__1138757_pe880057_s5.jpg?f=xs",
  },
  {
    id: 3,
    name: "Naeemaroe Seat Section",
    description: "Placeholder Description 3",

    price: prodPrice3,
    Image:
      "https://www.ikea.com/ca/en/images/products/naemmaroe-seat-sec-for-modular-sofa-outdoor-light-brown-stained__1138748_pe880048_s5.jpg?f=xs",
  },
  {
    id: 4,
    name: "Naeemaroe Stool",
    description: "Placeholder Description 4",

    price: prodPrice4,
    Image:
      "https://www.ikea.com/ca/en/images/products/naemmaroe-stool-outdoor-foldable-light-brown-stained__1138761_pe880061_s5.jpg?f=xs",
  },
  {
    id: 5,
    name: "Bondholmen Loveseat",
    description: "Placeholder Description 5",

    price: prodPrice5,
    Image:
      "https://www.ikea.com/ca/en/images/products/bondholmen-loveseat-outdoor-brown-froesoen-duvholmen-dark-gray__1247781_pe922788_s5.jpg?f=xs",
  },
  {
    id: 6,
    name: "Tväröe Set",
    description: "Placeholder Description 6",

    price: prodPrice6,
    Image:
      "https://www.ikea.com/ca/en/images/products/tvaroe-froesoen-4-seat-conversation-set-outdoor-dark-gray__1206716_pe907580_s5.jpg?f=xs",
  },
  {
    id: 7,
    name: "Solleoen Seat Section",
    description: "Placeholder Description 7",

    price: prodPrice7,
    Image:
      "https://www.ikea.com/ca/en/images/products/solleroen-seat-section-for-modular-sofa-outdoor-dark-gray-jaerpoen-duvholmen-anthracite__0991458_pe819463_s5.jpg?f=xs",
  },
  {
    id: 8,
    name: "Solleroen Corner Section",
    description: "Placeholder Description 8",

    price: prodPrice8,
    Image:
      "https://www.ikea.com/ca/en/images/products/solleroen-corner-section-outdoor-brown__0729492_pe737011_s5.jpg?f=xs",
  },
  {
    id: 9,
    name: "Solleroen 3-Seat Modular Sofa",
    description: "Placeholder Description 9",

    price: prodPrice9,
    Image:
      "https://www.ikea.com/ca/en/images/products/solleroen-3-seat-modular-sofa-outdoor-dark-gray-kuddarna-gray__0727777_pe735858_s5.jpg?f=xs",
  },
  {
    id: 10,
    name: "Jolpen Loveseat",
    description: "Placeholder Description 10",

    price: prodPrice10,
    Image:
      "https://www.ikea.com/ca/en/images/products/jolpen-loveseat-outdoor-white-gray-kuddarna-beige__1146146_pe882916_s5.jpg?f=xs",
  },
  {
    id: 11,
    name: "Solleroen Armchair",
    description: "Placeholder Description 11",

    price: prodPrice11,
    Image:
      "https://www.ikea.com/ca/en/images/products/solleroen-armchair-outdoor-brown-froesoen-duvholmen-dark-gray__0589814_pe673479_s5.jpg?f=xs",
  },
  {
    id: 12,
    name: "Torparoe Armchair",
    description: "Placeholder Description 12",

    price: prodPrice12,
    Image:
      "https://www.ikea.com/ca/en/images/products/torparoe-armchair-in-outdoor-white-gray__1138957_pe880162_s5.jpg?f=xs",
  },
];
export const getProducts = () => products;

export const getProductById = (productId) =>
  products.find((product) => product.id === productId);
