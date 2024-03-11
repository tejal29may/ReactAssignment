import React from 'react'
import Nav from './nav'
import MainSection from './MainSection'
import Footer from './footer'
import "./mainSection.css"
function HomePage() {
  return (
    <div className='home'>
<Nav/>
<MainSection/>
<Footer/>
    </div>
  )
}

export default HomePage