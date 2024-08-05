import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ShoppingCart from "./Components/ShoppingCart";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="container">
        <Header title="Normal Company!" />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/productlist">Shop</Link>
          <Link to="/productlist">About Us</Link>
          <Link to="/productlist">Contact</Link>
          <Link to="/shoppingcart">Cart</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
