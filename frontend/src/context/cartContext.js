import React, { createContext, useState } from "react";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => setIsCartOpen((open) => !open);

  const addCartItem = (item) => {
    if (!cartItems.includes(item)) {
      setCartItems([...cartItems, item]);
    }
  };

  return (
    <CartContext.Provider
      value={{ isCartOpen, toggleCart, cartItems, addCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

const withCart = (Child) => (props) =>
  (
    <CartContext.Consumer>
      {(context) => <Child {...props} {...context} />}
    </CartContext.Consumer>
  );

export { CartProvider, withCart };
