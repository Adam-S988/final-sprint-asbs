import React, { useState } from "react";
import Menu from "./Menu";
import { getProducts } from "./api";
import menuIcon from "../Images/Menu.png";
import xIcon from "../Images/X.png";

const ProductList = () => {
  const products = getProducts();
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id];
    setCart([...cart, { ...product, quantity }]);
    console.log(`Added ${quantity} of ${product.name} to cart.`);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities({ ...quantities, [productId]: newQuantity });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`productListContainer ${isMenuOpen ? "menu-open" : ""}`}>
      <button
        onClick={toggleMenu}
        className={`menuToggleBtn ${isMenuOpen ? "open" : ""}`}
      >
        <img
          src={isMenuOpen ? xIcon : menuIcon}
          alt={isMenuOpen ? "Close Menu" : "Open Menu"}
        />
      </button>

      <div className={`menuContainer ${isMenuOpen ? "" : "hidden"}`}>
        <Menu />
      </div>

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
