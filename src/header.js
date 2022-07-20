import Search from "./images/Search.jpg"
import cart from "./images/Bag.jpg"
import Account from "./images/Account.jpg"

import React from "react";
// import SearchIcon from '@material-ui/icons/Search';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import "./App.css"

function Header() {
  return (
    <div className="header">
        <h1>MY COMPANY.COM</h1>
      <div className="hearder_center">
        <label>THE EDIT</label>
        <label>NEW ARRIVALS</label>
        <label>DESIGNERS</label>
        <label>CLOTHING</label>
        <label>SHOES</label>
        <label>BAGES</label>
        <label>ACCESSORIES</label>
        <label>JEWELRY</label>
        <label>BEAUTY</label>
        <label>HOME</label>
      </div>

      <div className="header_right">
        <img src={Search} alt="no image"/>
        <img src={cart} alt="no image"/>
        <img src={Account} alt="no image"/>
        {/* <SearchIcon/>
        <AddShoppingCartIcon/>
        <PermContactCalendarIcon/> */}
      </div>
    </div>
  );
}

export default Header;
