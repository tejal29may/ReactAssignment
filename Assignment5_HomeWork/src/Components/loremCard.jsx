import React from 'react'
import "./loremCard.css"
function LoremCard(props) {
  return (
    <div className='loremcard'>
       
<p>{props.ind} ] {props.name}</p>
    </div>
  )
}

export default LoremCard