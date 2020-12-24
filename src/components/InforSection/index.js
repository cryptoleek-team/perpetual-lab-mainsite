import React from 'react';
import {
  InfoContainer,
  TextWrapper,
  TopLine,
  Heading,
  Box,
  Title,
  SubTitle,
  Description,
  BoxContent
} from './InforElements';
import logo1 from '../../images/crypto.png';
import logo2 from '../../images/bitcoin.png';
import logo3 from '../../images/defi.png';
import logo4 from '../../images/invest.png';

const InforSection = ({id, t}) => {
  
  return (
    <InfoContainer id={id}>
      <TextWrapper>
        <Heading>{t("introduction")}</Heading>
        <TopLine>{t("topline")}</TopLine>
        <BoxContent data-aos="fade-down">
          <Box>
            <img src={logo1} alt="logo" />
            {/* <Title>Yesbit OTC</Title> */}
            <SubTitle>OTC Trading platform</SubTitle>
            <Description>A block transportation channel based on IBLT which can compress the block size</Description>
          </Box>
          <Box>
            <img src={logo2} alt="logo" />
            {/* <Title>KrawlCat</Title> */}
            <SubTitle>OTC Trading platform</SubTitle>
            <Description>A protocol under which the peer under different blockchain systems can discover</Description>
          </Box>
          <Box>
            <img src={logo3} alt="logo" />
            {/* <Title>Standardized P2P</Title> */}
            <SubTitle>OTC Trading platform</SubTitle>
            <Description>Provides the ability of one chain to validate the state of another chain underlow bandwidth</Description>
          </Box>
          <Box>
            <img src={logo4} alt="logo" />
            {/* <Title>KrawlCat</Title> */}
            <SubTitle>OTC Trading platform</SubTitle>
            <Description>A protocol under which the peer under different blockchain systems can discover</Description>
          </Box>
        </BoxContent>
      </TextWrapper>
    </InfoContainer>
  )
}

export default InforSection;
