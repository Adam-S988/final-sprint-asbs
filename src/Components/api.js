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
    name: "Naemaroe Bistro Set",
    description:
      "Enhance your outdoor or small dining area with this stylish small wooden bistro set. Featuring a classic design with a durable wood construction, it includes a table and two matching chairs. Perfect for cozy meals or relaxing moments, its natural finish adds warmth and charm, making it an ideal choice for patios, balconies, or compact spaces.",
    price: prodPrice1,
    category: "Outdoor Goods",
    Image:
      "https://www.ikea.com/ca/en/images/products/naemmaroe-bistro-set-outdoor-light-brown-stained__1234691_pe917203_s5.jpg?f=xs",
  },
  {
    id: 2,
    name: "Naemaroe Reclining Chair",
    description:
      "A stylish and durable wooden recliner that combines traditional craftsmanship with modern comfort. Constructed from high-quality wood, this recliner features a smooth reclining mechanism and plush cushioning for optimal relaxation. Its elegant design and natural wood finish make it a sophisticated addition to any living space.",
    category: "Outdoor Goods",

    price: prodPrice2,
    Image:
      "https://www.ikea.com/ca/en/images/products/naemmaroe-reclining-chair-outdoor-foldable-light-brown-stained__1138757_pe880057_s5.jpg?f=xs",
  },
  {
    id: 3,
    name: "Naemaroe Seat Section",
    description:
      "A versatile wooden seat section that blends classic design with functional elegance. Crafted from premium wood, this seat section offers sturdy support and comfort with its well-padded cushion. Its timeless style and rich wood finish make it a refined addition to any seating arrangement.",
    category: "Outdoor Goods",

    price: prodPrice3,
    Image:
      "https://www.ikea.com/ca/en/images/products/naemmaroe-seat-sec-for-modular-sofa-outdoor-light-brown-stained__1138748_pe880048_s5.jpg?f=xs",
  },
  {
    id: 4,
    name: "Naemaroe Stool",
    description:
      "A charming and practical wooden stool with a compact design. Crafted from durable wood, this stool provides reliable support while adding a touch of natural elegance to any space. Its simple, versatile design makes it ideal for various uses, from extra seating to a stylish accent piece.",
    category: "Outdoor Goods",

    price: prodPrice4,
    Image:
      "https://www.ikea.com/ca/en/images/products/naemmaroe-stool-outdoor-foldable-light-brown-stained__1138761_pe880061_s5.jpg?f=xs",
  },
  {
    id: 5,
    name: "Bondholmen Loveseat",
    description:
      "A comfortable and versatile cushioned loveseat, designed for cozy seating. With its plush cushions and clean lines, it offers a blend of comfort and simplicity, making it a perfect addition to any living space. The classic design and durable fabric ensure both style and longevity.",
    category: "Indoor Goods",

    price: prodPrice5,
    Image:
      "https://www.ikea.com/ca/en/images/products/bondholmen-loveseat-outdoor-brown-froesoen-duvholmen-dark-gray__1247781_pe922788_s5.jpg?f=xs",
  },
  {
    id: 6,
    name: "Tväröe Set",
    description:
      "This classic furniture set includes a cushioned loveseat, matching chairs, and a coordinating table, all designed for timeless comfort and style. The loveseat and chairs feature plush cushions for cozy seating, while the clean lines and durable fabric offer lasting appeal. The accompanying table completes the set, perfect for enhancing any living area with its functional and elegant design. Ideal for creating a welcoming and stylish space.",
    category: "Indoor Goods",

    price: prodPrice6,
    Image:
      "https://www.ikea.com/ca/en/images/products/tvaroe-froesoen-4-seat-conversation-set-outdoor-dark-gray__1206716_pe907580_s5.jpg?f=xs",
  },
  {
    id: 7,
    name: "Solleroen Seat Section",
    description:
      "This versatile cushioned seat section offers comfortable and stylish seating for any space. Its plush cushions provide relaxed support, while the clean, modern design complements a variety of decor styles. Ideal for creating a cozy and functional seating area in both home and office environments.",
    category: "Indoor Goods",

    price: prodPrice7,
    Image:
      "https://www.ikea.com/ca/en/images/products/solleroen-seat-section-for-modular-sofa-outdoor-dark-gray-jaerpoen-duvholmen-anthracite__0991458_pe819463_s5.jpg?f=xs",
  },
  {
    id: 8,
    name: "Solleroen Corner Section",
    description:
      "This minimalist corner seat section is perfect for adding functional seating to any space. Its simple design and durable construction offer practicality and easy maintenance, making it an ideal choice for both home and commercial settings.",
    category: "Indoor Goods",

    price: prodPrice8,
    Image:
      "https://www.ikea.com/ca/en/images/products/solleroen-corner-section-outdoor-brown__0729492_pe737011_s5.jpg?f=xs",
  },
  {
    id: 9,
    name: "Solleroen 3-Seat Modular Sofa",
    description:
      "This versatile 3-seat modular sofa features a clean, minimalist design that adapts to any living space. Its durable construction and comfortable seating make it an excellent choice for both casual and formal settings. The modular design allows for easy reconfiguration to fit your layout needs.",
    category: "Indoor Goods",

    price: prodPrice9,
    Image:
      "https://www.ikea.com/ca/en/images/products/solleroen-3-seat-modular-sofa-outdoor-dark-gray-kuddarna-gray__0727777_pe735858_s5.jpg?f=xs",
  },
  {
    id: 10,
    name: "Jolpen Loveseat",
    description:
      "This simple yet elegant cushioned loveseat offers comfortable seating with a clean, modern design. Featuring a plush cushion for added comfort, it's ideal for various spaces, providing versatile seating solutions with style and practicality.",
    category: "Outdoor Goods",

    price: prodPrice10,
    Image:
      "https://www.ikea.com/ca/en/images/products/jolpen-loveseat-outdoor-white-gray-kuddarna-beige__1146146_pe882916_s5.jpg?f=xs",
  },
  {
    id: 11,
    name: "Solleroen Armchair",
    description:
      "This plush cushioned armchair combines comfort with style, featuring a soft seat and supportive backrest. Its classic design and cushioned upholstery make it a perfect addition to any living room or reading nook, offering a cozy and inviting spot for relaxation.",
    category: "Indoor Goods",

    price: prodPrice11,
    Image:
      "https://www.ikea.com/ca/en/images/products/solleroen-armchair-outdoor-brown-froesoen-duvholmen-dark-gray__0589814_pe673479_s5.jpg?f=xs",
  },
  {
    id: 12,
    name: "Torparoe Armchair",
    description:
      "This simple and durable plastic armchair is designed for practicality and ease of maintenance. Its lightweight construction and clean lines make it suitable for various indoor and outdoor settings, providing a functional seating solution that is both versatile and easy to clean.",
    category: "Indoor Goods",

    price: prodPrice12,
    Image:
      "https://www.ikea.com/ca/en/images/products/torparoe-armchair-in-outdoor-white-gray__1138957_pe880162_s5.jpg?f=xs",
  },
];
export const getProducts = () => products;

export const getProductById = (productId) =>
  products.find((product) => product.id === productId);
