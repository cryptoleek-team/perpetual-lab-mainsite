import React, { useState } from 'react';
import OtcSidebar from '../components/OtcSidebar';
import OtcNavbar from '../components/OtcNavbar';
import HeroSection from '../components/HeroSection';
import InforSection from '../components/InforSection';
import Team from '../components/Team';
import SerSection from '../components/SerSection';
import RoadMap from '../components/RoadMap';
import Career from '../components/Career';
import Footer from '../components/Footer';

const Home = ({changeLan,ln,t}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <OtcSidebar isOpen={isOpen} toggle={toggle} changeLanguage={changeLan} ln={ln} t={t}/>
      <OtcNavbar toggle={toggle} changeLanguage={changeLan} ln={ln} t={t}/>
      <HeroSection  id='home' t={t}/>
      <InforSection id='about' ln={ln} t={t}/>
      <Team t={t}/>
      <SerSection id='services' ln={ln} t={t}/>
      <RoadMap id='roadmap' t={t} ln={ln}/>
      <Career id='career' t={t}/>
      <Footer />
    </div>
  );
};

export default Home;
