// context/CartContext.js
import React, {createContext, useState} from 'react';
export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState({});

  // Function to update cart items
  const updateCart = (id, product) => {
    setCart(prevCart => {
      if (product.quantity === 0) {
        // Remove item with 0 quantity
        const newCart = {...prevCart};
        delete newCart[id];
        return newCart;
      }

      return {
        ...prevCart,
        [id]: {
          ...prevCart[id],
          ...product,
          total: product.price * product.quantity,
        },
      };
    });
  };

  // Calculate the total price of all products in the cart
  const getTotalPrice = () => {
    return Object.values(cart).reduce(
      (sum, item) => sum + (item.total || 0),
      0,
    );
  };

  return (
    <CartContext.Provider value={{cart, updateCart, getTotalPrice}}>
      {children}
    </CartContext.Provider>
  );
};
