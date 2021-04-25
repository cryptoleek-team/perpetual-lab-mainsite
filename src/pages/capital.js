import React, { useState, useEffect } from 'react';
import OtcSidebar from '../components/OtcSidebar';
import OtcNavbar from '../components/OtcNavbar';
import CapitalHeroSection from '../components/CaptialHeroSection'
import CapitalInfoSection from "../components/CapitialInfoSection"
import CapitalPromoSection from "../components/CapitalPromoSection"
import CapitalApproachSection from "../components/CapitalApproachSecction"
import CapitalInsightSection from "../components/CapitalInsightSection"
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import Aos from "aos";
import 'aos/dist/aos.css';

const Capital = () => {

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
      <CapitalHeroSection t={t}/>
      <CapitalInfoSection t={t}/>
      <CapitalPromoSection t={t}/>
      <CapitalApproachSection t={t}/>
      <CapitalInsightSection t={t} ln={ln}/>
      <Footer />
  </div>
  );
};

export default Capital;