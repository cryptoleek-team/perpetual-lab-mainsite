import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InforSection from '../components/InforSection';
import SerSection from '../components/SerSection';
import RoadMap from '../components/RoadMap';
import Career from '../components/Career';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import i18n from'../i18n';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const { t, i18n } = useTranslation();

  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} changeLanguage={changeLanguage} t={t} i18n={i18n}/>
      <HeroSection  id='home' t={t} i18n={i18n}/>
      <InforSection id='about'/>
      <SerSection id='services'/>
      <RoadMap id='roadmap' />
      <Career id='career' /> 
      <Footer />
    </>
  );
};

export default Home;
