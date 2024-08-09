import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <div className="container">
        <Header title="Normal Company!" />

        <nav>
          <Link to="/">Home</Link>
          <Link to="/productlist">Shop</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
