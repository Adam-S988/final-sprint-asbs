//Adam Stevenson

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Checkout from "./Checkout";
import { useCart } from "./CartContext";

// Mock the useCart hook
jest.mock("./CartContext", () => ({
  useCart: jest.fn(),
}));

test("renders Checkout and submits form", async () => {
  const mockClearCart = jest.fn();
  const mockRemoveFromCart = jest.fn();

  // Mock cart with an item
  useCart.mockReturnValue({
    cart: [
      { id: 1, name: "Test Item", price: 10, quantity: 2, Image: "test.jpg" },
    ],
    clearCart: mockClearCart,
    removeFromCart: mockRemoveFromCart,
  });

  render(<Checkout />);

  // Simulate form input
  fireEvent.change(screen.getByLabelText(/Full Name/i), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByLabelText(/Card Number/i), {
    target: { value: "1234567890123456" },
  });
  fireEvent.change(screen.getByLabelText(/Expiry/i), {
    target: { value: "12/34" },
  });
  fireEvent.change(screen.getByLabelText(/CVV/i), {
    target: { value: "123" },
  });
  fireEvent.change(screen.getByLabelText(/Additional Comments/i), {
    target: { value: "No comments" },
  });

  // Simulate form submission
  fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

  // Wait for the Thank You message to appear
  await waitFor(() =>
    expect(screen.getByText(/Thank You!/i)).toBeInTheDocument()
  );

  // Verify that clearCart was called
  expect(mockClearCart).toHaveBeenCalledTimes(1);
});
