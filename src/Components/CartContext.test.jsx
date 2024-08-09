import React from "react";
import { render, screen, act } from "@testing-library/react";
import { CartProvider, useCart } from "./CartContext";

// Helper component to use the CartContext
const TestComponent = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div>
      <button
        onClick={() => addToCart({ id: 1, name: "Product 1", price: 10 }, 1)}
      >
        Add Product 1
      </button>
      <button onClick={() => removeFromCart(1)}>Remove Product 1</button>
      <div data-testid="cart-items">
        {cart.map((item) => (
          <div key={item.id}>
            {item.name} - {item.quantity}
          </div>
        ))}
      </div>
    </div>
  );
};

describe("CartContext", () => {
  test("should add item to cart", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    // Click "Add Product 1" button
    act(() => {
      screen.getByText(/Add Product 1/i).click();
    });

    // Check if the cart has the item
    expect(screen.getByTestId("cart-items")).toHaveTextContent("Product 1 - 1");
  });

  test("should remove item from cart", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    // Add item to the cart first
    act(() => {
      screen.getByText(/Add Product 1/i).click();
    });

    // Remove the item
    act(() => {
      screen.getByText(/Remove Product 1/i).click();
    });

    // Check if the cart is empty
    expect(screen.getByTestId("cart-items")).not.toHaveTextContent("Product 1");
  });
});
