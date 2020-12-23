import React from 'react';
import { SerContent, SerWrapper, SerWrap, SerRow, Column1, Column2, Text, TopLine, Heading, Subtitle, BtnWrap, ImgWrap } from './ServiceElements'
import { Button } from '../ButtonElements';
import img1 from '../../images/service.png';
import img2 from '../../images/service1.png';
import img3 from '../../images/service2.png';
import img4 from '../../images/service3.png';

const SerSection = ({id}) => {

  return (
    <>
      <SerContent id={id}>
        <SerWrapper>
          <h1>KNOW MORE ABOUT WHAT WE DO</h1>
          <SerWrap>OTC EXCHANE BLOCKCHAIN ORACLE: TECHNICAL SUPPORT</SerWrap>
          <SerRow imgStart={true}>
            <Column1 left={false}>
              <Text>
                <TopLine>Yesbit OTC</TopLine>
                <Heading>Fiat-Crypto OTC trading platform</Heading>
                <Subtitle>
                  World class crypto exchange, white label service, professional consulting service etc.
                </Subtitle>
                <BtnWrap left={true}>
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
            </Column1 >
            <Column2 data-aos="fade-down">
              <ImgWrap>
                <img src={img1} alt=''/>
              </ImgWrap>
            </Column2>
          </SerRow>
          <SerRow imgStart={false}>
            <Column1 left={true}>
              <Text>
                <TopLine>KrawlCat</TopLine>
                <Heading>A Generalized Oracle for Blockchains</Heading>
                <Subtitle>
                  Blockchain wallet support multiple mainstream coins including Bitcoin, LTC, BCH, ETH, EOS, ERC20 etc. We are adding DEFI features in to the wallet including token swap on-the-go, cross-chain token swap, staking, LP mining etc.
                </Subtitle>
                <BtnWrap left={false}>
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
            <Column2 data-aos="fade-down">
              <ImgWrap>
                <img src={img2} alt=''/>
              </ImgWrap>
            </Column2>
          </SerRow>
          <SerRow imgStart={true}>
            <Column1 left={false}>
              <Text>
                <TopLine>Yesbit OTC</TopLine>
                <Heading>Fiat-Crypto OTC trading platform</Heading>
                <Subtitle>World class DAPP including DEFI space, NFT space and STO space. DAPP incubator and development.</Subtitle>
                <BtnWrap left={true}>
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
            <Column2 data-aos="fade-down">
              <ImgWrap>
                <img src={img4} alt=''/>
              </ImgWrap>
            </Column2>
          </SerRow>
          <SerRow imgStart={false}>
            <Column1 left={true}>
              <Text>
                <TopLine>Yesbit OTC</TopLine>
                <Heading>Fiat-Crypto OTC trading platform</Heading>
                <Subtitle>Crypto fund investment, dedicated project research including Sushiswap analytics, Ren Analytics, Uniswap analytics and Sol analytics. Very first fund get into $GRT and 100x gain.</Subtitle>
                <BtnWrap left={false}>
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
            <Column2 data-aos="fade-down">
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
