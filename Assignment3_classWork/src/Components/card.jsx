import React from 'react'
import "./card.css"
function Card(props) {
  return (
    <div className='cardDiv'>
     <div className='info'>
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