import React, { useState, useEffect } from 'react';
import OtcSidebar from '../components/OtcSidebar';
import OtcNavbar from '../components/OtcNavbar';
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
      duration: 2000,
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
    <div>
      <OtcSidebar isOpen={isOpen} toggle={toggle} changeLanguage={changeLan} ln={ln} t={t}/>
      <OtcNavbar toggle={toggle} changeLanguage={changeLan} ln={ln} t={t}/>
      <HeroSection  id='home' t={t}/>
      <InforSection id='about' ln={ln} t={t}/>
      <SerSection id='services' ln={ln} t={t}/>
      <RoadMap id='roadmap' t={t} ln={ln}/>
      <Career id='career' t={t}/>
      <Footer />
    </div>
  );
};

export default Home;
