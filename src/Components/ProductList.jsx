import React, { useState } from "react";
import Menu from "./Menu";
import { getProducts } from "./api";

const ProductList = () => {
  const products = getProducts();
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id];
    setCart([...cart, { ...product, quantity }]);
    console.log(`Added ${quantity} of ${product.name} to cart.`);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities({ ...quantities, [productId]: newQuantity });
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
              <p>
                Quantity:{" "}
                <select
                  className="quantitySelect"
                  value={quantities[product.id]}
                  onChange={(e) =>
                    handleQuantityChange(product.id, parseInt(e.target.value))
                  }
                >
                  {[...Array(10).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>
                      {n + 1}
                    </option>
                  ))}
                </select>
              </p>
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

// TEMPORARY CODE FOR TESTING PURPOSES. LOCAL STATE EXAMPLE, SWITCH TO GLOBAL SOLUTION LATER.
