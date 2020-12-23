import React from 'react';
import { RoadContent, Road, Title, SubTitle, ItemContainer, Item, Text, Circle, Timeline } from './RoadMapElements';

const RoadMap = ({id}) => {

  return (
    <RoadContent id={id}>
      <Road>RoadMap</Road>
      <Circle/>
      <Timeline >
        <ItemContainer className='position' data-aos="fade-left">
          <Item>
            <Title>Phase 1 2019.Q3-2020.Q4</Title>
            <SubTitle>Gravity:</SubTitle>
            <Text>Ultra-light Verification Protocol
                  Map-PoS Consensus
                  Map-VM and SMART System
            </Text>
          </Item>
        </ItemContainer>
      </Timeline>
      <Circle />
      <Timeline>
        <ItemContainer data-aos="fade-right">
          <Item className='left'>
            <Title>Phase 1 2019.Q3-2020.Q4</Title>
            <SubTitle>Gravity:</SubTitle>
            <Text className='alignRight'>Ultra-light Verification Protocol
                  Map-PoS Consensus
                  Map-VM and SMART System
            </Text>
          </Item>
        </ItemContainer>
      </Timeline>
      <Circle />
      <Timeline >
        <ItemContainer className='position' data-aos="fade-left">
          <Item>
            <Title>Phase 1 2019.Q3-2020.Q4</Title>
            <SubTitle>Gravity:</SubTitle>
            <Text>Ultra-light Verification Protocol
                  Map-PoS Consensus
                  Map-VM and SMART System
            </Text>
          </Item>
        </ItemContainer>
      </Timeline>
      <Circle />
      <Timeline>
        <ItemContainer data-aos="fade-right">
          <Item className='left'>
            <Title>Phase 1 2019.Q3-2020.Q4</Title>
            <SubTitle>Gravity:</SubTitle>
            <Text className='alignRight'>Ultra-light Verification Protocol
                  Map-PoS Consensus
                  Map-VM and SMART System
            </Text>
          </Item>
        </ItemContainer>
      </Timeline>
    </RoadContent>
  )
}

export default RoadMap;



