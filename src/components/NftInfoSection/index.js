import React from 'react';
import { 
    InfoContainer,
    TextWrapper,
    Heading,
    Description
} from "./NftInfoElements"

const NftInfoSection = ({t})=>{
    return(
        <InfoContainer>
            <TextWrapper>
                <div>
                    <Heading>{t('nftInfoTitle')}</Heading>
                    <Description data-aos="fade-down">{t('nftInfoDesc1')}</Description>
                    <Description data-aos="fade-down">{t('nftInfoDesc2')}</Description>
                </div>
            </TextWrapper>
        </InfoContainer>
    )   
}

export default NftInfoSection