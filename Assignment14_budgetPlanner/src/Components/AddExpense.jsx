import React, { useContext, useRef } from 'react'
import { Context } from './Context'

function AddExpense() {

    const{setExpense,setShowExpense,expense,showExpense} = useContext(Context);
    const titleref=useRef()
    const priceref=useRef()

    const clickHandler=()=>{
        const title=titleref.current.value;
        const price=Number(priceref.current.value);
        setShowExpense((prev)=>[...prev,{title,price}])
        console.log("show",showExpense);
        setExpense((pre)=>pre+price)
      
    }


  return (
   <>
   <h3>Add Expenses:</h3>
   <div className="addItems" style={{display:"flex" ,gap:"10%"}}>
    <input type="text" ref={titleref} placeholder='Name'/>
    <input type="number" ref={priceref} placeholder='Cost'/>
    <button onClick={clickHandler}>Submit</button>
   </div>
   
   </>
  )
}

export default AddExpense