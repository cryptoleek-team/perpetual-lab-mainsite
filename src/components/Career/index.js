import React from 'react';
import { SerContent, SerWrapper, SerWrap, SerRow, Column1, Column2, Text, Content, Heading, Subtitle, ImgWrap } from './CareerElements';
import img1 from '../../images/service.png';

const Career = ({id}) => {
  return (
    <SerContent id={id}>
      <SerWrapper>
          <h1>JOIN US</h1>
          <SerWrap >Perpetual labs is built by a team of crypto and blockchain experts in the industry including phd researchers from Melbourne University, Deakin University etc. Experienced blockchain developers who worked for Accenture, eBay, Alibaba, Google and Huawei etc. Expierenced finacial crypto analyst who used to work for wall street crypto fund. We are a team of passionate, displine and expierenced cryto experts.</SerWrap>
          <SerRow imgStart={true}>
            <Column1>
              <Text>
                <Heading>Benefit to join Yesbit</Heading>
                <Subtitle>Our employees are our most important asset and taking care of them has always been our top priority. Other than the competitive pay we offer, all of our full time permanent employees enjoy group health benefits that covers dental, vision and the prescription. In addition to that we host monthly team building events as well as employee birthday celebrations.</Subtitle>
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
