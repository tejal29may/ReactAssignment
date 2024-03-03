

import "./App.css"
import HomePage from "./Components/HomePage"
import Quotes from "./Components/quotes"
import { Route,Routes } from "react-router-dom"

function App() {
 

  return (
    <div className="MainContainer">
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Quotes" element={<Quotes />} />
          
        </Routes>
       
    </div>
  
   
   
  )
}

export default App
