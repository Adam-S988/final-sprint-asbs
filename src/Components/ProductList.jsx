// Brandon.

import React from "react";
import Menu from "./Menu";
import { getProducts } from "./api"; // Ensure this import is correct

const ProductList = () => {
  const products = getProducts(); // Get the list of products

  return (
    <div className="productListContainer">
      <Menu />
      <div className="shopGrid">
        {products.map((product) => (
          <div key={product.id} className="shopFrame">
            {product.Image && <img src={product.Image} alt={product.name} />}
            <div className="productDetails">
              <h3>{product.name}</h3>
              <p>Quantity: {product.qty}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
