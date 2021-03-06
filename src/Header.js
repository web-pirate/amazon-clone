import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInPut" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav"></div>
      <div className="header__option">
        <span className="header__optionLineOne">Hello Manish</span>
        <span className="header__optionLineTwo">Sign In</span>
      </div>
      <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">Order</span>
      </div>
      <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
      </div>
      <Link to='/checkout'>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
  <span className="header__optionalLineTwo header__basketCount">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
