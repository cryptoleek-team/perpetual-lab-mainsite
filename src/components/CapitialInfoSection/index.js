import React from 'react';
import { 
    InfoContainer,
    TextWrapper,
    Heading,
    Description,
    InfoCard,
    InfoBox
} from "./CapitalInfoElements"

const CapitalInfoSection = ({t})=>{
    return(
        <InfoContainer>
            <TextWrapper>
                <div>
                    <Heading>{t('capitalInfoTitle')}</Heading>
                    <Description data-aos="fade-down">{t('capitalInfoDesc1')}</Description>
                    <Description data-aos="fade-down">{t('capitalInfoDesc2')}</Description>
                </div>

                <InfoBox data-aos="fade-down">
                    <InfoCard>
                        <Description style={{fontWeight:'bold'}}>{t('capitalInfoSubTitle1')}</Description>
                        <Description style={{marginTop:'5px'}}>{t('capitalInfoDesc3')}</Description>
                    </InfoCard>

                    <InfoCard>
                    <Description style={{fontWeight:'bold'}}>{t('capitalInfoSubTitle2')}</Description>
                        <Description style={{marginTop:'5px'}}>{t('capitalInfoDesc4')}</Description>
                    </InfoCard>
                </InfoBox>

                
            </TextWrapper>
        </InfoContainer>
    )   
}

export default CapitalInfoSection