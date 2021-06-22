import React, { useState } from 'react';
import OtcSidebar from '../components/OtcSidebar';
import OtcNavbar from '../components/OtcNavbar';
import NftHeroSection from '../components/NftHeroSection';
import NftInfoSection from '../components/NftInfoSection';
import NftParnterSection from '../components/NftPartnerSection';
import NftServiceSection from '../components/NftServiceSection';
import Footer from '../components/Footer';

const NFT = ({changeLan,ln,t}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <OtcSidebar isOpen={isOpen} toggle={toggle} changeLanguage={changeLan} ln={ln} t={t}/>
      <OtcNavbar toggle={toggle} changeLanguage={changeLan} ln={ln} t={t}/>
      <NftHeroSection t={t}></NftHeroSection>
      <NftInfoSection t={t}></NftInfoSection>
      <NftServiceSection t={t}></NftServiceSection>
      <NftParnterSection t={t}></NftParnterSection>
      <Footer></Footer>
    </div>
  );
};

export default NFT;