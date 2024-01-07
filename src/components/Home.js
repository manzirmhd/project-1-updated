import React from 'react'
import Navbar from './Navbar'
import HeroComp from './HeroComp'
import HeroSection from './HeroSection'
import Offer from './Offer'
import HeroSectionTwo from './HeroSectionTwo'
import Trust from './Trust'
import Footer from './Footer'



function Home  ()  {
  return (
    <div>
    <Navbar></Navbar>
    <HeroComp></HeroComp>
    <HeroSection></HeroSection>
    <Offer></Offer>
    <HeroSectionTwo></HeroSectionTwo>
    <Trust></Trust>
    <Footer></Footer>
    </div>
  )
}
export default Home;
