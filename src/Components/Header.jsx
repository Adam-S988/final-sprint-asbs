import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Title">Normal Company.</h1>
    </div>
  );
};

export default Header;
