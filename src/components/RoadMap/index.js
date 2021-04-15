import React from 'react';
import { RoadContent, Road, Title, SubTitle, ItemContainer, Item, Text, Circle, Container, Timeline } from './RoadMapElements';

const RoadMap = ({id, t, ln}) => {

  return (
    <RoadContent id={id}>
      <Road>{t("roadMap")}</Road>
      <Container lan={ln==='Chinese'}>
        <Circle/>
        <Timeline length={true}>
          <ItemContainer className='position'>
            <Item data-aos="fade-left">
              <Title>{t("roadMapTitle1")}</Title>
              <SubTitle position={true}>{t("roadMapSubTitle1")}</SubTitle>
              <Text>
              {t("roadMapSubDesc1")}
              </Text>
            </Item>
          </ItemContainer>
        </Timeline>
      </Container>
      <Container lan={ln==='Chinese'}>
        <Circle />
        <Timeline length={true}>
          <ItemContainer>
            <Item className='left' data-aos="fade-right">
              <Title>{t("roadMapTitle2")}</Title>
              <SubTitle position={false}>{t("roadMapSubTitle2")}</SubTitle>
              <Text className='alignRight'>
              {t("roadMapSubDesc2")}
              </Text>
            </Item>
          </ItemContainer>
        </Timeline>
      </Container>
     <Container lan={ln==='Chinese'}>
        <Circle/>
        <Timeline length={true}>
          <ItemContainer className='position'>
            <Item data-aos="fade-left">
              <Title>{t("roadMapTitle3")}</Title>
              <SubTitle position={true}>{t("roadMapSubTitle3")}</SubTitle>
              <Text>
              {t("roadMapSubDesc3")}
              </Text>
            </Item>
          </ItemContainer>
        </Timeline>
      </Container>
      <Container lan={ln==='Chinese'}>
        <Circle />
        <Timeline length={true}>
          <ItemContainer>
            <Item className='left' data-aos="fade-right">
              <Title>{t("roadMapTitle4")}</Title>
              <SubTitle position={false}>{t("roadMapSubTitle4")}</SubTitle>
              <Text className='alignRight'>
              {t("roadMapSubDesc4")}
              </Text>
            </Item>
          </ItemContainer>
        </Timeline>
      </Container>
      <Container lan={ln==='Chinese'}>
        <Circle />
        <Timeline length={true}>
          <ItemContainer className='position'>
            <Item data-aos="fade-left">
              <Title>{t("roadMapTitle5")}</Title>
              <SubTitle position={true}>{t("roadMapSubTitle5")}</SubTitle>
              <Text>
              {t("roadMapSubDesc5")}
              </Text>
            </Item>
          </ItemContainer>
        </Timeline>
      </Container>
      <Container lan={ln==='Chinese'}>
        <Circle />
        <Timeline length={false}>
          <ItemContainer>
            <Item className='left' data-aos="fade-right">
              <Title>{t("roadMapTitle6")}</Title>
              <SubTitle position={false}>{t("roadMapSubTitle6")}</SubTitle>
              <Text className='alignRight'>
               {t("roadMapSubDesc6")}
              </Text>
            </Item>
          </ItemContainer>
        </Timeline>
      </Container>
    </RoadContent>
  )
}

export default RoadMap;



