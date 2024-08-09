import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductList from "./ProductList";
import { CartProvider, useCart } from "./CartContext";

// Mock getProducts
jest.mock("./api", () => ({
  getProducts: () => [
    { id: 1, name: "Sample Product", price: 10, Image: null },
  ],
}));

// Mock CartContext
const CartContextMock = React.createContext();

const MockCartProvider = ({ children }) => {
  const addToCartMock = jest.fn();

  return (
    <CartContextMock.Provider value={{ addToCart: addToCartMock }}>
      {children}
    </CartContextMock.Provider>
  );
};

// Mock the useCart hook
jest.mock("./CartContext", () => ({
  useCart: () => ({
    addToCart: jest.fn(),
  }),
}));

test("Add to Cart button renders correctly with getByRole", () => {
  render(
    <MockCartProvider>
      <ProductList />
    </MockCartProvider>
  );

  const buttonElement = screen.getByRole("button", { name: /Add to Cart/i });
  expect(buttonElement).toBeInTheDocument();
});
