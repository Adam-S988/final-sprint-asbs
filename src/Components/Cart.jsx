import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxRate = 0.15;
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount;

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.Image} alt={item.name} />
                <div>
                  <span>{item.name}</span>
                  <span>Quantity: {item.quantity}</span>
                  <span>Price: ${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-totals">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax (15%): ${taxAmount.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
          </div>
          <div className="checkoutBtnContainer">
            <button
              className="checkout-button"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
