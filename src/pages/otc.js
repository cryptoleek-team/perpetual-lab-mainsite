import React, { useState } from 'react';
import OtcSidebar from '../components/OtcSidebar';
import OtcNavbar from '../components/OtcNavbar';
import OtcHeroSection from '../components/OtcHeroSection';
import OtcInfoSection from '../components/OtcInfoSection'
import OtcPromoSection from '../components/OtcPromoSection'
import OtcBeneSection from "../components/OtcBeneSection"
import Footer from '../components/Footer';

const Otc = ({changeLan,ln,t}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <OtcSidebar isOpen={isOpen} toggle={toggle} changeLanguage={changeLan} ln={ln} t={t}/>
      <OtcNavbar toggle={toggle} changeLanguage={changeLan} ln={ln} t={t}/>
      <OtcHeroSection ln={ln} t={t}/>
      <OtcInfoSection t={t}></OtcInfoSection>
      <OtcPromoSection t={t}></OtcPromoSection>
      <OtcBeneSection t={t}></OtcBeneSection>
      <Footer />
  </div>
  );
};

export default Otc;
