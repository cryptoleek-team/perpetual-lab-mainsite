import React from 'react';
import {
  InfoContainer,
  TextWrapper,
  TopLine,
  Heading,
  InfoImg,
  Title,
  Description,
  BoxContent
} from './InforElements';
import logo1 from '../../images/exchange1.png';
import logo2 from '../../images/services.png';
import logo3 from '../../images/wallet.png';
import logo4 from '../../images/decentre.png';
import { Grid } from "@material-ui/core"

const InforSection = ({ id, t }) => {

  return (
    <InfoContainer id={id}>
      <TextWrapper>
        <Heading>{t("introduction")}</Heading>
        <TopLine>{t("topline")}</TopLine>
        <BoxContent data-aos="fade-down">
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} lg={3}>
              <InfoImg src={logo1} alt="logo" />
              <Title>{t("service1")}</Title>
              <Description>{t("service1Desc")}</Description>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <InfoImg src={logo2} alt="logo" />
              <Title>{t("service2")}</Title>
              <Description>{t("service2Desc")}</Description>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <InfoImg src={logo3} alt="logo" />
              <Title>{t("service3")}</Title>
              <Description>{t("service3Desc")}</Description>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <InfoImg src={logo4} alt="logo" />
              <Title>{t("service4")}</Title>
              <Description>{t("service4Desc")}</Description>
            </Grid>
          </Grid>
        </BoxContent>
      </TextWrapper>
    </InfoContainer>
  )
}

export default InforSection;
