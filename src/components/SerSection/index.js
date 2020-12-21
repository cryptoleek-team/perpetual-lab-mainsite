import React, { useEffect } from 'react';
import { SerContent, SerWrapper, SerRow, Column1, Column2, Text, TopLine, Heading, Subtitle, BtnWrap, ImgWrap } from './ServiceElements'
import { Button } from '../ButtonElements';
import img1 from '../../images/service.png';
import img2 from '../../images/service1.png';
import img3 from '../../images/service2.png';
import Aos from "aos";
import 'aos/dist/aos.css';

const SerSection = ({id}) => {
  useEffect(() => {
    Aos.init({ duration: 3000});
  }, []);

  return (
    <>
      <SerContent id={id}>
        <SerWrapper>
          <h1 data-aos="fade-down">KNOW MORE ABOUT WHAT WE DO</h1>
          <p data-aos="fade-down">OTC EXCHANE BLOCKCHAIN ORACLE: TECHNICAL SUPPORT</p>
          <SerRow imgStart={true}>
            <Column1 data-aos="fade-right">
              <Text>
                <TopLine>Yesbit OTC</TopLine>
                <Heading>Fiat-Crypto OTC trading platform</Heading>
                <Subtitle>An Over The Counter (OTC) platform which allows Fiat-currency to be used to trade Cryptocurrencies. The encrypted transaction and the professional customer service are provided to protect every users funds.</Subtitle>
                <BtnWrap>
                  <Button 
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={1}
                    dark={1}
                    dark2={1}
                    >
                      Get Start</Button>
                </BtnWrap>
              </Text>
            </Column1>
            <Column2 data-aos="fade-right">
              <ImgWrap>
                <img src={img1} alt=''/>
              </ImgWrap>
            </Column2>
          </SerRow>
          <SerRow imgStart={false}>
            <Column1 data-aos="fade-left">
              <Text>
                <TopLine>KrawlCat</TopLine>
                <Heading>A Generalized Oracle for Blockchains</Heading>
                <Subtitle>KrawlCat Generalized Oracles bridges the gap between the current internet infrastructure and closed blockchain networks by bringing off-chain data to on-chain. Moreover, its generalized nature allows it to facilitate cross chain communication between solitary blockchain protocols.</Subtitle>
                <BtnWrap>
                  <Button 
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={1}
                    dark={1}
                    dark2={1}
                    >
                      Get Start</Button>
                </BtnWrap>
              </Text>
            </Column1>
            <Column2 data-aos="fade-left">
              <ImgWrap>
                <img src={img2} alt=''/>
              </ImgWrap>
            </Column2>
          </SerRow>
          <SerRow imgStart={true}>
            <Column1 data-aos="fade-right">
              <Text>
                <TopLine>Yesbit OTC</TopLine>
                <Heading>Fiat-Crypto OTC trading platform</Heading>
                <Subtitle>An Over The Counter (OTC) platform which allows Fiat-currency to be used to trade Cryptocurrencies. The encrypted transaction and the professional customer service are provided to protect every users funds.</Subtitle>
                <BtnWrap>
                  <Button 
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={1}
                    dark={1}
                    dark2={1}
                    >
                      Get Start</Button>
                </BtnWrap>
              </Text>
            </Column1>
            <Column2 data-aos="fade-right">
              <ImgWrap>
                <img src={img3} alt=''/>
              </ImgWrap>
            </Column2>
          </SerRow>
        </SerWrapper>
      </SerContent>
    </>
  )
}

export default SerSection;
