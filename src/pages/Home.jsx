import React from 'react';
import Navbar from '../components/Navbar';
import Herosection from '../components/Herosection';
import AboutUs from '../components/AboutUs';
import OurImpact from '../components/OurImpact';
import GetInvolved from '../components/GetInvolved';
import SwiperSection from '../components/SwiperSection';
import NewsFeed from '../components/NewsFeed';
import OurPartner from '../components/OurPartner';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <AboutUs />
      <OurImpact />
      <GetInvolved />
      <SwiperSection />
      <NewsFeed />
      <OurPartner />
      <Footer />
    </div>
  )
}

export default Home;
