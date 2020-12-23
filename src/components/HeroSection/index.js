import React from 'react';
import Video from '../../videos/video1.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements';

const HeroSection = ({ id, t, i18n }) => {

  return (
    <HeroContainer id={id}>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>{t("title")}</HeroH1>
        <HeroP>{t("description")}</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection
