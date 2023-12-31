import React, { useState } from 'react';
import OtcSidebar from '../components/OtcSidebar';
import OtcNavbar from '../components/OtcNavbar';
import NewsHeroSection from '../components/NewsHeroSection';
import NewsListSection from '../components/NewsListSection';
import NewsFeatureSection from '../components/NewsFeatureSection';
import NewsETMSection from '../components/NewsETMSection';
import Footer from '../components/Footer';

const News = ({changeLan,ln,t}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <OtcSidebar isOpen={isOpen} toggle={toggle} changeLanguage={changeLan} ln={ln} t={t}/>
      <OtcNavbar toggle={toggle} changeLanguage={changeLan} ln={ln} t={t}/>
      <NewsHeroSection t={t}></NewsHeroSection>
      <NewsETMSection t={t}></NewsETMSection>
      <NewsListSection t={t}></NewsListSection>
      <NewsFeatureSection t={t}></NewsFeatureSection>
      <Footer></Footer>
    </div>
  );
};

export default News;