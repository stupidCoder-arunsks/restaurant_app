import CartContext from "../../Store/CartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import React, { useContext } from "react";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const combinedItems = {};
  cartContext.items.forEach((item) => {
    if (!combinedItems[item.id]) {
      combinedItems[item.id] = item;
    } else {
      combinedItems[item.id].quantity =
        +combinedItems[item.id].quantity + +item.quantity;
    }
  });

  const cartItem = Object.values(combinedItems);
  console.log("cartItem ", cartItem);

  let totalPrice = 0;
  cartItem.forEach((item) => {
    totalPrice = totalPrice + item.quantity * item.price;
  });

  // cartContext.cartUpdate(cartItem, totalPrice);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartItem.map((item) => (
        <li>
          {`name:${item.name} price:${item.price} quantity:${item.quantity}`}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onHide={props.onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHide}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
