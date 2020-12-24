import React from 'react';
import { RoadContent, Road, Title, SubTitle, ItemContainer, Item, Text, Circle, Timeline } from './RoadMapElements';

const RoadMap = ({id, t}) => {

  return (
    <RoadContent id={id}>
      <Road>{t("roadMap")}</Road>
      <Circle/>
      <Timeline >
        <ItemContainer className='position' data-aos="fade-left">
          <Item>
            <Title>{t("roadMapTitle1")}</Title>
            <SubTitle>{t("roadMapSubTitle1")}</SubTitle>
            <Text>
            {t("roadMapSubDesc1")}
            </Text>
          </Item>
        </ItemContainer>
      </Timeline>
      <Circle />
      <Timeline>
        <ItemContainer data-aos="fade-right">
          <Item className='left'>
            <Title>{t("roadMapTitle2")}</Title>
            <SubTitle>{t("roadMapSubTitle2")}</SubTitle>
            <Text className='alignRight'>
            {t("roadMapSubDesc2")}
            </Text>
          </Item>
        </ItemContainer>
      </Timeline>
      <Circle />
      <Timeline >
        <ItemContainer className='position' data-aos="fade-left">
          <Item>
            <Title>{t("roadMapTitle3")}</Title>
            <SubTitle>{t("roadMapSubTitle3")}:</SubTitle>
            <Text>
            {t("roadMapSubDesc3")}
            </Text>
          </Item>
        </ItemContainer>
      </Timeline>
      <Circle />
      <Timeline>
        <ItemContainer data-aos="fade-right">
          <Item className='left'>
            <Title>{t("roadMapTitle4")}</Title>
            <SubTitle>{t("roadMapSubTitle4")}</SubTitle>
            <Text className='alignRight'>
            {t("roadMapSubDesc4")}
            </Text>
          </Item>
        </ItemContainer>
      </Timeline>
    </RoadContent>
  )
}

export default RoadMap;



