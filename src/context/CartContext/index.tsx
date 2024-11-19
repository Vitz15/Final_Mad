// context/CartContext.js
import React, {createContext, useState} from 'react';
export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState({});

  const updateCart = (id, product) => {
    setCart(prevCart => {
      if (product.quantity === 0) {
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
