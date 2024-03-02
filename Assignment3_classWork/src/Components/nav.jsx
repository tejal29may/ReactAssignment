import React from 'react'
import "./nav.css"

const Nav = () => {
  return (
    <div className='mainDiv'>
        <div className='left'>
            <img src="https://flowbite.com/docs/images/logo.svg" alt="" srcset="" />
            <p className='heading'>GeekFoods</p>
        </div>
        <div className='menu'>
            <ul>
                <li style={{color:"rgb(59 130 246)"}}>Home</li>
                <li>Quote</li>
                <li>Resturants</li>
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