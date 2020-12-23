import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InforSection from '../components/InforSection';
import SerSection from '../components/SerSection';
import RoadMap from '../components/RoadMap';
import Career from '../components/Career';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import Aos from "aos";
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({ 
      duration: 600,
      disable: function() {
        return window.innerWidth < 768;
      }
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  
  
  const { t } = useTranslation();
  const [ln, setLn] = useState('English');

  const changeLan = () => {
    if (ln==='English') {
      setLn('中文');
    } else {
      setLn('English');
    } 
  };

  useEffect(() => {
    i18n.changeLanguage(ln);
  }, [ln]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} changeLanguage={changeLan} ln={ln} t={t} i18n={i18n}/>
      <Navbar toggle={toggle} changeLanguage={changeLan} ln={ln} t={t} i18n={i18n}/>
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
