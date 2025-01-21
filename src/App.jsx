import React from 'react'
import Hero from './Components/Hero/Hero'
import Services from './Components/Servi/Services'
import Banner from './Components/Banner/Banner'
import Subcribe from './Components/Subscribe/Subcribe'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
  <main className='overflow-hidden bg-white text-dark'>   
   <Hero/>
   <Services/>
   <Banner/>
   <Subcribe/>
   <Footer/>
  </main>
  )
}

export default App