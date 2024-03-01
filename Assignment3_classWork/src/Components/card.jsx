import React from 'react'
import "./card.css"
function Card(props) {
  return (
    <div>
     <div style={{padding:"35px",backgroundColor:"rgb(249 250 251)",width:"405px",textAlign:"left",borderRadius:"0.75rem",boxShadow:"0 0 1px gray"}}>
      <p className='para'>{props.para}</p>
     </div>
     <div style={{display:"flex",gap:"15px"}} className='cardimg'> 
      <img src={props.img} alt="" width="50px" height="50px"  />
      <div>
        <p><b>{props.name}</b></p>
        <p>{props.position}</p>
      </div>
     </div>
    </div>
  )
}

export default Card