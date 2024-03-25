import React, { useState } from 'react'
import ShowBudge from '../Components/ShowBudge'
import ShowExpense from '../Components/ShowExpense'
import AddExpense from '../Components/AddExpense'
import { createContext, } from 'react'
import { Context } from '../Components/Context'

function MainPage() {
    const[expense,setExpense]=useState(0)
    const[showExpense,setShowExpense]=useState([])


  return (
   <>
   <Context.Provider value={{expense,setExpense,showExpense,setShowExpense}}>

   <ShowBudge/>
   <ShowExpense/>
   <AddExpense/>
   </Context.Provider>
  
   
   </>
  )
}

export default MainPage