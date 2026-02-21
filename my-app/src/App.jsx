import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import Navbar from './Component/navbar'
import Hero from './Component/Hero'
import Services from './Component/Service'
import CaseStudySection from './Component/Clients'
import WorkingProcess from './Component/WorkProccessing'
import TestimonialSection from './Component/TestimonialSection'
import TeamSection from './Component/TeamSection'
import  ContactSection from './Component/ContactusSection'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <Navbar />
      <Hero/>
      <Services/>
      <CaseStudySection/>
      <WorkingProcess/>
      <TeamSection/>
      <TestimonialSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App
