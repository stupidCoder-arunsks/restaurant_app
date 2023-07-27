import { Fragment } from "react";
import MealImage from "../../asset/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>React Meals</h2>
        <HeaderCartButton onShow={props.onShow}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImage} alt="A table full of delicious Meals!"></img>
      </div>
    </Fragment>
  );
};

export default Header;
