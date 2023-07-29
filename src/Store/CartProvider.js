import CartContext from "./CartContext";
import React, { useState } from "react";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (newItem) => {
    updateItems((prevItem) => {
      return [...prevItem, newItem];
    });
    // cartContext.items.push(item);
    console.log("cartContext ", cartContext);
  };


  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log("CartContext.Provider renders", cartContext)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
