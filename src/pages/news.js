import React, { useState } from 'react';
import OtcSidebar from '../components/OtcSidebar';
import OtcNavbar from '../components/OtcNavbar';
import NewsHeroSection from '../components/NewsHeroSection';
import NewsListSection from '../components/NewsListSection';
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
      <NewsListSection t={t}></NewsListSection>
      <Footer></Footer>
    </div>
  );
};

export default News;