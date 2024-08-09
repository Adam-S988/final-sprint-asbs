import React, { useState } from "react";
import { useCart } from "./CartContext";

const Checkout = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    comments: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);

    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="thank-you-message">
        <h2>Thank You!</h2>
        <p>Thank you for shopping with us. Your order has been placed. </p>
      </div>
    );
  }

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxRate = 0.15;
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount;

  return (
    <div className="checkoutContainer">
      <h2 className="checkoutHeader">Checkout</h2>
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
                  className="checkoutBtn"
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
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Your full name here"
          className="form-control m-2 p-3"
        />
        <br />
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          placeholder="Your card number here"
          className="form-control"
        />
        <br />
        <label htmlFor="expiry">Expiry</label>
        <input
          type="text"
          id="expiry"
          name="expiry"
          value={formData.expiry}
          onChange={handleChange}
          placeholder="MM/YY"
          className="form-control"
        />
        <br />
        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          placeholder="CVV"
          className="form-control"
        />
        <br />
        <label htmlFor="comments">Additional Comments</label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          rows="4"
          placeholder="Your comments here"
          className="form-control"
        ></textarea>
        <br />
        <input type="submit" value="Submit" className="form-control" />
        <input
          type="reset"
          value="Clear"
          className="form-control"
          onClick={() =>
            setFormData({
              fullName: "",
              cardNumber: "",
              expiry: "",
              cvv: "",
              comments: "",
            })
          }
        />
      </form>
    </div>
  );
};

export default Checkout;
