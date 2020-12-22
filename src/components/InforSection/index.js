import React, { useEffect } from 'react';
import {
  InfoContainer,
  TextWrapper,
  TopLine,
  Heading,
  Box,
  Title,
  SubTitle,
  Description,
  BoxContent,
  TopLine2
} from './InforElements';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png';
import logo3 from '../../images/logo3.png';
import Aos from "aos";
import 'aos/dist/aos.css';

const InforSection = ({id}) => {
  useEffect(() => {
    Aos.init({ duration: 3000});
  }, []);
  
  return (
    <InfoContainer id={id}>
      <TextWrapper>
        <Heading data-aos="fade-down">INTRODUCTION</Heading>
        <TopLine data-aos="fade-down">Perpetual Labs is a dedicated blockchain research lab providng world class blockchain services such as crypto exchange,  </TopLine>
        <TopLine2 data-aos="fade-down">crypto wallet, crypto custodian, decentralized finance applications and BAAS etc.</TopLine2>
        <BoxContent data-aos="fade-down">
          <Box>
            <img src={logo1} alt="logo" />
            <Title>Yesbit OTC</Title>
            <SubTitle>OTC Trading platform</SubTitle>
            <Description>A block transportation channel based on IBLT which can compress the block size when relaying blocks</Description>
          </Box>
          <Box>
            <img src={logo2} alt="logo" />
            <Title>KrawlCat</Title>
            <SubTitle>OTC Trading platform</SubTitle>
            <Description>A protocol under which the peer under different blockchain systems can discover</Description>
          </Box>
          <Box>
            <img src={logo3} alt="logo" />
            <Title>Standardized P2P</Title>
            <SubTitle>OTC Trading platform</SubTitle>
            <Description>Provides the ability of one chain to validate the state of another chain underlow bandwidth</Description>
          </Box>
          <Box>
            <img src={logo2} alt="logo" />
            <Title>KrawlCat</Title>
            <SubTitle>OTC Trading platform</SubTitle>
            <Description>A protocol under which the peer under different blockchain systems can discover</Description>
          </Box>
        </BoxContent>
      </TextWrapper>
    </InfoContainer>
  )
}

export default InforSection;
