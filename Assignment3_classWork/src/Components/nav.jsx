import React from 'react'
import "./nav.css"
import { Outlet, Link, NavLink } from "react-router-dom";
import { useState } from 'react';

const Nav = () => {

    const[menuopen,setmenuopen]=useState(false)

  return (
    <div className='mainDiv'>
        <div className='left'>
            <img src="https://flowbite.com/docs/images/logo.svg" alt="" srcset="" />
            <p className='heading'>GeekFoods</p>
        </div>
        <div className="smallMenu" onClick={()=>{
            setmenuopen(!menuopen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className='menu'>
            <ul className={menuopen?"open":""}>
               
                <li> <Link style={{color:"rgb(59 130 246)"}} to="/">Home</Link></li>
                <li> <NavLink to="/quotes">Quotes</NavLink></li>
                {/* <li><a href="./quotes">Quotes</a></li> */}
                <li><NavLink to="/ResturantHomePage">Resturants</NavLink></li>
                <li>Foods</li>
                <li>Conatct</li>
            </ul>
        </div>
        <div className='right'>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Nav