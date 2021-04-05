import React from 'react';
import {
    ApproachWrapper,
    ApproachHeading,
    ApproachContainer,
    ApproachDescription,
    ApproachBox,
    ApproachCol,
    Card,
    CardImgContainer,
    CardImg,
    CardDesc1,
    CardTitle1,
    CardDesc2,
    CardTitle2,
    ChallengeHeading
} from './CapitalApproachElements'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import challenge1 from '../../images/challenge1.png'
import challenge2 from '../../images/challenge2.png'
import challenge3 from '../../images/challenge3.png'
import challenge4 from '../../images/challenge4.png'
import challenge5 from '../../images/challenge5.png'
import challenge6 from '../../images/challenge6.png'
import approach1 from '../../images/approach1.png'
import approach2 from '../../images/approach2.png'
import approach3 from '../../images/approach3.png'
import approach4 from '../../images/approach4.png'
import approach5 from '../../images/approach5.png'
import approach6 from '../../images/approach6.png'

const CapitalApproachSection = ({t})=>{
    return (
        <ApproachContainer>
            <ApproachWrapper>
                <div>
                    <ApproachHeading>{t("capitalApproachTitle")}</ApproachHeading>
                    <ApproachDescription>{t('capitalApproachDesc1')}</ApproachDescription>
                    <ApproachDescription>{t('capitalApproachDesc2')}</ApproachDescription>
                </div>
                <ChallengeHeading>{t("capitalChallengeTitle")}</ChallengeHeading>
                <div>
                    <ApproachBox>
                        <ApproachCol>
                            <Card>
                                <div style={{width:'80%'}}>
                                    <CardTitle1>{t('capitalChallengeSubTitle1')}</CardTitle1>
                                    <CardDesc1>{t('capitalChallengeDesc1')}</CardDesc1>
                                </div>

                                <CardImgContainer>
                                    <CardImg src={approach1} alt='approach 1'/>
                                </CardImgContainer>        
                            </Card>

                            <Card>
                                <div style={{width:'80%'}}>
                                    <CardTitle1>{t('capitalChallengeSubTitle2')}</CardTitle1>
                                    <CardDesc1>{t('capitalChallengeDesc2')}</CardDesc1>
                                </div>
                                <CardImgContainer>
                                    <CardImg src={approach2} alt='approach 2'/>
                                </CardImgContainer>        
                            </Card>

                            <Card>
                                <div style={{width:'80%'}}>
                                    <CardTitle1>{t('capitalChallengeSubTitle3')}</CardTitle1>
                                    <CardDesc1>{t('capitalChallengeDesc3')}</CardDesc1>
                                </div>
                                <CardImgContainer>
                                    <CardImg src={approach3} alt='approach 3'/>
                                </CardImgContainer>        
                            </Card>
                        </ApproachCol>
                        <ApproachCol>

                        <Carousel autoPlay={true} infiniteLoop showThumbs={false} showStatus={false}>
                        <div>
                            <img src={challenge1} alt="challenge1"/>
                        </div>
                        <div>
                            <img src={challenge2} alt="challenge2"/>
                        </div>
                        <div>
                            <img src={challenge3} alt="challenge3"/>
                        </div>
                        <div>
                            <img src={challenge4} alt="challenge4"/>
                        </div>
                        <div>
                            <img src={challenge5} alt="challeng5"/>
                        </div>
                        <div>
                            <img src={challenge6} alt="challenge6"/>
                        </div>
                    </Carousel>
                        </ApproachCol>
                        <ApproachCol>
                            <Card>
                                <CardImgContainer>
                                    <CardImg src={approach4} alt='approach 4'/>
                                </CardImgContainer>  

                                <div style={{width:'80%'}}>
                                    <CardTitle2>{t('capitalChallengeSubTitle4')}</CardTitle2>
                                    <CardDesc2>{t('capitalChallengeDesc4')}</CardDesc2>
                                </div>      
                            </Card>

                            <Card>
                                <CardImgContainer>
                                    <CardImg src={approach5} alt='approach 5'/>
                                </CardImgContainer>

                                <div style={{width:'80%'}}>
                                    <CardTitle2>{t('capitalChallengeSubTitle5')}</CardTitle2>
                                    <CardDesc2>{t('capitalChallengeDesc5')}</CardDesc2>
                                </div>
                                    
                            </Card>

                            <Card>

                                <CardImgContainer>
                                    <CardImg src={approach6} alt='approach 6'/>
                                </CardImgContainer>  

                                <div style={{width:'80%'}}>
                                    <CardTitle2>{t('capitalChallengeSubTitle6')}</CardTitle2>
                                    <CardDesc2>{t('capitalChallengeDesc6')}</CardDesc2>
                                </div>
                                      
                            </Card>
                        </ApproachCol>
                    </ApproachBox>
                </div>
            </ApproachWrapper>
        </ApproachContainer>

    )
}

export default CapitalApproachSection

