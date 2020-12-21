import React, {useEffect} from 'react';
import { SerContent, SerWrapper, SerRow, Column1, Column2, Text, Content, TopLine, Heading, Subtitle, ImgWrap } from './CareerElements';
import img1 from '../../images/service.png';
import Aos from "aos";
import 'aos/dist/aos.css';

const Career = ({id}) => {
  useEffect(() => {
    Aos.init({ duration: 3000});
  }, []);

  return (
    <SerContent id={id}>
      <SerWrapper>
          <h1 data-aos='flip-left'>JOIN US</h1>
          <p data-aos='flip-left'>There is no better place to learn about cryptocurrencies or blockchain other than working at a blockchain company. Yesbit is made up of people who are open minded and forward thinking. We believe blockchain and decentralization is the future of human society and we are grateful and excited to be part of this journey.</p>
          <SerRow imgStart={true}>
            <Column1 data-aos='fade-down'>
              <Text>
                <TopLine>Yesbit OTC</TopLine>
                <Heading>Fiat-Crypto OTC trading platform</Heading>
                <Subtitle>An Over The Counter (OTC) platform which allows Fiat-currency to be used to trade Cryptocurrencies. The encrypted transaction and the professional customer service are provided to protect every users funds.</Subtitle>
              </Text>
            </Column1>
            <Column2 data-aos='fade-down'>
              <ImgWrap>
                <img src={img1} alt=''/>
              </ImgWrap>
            </Column2>
          </SerRow>
          <Content data-aos='fade-down'>If you have the same mindset, please don’t hesitate to contact us!</Content>
      </SerWrapper>
    </SerContent>
  )
}

export default Career
