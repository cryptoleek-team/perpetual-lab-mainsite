import React from 'react';
import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP
} from './OtcHeroElements';

const OtcHeroSection = ({ t }) => {
  return (
    <HeroContainer>
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

export default OtcHeroSection