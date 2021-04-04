import React,{useRef,useEffect} from 'react';
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBox1,
  HeroBox2
} from './OtcHeroElements';
import * as typeformEmbed from "@typeform/embed";
import otcBg from '../../images/OTC Background.jpg'

const OtcHeroSection = ({ t }) => {

  const typeformRef = useRef(null);

  useEffect(() => {
      typeformEmbed.makeWidget(
          typeformRef.current,
          "https://lkdxb8kibs5.typeform.com/to/oHL5KBHn",
          {
              hideFooter: true,
              hideHeaders: true,
              opacity: 80,
          }
      );
  }, [typeformRef]);
  return (
    <HeroContainer>
      <HeroBg>
        <ImgBg src={otcBg} alt="otc background" />
      </HeroBg>
      <HeroContent>
        <HeroBox1>
          <div>
            <HeroH1>{t("otcTitle")}</HeroH1>
            <HeroP>{t("otcSubtitle")}</HeroP>
          </div>
        </HeroBox1>

        <HeroBox2>
          <div ref={typeformRef} style={{ height: "400px", width: "100%" }}></div>
        </HeroBox2>
      </HeroContent>
    </HeroContainer>
  );
};

export default OtcHeroSection