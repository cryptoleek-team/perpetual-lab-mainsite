import React, { useState, useEffect } from 'react';
import OtcSidebar from '../components/OtcSidebar';
import OtcNavbar from '../components/OtcNavbar';
import OtcHeroSection from '../components/OtcHeroSection';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
//import Aos from "aos";
import 'aos/dist/aos.css';

const Otc = () => {

  // useEffect(() => {
  //   Aos.init({ 
  //     duration: 2000,
  //   });
  // }, []);

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
      <OtcHeroSection t={t}/>
      <h2>This is OTC</h2>
      <Footer />
  </div>
  );
};

export default Otc;
