import React from 'react';
import Navbar from '../components/Navbar';
import Herosection from '../components/Herosection';
import AboutUs from '../components/AboutUs';
import OurImpact from '../components/OurImpact';
import GetInvolved from '../components/GetInvolved';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <AboutUs />
      <OurImpact />
      <GetInvolved />
    </div>
  )
}

export default Home;
