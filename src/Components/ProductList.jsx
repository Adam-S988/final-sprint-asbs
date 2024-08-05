import React, { useState } from "react";
import Menu from "./Menu";
import { getProducts } from "./api";

const ProductList = () => {
  const products = getProducts();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log(`Added ${product.name} to cart.`);
  };

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
              <button
                className="shopButton"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
