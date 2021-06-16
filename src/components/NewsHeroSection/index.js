import React from 'react';
import {
    HeroContainer,
    HeroBg,
    ImgBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroLine
  } from './NewsHeroElements';

  import newsBg from '../../images/news.jpg'

const NewsHeroSection = ({t})=>{
    return (
        <HeroContainer>
        <HeroBg> 
          <ImgBg src={newsBg} alt="news background"></ImgBg>
        </HeroBg>
        <HeroContent>
            <HeroH1>{t("newsTitle")}</HeroH1>
            <HeroLine/>
            <HeroP>{t("newsSubTitle")}</HeroP>
        </HeroContent>
      </HeroContainer>
    )
}

export default NewsHeroSection