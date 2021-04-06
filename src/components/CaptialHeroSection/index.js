import React from 'react';
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroLine
} from './CapitalHeroElements';
import capitalBg from '../../images/Capital Background.jpg'
import ParticlesSection from "../Particle"

const CapitalHeroSection = ({t})=>{
  return(
      <HeroContainer>
        <ParticlesSection></ParticlesSection>
        <HeroBg> 
          <ImgBg src={capitalBg} alt="capital background"></ImgBg>
        </HeroBg>
        <HeroContent>
            <HeroH1>{t("capitalTitle")}</HeroH1>
            <HeroLine/>
            <HeroP>{t("capitalSubTitle")}</HeroP>
        </HeroContent>
      </HeroContainer>
    )
}




export default CapitalHeroSection