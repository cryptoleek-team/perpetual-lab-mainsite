import React, {useEffect} from 'react';
import { RoadContent, Road, Title, SubTitle, ItemContainer, Item, Text, Circle, Timeline } from './RoadMapElements';
import Aos from "aos";
import 'aos/dist/aos.css';

const RoadMap = ({id}) => {
  useEffect(() => {
    Aos.init({ duration: 1000});
  }, []);

  return (
    <RoadContent id={id}>
      <Road>RoadMap</Road>
      <Circle data-aos='fade-left'/>
      <Timeline data-aos='fade-left'>
        <ItemContainer className='position'>
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
      <Circle data-aos='fade-right'/>
      <Timeline data-aos='fade-right'>
        <ItemContainer>
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
      <Circle data-aos='fade-left'/>
      <Timeline data-aos='fade-left'>
        <ItemContainer className='position'>
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
      <Circle data-aos='fade-right'/>
      <Timeline data-aos='fade-right'>
        <ItemContainer>
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



