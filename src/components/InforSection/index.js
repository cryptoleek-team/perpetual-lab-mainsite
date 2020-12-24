import React from 'react';
import {
  InfoContainer,
  TextWrapper,
  TopLine,
  Heading,
  Box,
  Title,
  Description,
  BoxContent
} from './InforElements';
import logo1 from '../../images/crypto.png';
import logo2 from '../../images/bitcoin.png';
import logo3 from '../../images/defi.png';
import logo4 from '../../images/invest.png';

const InforSection = ({ id, t }) => {

  return (
    <InfoContainer id={id}>
      <TextWrapper>
        <Heading>{t("introduction")}</Heading>
        <TopLine>{t("topline")}</TopLine>
        <BoxContent data-aos="fade-down">
          <Box>
            <img src={logo1} alt="logo" />
            <Title>{t("service1")}</Title>
            <Description>{t("service1Desc")}</Description>
          </Box>
          <Box>
            <img src={logo2} alt="logo" />
            <Title>{t("service2")}</Title>
            <Description>{t("service2Desc")}</Description>
          </Box>
          <Box>
            <img src={logo3} alt="logo" />
            <Title>{t("service3")}</Title>
            <Description>{t("service3Desc")}</Description>
          </Box>
          <Box>
            <img src={logo4} alt="logo" />
            <Title>{t("service4")}</Title>
            <Description>{t("service4Desc")}</Description>
          </Box>
        </BoxContent>
      </TextWrapper>
    </InfoContainer>
  )
}

export default InforSection;
