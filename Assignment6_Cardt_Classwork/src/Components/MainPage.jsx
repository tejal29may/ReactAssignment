import React, { useState } from 'react'
import "./MainPage.css"
import Nav from './Nav'
import Cart from './cart'
function MainPage() {
  const[products,setProducts]=useState([
    {
      id:1,
      img:"https://www.course-api.com/images/cart/phone-1.png",
      model:"Samsung Galaxy S8",
      price:399.99,
      quantity:0

  },
  {
      id:2,
      img:"https://www.course-api.com/images/cart/phone-2.png",
      model:"google pixel",
      price:499.99,
      quantity:0

  },
  {    id:3,
      img:"https://www.course-api.com/images/cart/phone-3.png",
      model:"Xiaomi Redmi Note 2",
      price:699.99,
      quantity:0

  },
  {   
    id:4,
      img:"https://www.course-api.com/images/cart/phone-4.png",
      model:"Samsung Galaxy S7",
      price:599.99 ,
      quantity:0

  }
  ])

  const[quantity,setQuantity]=useState(0)

  
  return (
    <>
    <div>
      <Nav quantity={quantity}/>
      <h2 style={{textAlign:"center", fontSize:"30px", marginTop:"3%"}}>YOUR BAG</h2>
      
          <Cart products={products}  setProducts={setProducts} quantity={quantity} setQuantity={setQuantity}/>
       
    </div>

    </>
  )
}

export default MainPage


