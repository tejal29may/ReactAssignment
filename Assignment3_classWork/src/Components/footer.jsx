import React from 'react'
import "./footer.css"
import { FaHeart,FaFacebook,FaGithub,FaInstagram,FaTwitter, FaGit } from "react-icons/fa";
function Footer() {
   
    
  return (
    <div className='footer' >


    <h3 style={{color:"green",fontSize:"20px",fontFamily:"cursive"}}>logoipsum</h3>

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br> Incidunt consequuntur amet culpa cum itaque neque.</p>
<div className='menus'>
    <ul>
        <li>About</li>
        <li>Career</li>
        <li>Hostory</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Blogs</li>
    </ul>

</div>
<div className='logos'>
    <ul>
        <li><FaFacebook /></li>
        <li><FaTwitter /></li>
        <li><FaInstagram /></li>
        <li><FaGithub /></li>
       
    </ul>

</div>
    </div>
  )
}

export default Footer