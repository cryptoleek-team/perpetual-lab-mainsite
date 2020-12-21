import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements';

const HeroSection = ({ id, t, i18n }) => {
  // const { t, i18n } = useTranslation();
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  

  return (
    <HeroContainer id={id}>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>{t("title")}</HeroH1>
        <HeroP>{t("description")}</HeroP>
        <HeroBtnWrapper>
          <Button to='/' 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            {t("whitepaper")} {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>

  );
};

export default HeroSection
