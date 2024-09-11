import { useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import HeroSection from '../components/heroSection'
import ServicesSection from '../components/servicesSection'


import FeaturesSection from '../components/featureSection'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className="pt-16"> {/* Ajustez cette valeur selon la hauteur de votre header */}
        <HeroSection/>
        <ServicesSection/>
        <FeaturesSection/>
      </div>
      <Footer/>
    </>
  )
}

export default App