import React, { useContext } from 'react'
import { Context } from './Context'

function ShowBudge() {

    const{expense}=useContext(Context)
    console.log(expense);
    const budget=2000;
  return (
   <>
   <h2>Show Budge Planner</h2>
   <div className="show" style={{display:"flex",gap:"10%"}}>
    <h3>Budge: {budget}</h3>
    <h3>Remaining : {parseInt(budget-expense)}</h3>
    <h3>Spend So far : {parseInt(expense)}</h3>
   </div>
   </>
  )
}

export default ShowBudge