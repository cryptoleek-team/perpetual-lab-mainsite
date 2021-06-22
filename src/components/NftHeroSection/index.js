import React from 'react';
import {
    HeroContainer,
    HeroBg,
    ImgBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroLine
  } from './NftHeroElements';

  import nftBg from '../../images/NFT.jpg'

const NftHeroSection = ({t})=>{
    return (
        <HeroContainer>
        <HeroBg> 
          <ImgBg src={nftBg} alt="nft background"></ImgBg>
        </HeroBg>
        <HeroContent>
            <HeroH1>{t("nftTitle")}</HeroH1>
            <HeroLine/>
            <HeroP>{t("nftSubtitle")}</HeroP>
        </HeroContent>
      </HeroContainer>
    )
}

export default NftHeroSection