import React, { useState } from "react";
import { useCart } from "./CartContext";
import { getProducts } from "./api";
import menuIcon from "../Images/Menu.png";
import xIcon from "../Images/X.png";
import Menu from "./Menu";
import ProductDetails from "./ProductDetails";

const ProductList = () => {
  const products = getProducts();
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id];
    addToCart(product, quantity);
    console.log(`Added ${quantity} of ${product.name} to cart.`);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities({ ...quantities, [productId]: newQuantity });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={`productListContainer ${isMenuOpen ? "menu-open" : ""}`}>
      <button
        onClick={toggleMenu}
        className={`menuToggleBtn ${isMenuOpen ? "open" : ""}`}
        data-testid={`add-to-cart-${products.id}`}
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
                data-testid={`add-to-cart-${product.id}`}
              >
                Add to Cart
              </button>
              <button
                className="viewDetailsButton"
                onClick={() => openProductDetails(product)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={closeProductDetails}
        />
      )}
    </div>
  );
};

export default ProductList;
