import React, { useState } from 'react';
import OtcSidebar from '../components/OtcSidebar';
import OtcNavbar from '../components/OtcNavbar';
import CapitalHeroSection from '../components/CaptialHeroSection'
import CapitalInfoSection from "../components/CapitialInfoSection"
import CapitalPromoSection from "../components/CapitalPromoSection"
import CapitalApproachSection from "../components/CapitalApproachSecction"
import CapitalInsightSection from "../components/CapitalInsightSection"
import Footer from '../components/Footer';


const Capital = ({changeLan,ln,t}) => {
  const [isOpen, setIsOpen] = useState(false);
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