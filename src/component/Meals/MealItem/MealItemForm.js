import CartContext from "../../../Store/CartContext";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useContext } from "react";

const MealItemForm = (props) => {
  const cartContext = useContext(CartContext);
  const onAddClick = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("amount_" + props.id).value;
    cartContext.addItemToCart({ ...props.item, quantity: quantity });
    console.log("props item ", props.item);
  };

  return (
    <form className={classes.form}>
      {console.log("inside form ")}
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={onAddClick}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
