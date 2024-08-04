import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Title">Normal Company.</h1>
      <Router>
        <div className="container">
          <Link to="/">Home</Link>
          <Link to="/productlist">Shop</Link>
          <Link to="/productlist">About Us</Link>
          <Link to="/productlist">Contact</Link>
          <Link to="/shoppingcart">Cart</Link>
          <Routes>
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Header;
