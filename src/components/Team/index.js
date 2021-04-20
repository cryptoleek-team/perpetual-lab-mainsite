import React from "react";
import {
    InfoContainer,
    TextWrapper,
    Heading,
    TopLine,
    AdvisorContainer,
    AdvisorImg,
    AdvisorDesc,
    AdvisorBox,
    AdvisorName
} from './TeamElements'

import Advisor1 from '../../images/Advisor1.jpeg'
import Advisor2 from '../../images/Advisor2.jpeg'

const Team = ({t})=>{
    return(
        <InfoContainer>
            <TextWrapper>
                <Heading>{t('AdvisorTitle')}</Heading>
                <TopLine>{t('AdvisorTopline')}</TopLine>
            </TextWrapper>

            <div data-aos="fade-down">
                <AdvisorContainer>
                    <AdvisorBox>
                        <AdvisorImg src={Advisor1} alt="advisor1"></AdvisorImg>
                        <div>
                            <AdvisorName>{t('AdvisorName1')}</AdvisorName>
                            <AdvisorDesc>{t('AdvisorDesc1')}</AdvisorDesc>
                        </div>
                    </AdvisorBox>
                </AdvisorContainer>

                <AdvisorContainer>
                    <AdvisorBox>
                        <AdvisorImg src={Advisor2} alt="advisor2"></AdvisorImg>
                        <div>
                            <AdvisorName>{t('AdvisorName2')}</AdvisorName>
                            <AdvisorDesc>{t('AdvisorDesc2')}</AdvisorDesc>
                        </div>
                    </AdvisorBox>
                </AdvisorContainer>
            </div>
            
        </InfoContainer>
    )

}

export default Team;
