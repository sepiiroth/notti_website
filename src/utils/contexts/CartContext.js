import React, { createContext, useState, useEffect } from "react";
import { itemList } from "../../datas/itemList";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getStock = (product, color, size) => {
    const prod = itemList.find((item) => item.id === product.id);
    const stockKey =
      size.toLowerCase() + "_stock_" + (color === "Blanc" ? "w" : "b");

    console.log(prod[stockKey]);

    return prod[stockKey];
  };

  const checkStock = (product, color, size, quantity) => {
    console.log(getStock(product, color, size), quantity);
    return getStock(product, color, size) >= quantity;
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (p) =>
          p.id === product.id &&
          p.selectedSize === product.selectedSize &&
          p.selectedColor === product.selectedColor &&
          p.selectedStyle === product.selectedStyle
      );
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        const newQuantity =
          updatedCart[existingProductIndex].quantity + product.quantity;
        if (
          checkStock(
            product,
            product.selectedColor,
            product.selectedSize,
            newQuantity
          )
        ) {
          updatedCart[existingProductIndex].quantity = newQuantity;
          return updatedCart;
        } else {
          alert("Stock insuffisant");
          return prevCart;
        }
      } else {
        if (
          checkStock(
            product,
            product.selectedColor,
            product.selectedSize,
            product.quantity
          )
        ) {
          return [...prevCart, product];
        } else {
          alert("Stock insuffisant");
          return prevCart;
        }
      }
    });
  };

  const updateQuantity = (productIndex, newQuantity) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const product = updatedCart[productIndex];
      if (
        checkStock(
          product,
          product.selectedColor,
          product.selectedSize,
          newQuantity
        )
      ) {
        updatedCart[productIndex].quantity = newQuantity;
        return updatedCart;
      } else {
        alert("Stock insuffisant");
        return prevCart;
      }
    });
  };

  const removeFromCart = (productIndex) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((_, index) => index !== productIndex);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
