import React from 'react'
import "./header.css"
function Header() {
  return (
    <div className='header'>
       <h1 style={{color:"rgb(177, 10, 82)"}}>Family Wellness</h1>
       <p>MESSAGE THEREPY</p>
       <div className='navbar'>
        <ul className='list'>
          <li style={{backgroundColor:"rgb(177, 10, 82)"}}>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>FAQ</li>
          <li>CONTACT</li>
        </ul>

       </div>

    </div>
  )
}

export default Header