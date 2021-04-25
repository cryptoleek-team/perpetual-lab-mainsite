import React from 'react';
import {
    ApproachWrapper,
    ApproachHeading,
    ApproachContainer,
    ApproachDescription,
    ChallengeHeading,
    ApproachBox,
    MacImg,
    ImgText,
    MacImgContainer

} from './CapitalApproachElements'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CustomCarousel from '../CustomCarousel'
import mac from '../../images/mac.png'

const CapitalApproachSection = ({t})=>{
    return (
        <ApproachContainer>
            <ApproachWrapper>
                <div>
                    <ApproachHeading>{t("capitalApproachTitle")}</ApproachHeading>
                    <ApproachDescription data-aos="fade-down">{t('capitalApproachDesc1')}</ApproachDescription>
                </div>
                <ChallengeHeading>{t("capitalChallengeTitle")}</ChallengeHeading>
                
                <div>
                    <ApproachBox data-aos="fade-in">
                        <MacImgContainer>
                            <MacImg src={mac} alt="mac"/>
                            <ImgText>{t("capitalChallengeImgTitle")}</ImgText>
                        </MacImgContainer>
                        <CustomCarousel t={t}></CustomCarousel>
                    </ApproachBox>
                </div>
            </ApproachWrapper>
        </ApproachContainer>

    )
}

export default CapitalApproachSection

