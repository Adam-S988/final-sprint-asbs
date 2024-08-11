//Adam Stevenson

import React from "react";
import PropTypes from "prop-types";

const ProductDetails = ({ product, onClose }) => {
  return (
    //Maps each piece of information for display
    <div className="productDetailsModal">
      <div className="productDetailsContent">
        <button className="closeButton" onClick={onClose}>
          X
        </button>
        <h2>{product.name}</h2>
        {product.Image && <img src={product.Image} alt={product.name} />}
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Description: {product.description || "No description available."}</p>
        <p>Category: {product.category || "Uncategorized"}</p>
        {/* Add any other details you want to display */}
      </div>
    </div>
  );
};

//Pop-out with the information
ProductDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    Image: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductDetails;
