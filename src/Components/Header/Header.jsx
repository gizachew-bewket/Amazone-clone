import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./Header-images/amazon_PNG11.png";
import { MdLocationOn } from "react-icons/md";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Lowerheader from "./Lowerheader";
import { DataContext } from "../DataProvider/DataProvider.jsx";

const Header = () => {

const [{basket},dispatch]= useContext(DataContext);
const totalitem = basket.reduce((amount, item) => {
  return  item.amount + amount;
}, 0);


  return (
    <section className="fixed__header">
      <header className="header">
        {/* Left section */}
        <div className="header__left ">
          <Link to="/" className="common_style">
            <img src={logo} alt="Amazon Logo" className="header__logo" />
          </Link>
          <div className="header__location common_style">
            <MdLocationOn />
            <div>
              <p className="header__small">Deliver to</p>
              <p className="header__bold">Ethiopia</p>
            </div>
          </div>
        </div>

        {/* Middle search bar */}
        <div className="header__search search">
          <select className="header__searchDropdown common_style">
            <option value="all">All</option>
          </select>
          <input type="text" placeholder="Search products..." />
          <button className="header__searchButton ">
            <FaSearch />
          </button>
        </div>

        {/* Right section */}
        <div className="header__right">
          <div className="header__language common_style">
            <img
              src="https://flagcdn.com/w20/fr.png"
              alt="French"
              className="header__flag"
            />
            <select>
              <option value="en">EN</option>
            </select>
          </div>

          <div className="header__account common_style">
            <Link to="/auth">
              <p className="header__small">Hello, sign in</p>
              <p className="header__bold">Account & Lists</p>
            </Link>
          </div>

          <div className="header__orders common_style">
            <Link to="/order">
              <p className="header__small">Returns</p>
              <p className="header__bold">& Orders</p>
            </Link>
          </div>

          <div className="header__cart common_style">
            <Link to="/cart">
              <FaShoppingCart />
              <span className="header__cartCount">{totalitem}</span>
            </Link>
          </div>
        </div>
      </header>
      <Lowerheader />
    </section>
  );
};

export default Header;
