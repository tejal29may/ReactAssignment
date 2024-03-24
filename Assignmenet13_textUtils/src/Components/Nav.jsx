import React, { useReducer, useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";



function Nav({dispatch,state}) {

//  const[darkmode,setdarkmode]=useState(false)
  
  return (
    <>
      <div className="nav" style={{backgroundColor:state.darkmode?"black":"white"}}>
        <div className="left" >
          <h3>TextUtils</h3>
          <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/AboutUs"><li>About </li></NavLink>
            <NavLink to="/Contact"><li>Contact</li></NavLink>
          </ul>
        </div>
        <div className="right">
          <button onClick={()=>{
            dispatch({type:"darkmode", payload:true})
          }}>Dark mode</button>
        </div>
      </div>
    </>
  );
}

export default Nav;
