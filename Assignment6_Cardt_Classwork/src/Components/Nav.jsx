import React from "react";
import "./Nav.css";

import BadgeCart from "./BadgeCart"

function Nav({quantity}) {
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <p>Add To cart</p>
           
          </li>
        
          <li><BadgeCart quantity={quantity}/> </li>
         
         
        </ul>
      </div>
    </>
  );
}

export default Nav;
