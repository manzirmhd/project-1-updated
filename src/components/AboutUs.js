import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';
import Starter from './Starter';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import HeroSectionTwo from './HeroSectionTwo';
import Trust from './Trust';
import Footer from './Footer';


function AboutUs  ()  {
  return (
    <div className="about-us-container">
      <Navbar></Navbar>
     <Starter
     heading="About Us"
     paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Suspendisse varius enim in eros elementum tristique."
     ></Starter>
     <HeroSection></HeroSection>
     <HeroSectionTwo></HeroSectionTwo>
     <Trust></Trust>
     <Footer></Footer>
    </div>
  );
};

export default AboutUs;
