

import "./App.css"
import HomePage from "./Components/HomePage"
import Quotes from "./Components/quotes"
import ResturantHomePage from "./Components/ResturantHomePage"
import { Route,Routes } from "react-router-dom"

function App() {
 

  return (
    <div className="MainContainer">
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Quotes" element={<Quotes />} />
          <Route path="/ResturantHomePage" element={<ResturantHomePage />} />
          
          
        </Routes>
       
    </div>
  
   
   
  )
}

export default App
