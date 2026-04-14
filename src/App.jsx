import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import MeetTeam from './components/MeetTeam'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">

      <Navbar theme={theme} setTheme={setTheme}/>
     
        <Hero/>
        <TrustedBy/>
        <Services/>
        <OurWork/>
        <MeetTeam/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default App;
