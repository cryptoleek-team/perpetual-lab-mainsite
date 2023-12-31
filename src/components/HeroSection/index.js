import React from 'react';
import Video from '../../videos/background.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP
} from './HeroElements';

const HeroSection = ({ id, t }) => {
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
