import Search from "./images/Search.jpg"
import cart from "./images/Bag.jpg"
import Account from "./images/Account.jpg"
import nav from "./images/Nav.jpg"

import React, { useState } from "react";
// import SearchIcon from '@material-ui/icons/Search';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import "./App.css"

function Header() {
  const [menuList , setMenuList] = useState(false)

  return (
    <div className="header">
        <h1>MY COMPANY.COM</h1>
       
        {
          menuList?
            <>
      <div className="hearder_center1" value={menuList}>
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
            </>
            :null
        }

<div className="hearder_center" value={menuList}>
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
        <img src={Search} alt="no image" className="header_search"/>
        <img src={cart} alt="no image"className="header_cart"/>
        <img src={Account} alt="no image" className="header_account"/>
        <img src={nav} className="header_nav" onClick={()=>setMenuList(!menuList)}/>
          
      </div>
    </div>
  );
}

export default Header;
