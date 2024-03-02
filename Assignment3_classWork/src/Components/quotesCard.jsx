import React from 'react'
import "./quoteCard.css"
function  QuotesCard(props) {
 
  return (
    <div className='quotes'>
      <div className="quotescardData">
        <p className='quoteTitle'>{props.quote}</p>
        <p className='author'>{props.author}</p>
      </div>

    </div>
  )
}

export default QuotesCard