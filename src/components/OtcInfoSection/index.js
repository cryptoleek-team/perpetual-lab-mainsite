import React from 'react';
import {
    InfoContainer,
    TextWrapper,
    Heading,
    TitleBox,
    CardBox,
    Card,
    CardImgContainer,
    CardImg,
    CardTitle,
    CardDesc,
} from './OtcInfoElements';
import logo from '../../images/ETM01.png';
import service1 from '../../images/otcservice1.png';
import service2 from '../../images/otcservice2.png';
import service3 from '../../images/otcservice3.png';
import service4 from '../../images/otcservice4.png';
import service5 from '../../images/otcservice5.png';
import service6 from '../../images/otcservice6.png';

const OtcInfoSection = ({ t }) => {
    return (
        <InfoContainer>
            <TextWrapper>
                <div>
                    <TitleBox>
                        <img src={logo} alt="logo"></img>
                        <Heading>{t('otcInfoTitle')}</Heading>
                    </TitleBox>

                    <CardBox data-aos="fade-in">
                        <Card>
                            <div style={{ position: 'absolute', top: -30, left: 30 }}>
                                <CardImgContainer>
                                    <CardImg src={service1}></CardImg>
                                </CardImgContainer>
                            </div>

                            <CardTitle>{t('otcInfoSubtitle1')}</CardTitle>
                            <CardDesc>{t('otcInfoDesc1')}</CardDesc>
                        </Card>
                        <Card>
                            <div style={{ position: 'absolute', top: -30, left: 30 }}>
                                <CardImgContainer>
                                    <CardImg src={service2}></CardImg>
                                </CardImgContainer>
                            </div>

                            <CardTitle>{t('otcInfoSubtitle2')}</CardTitle>
                            <CardDesc>{t('otcInfoDesc2')}</CardDesc>
                        </Card>
                        <Card>
                            <div style={{ position: 'absolute', top: -30, left: 30 }}>
                                <CardImgContainer>
                                    <CardImg src={service3}></CardImg>
                                </CardImgContainer>
                            </div>

                            <CardTitle>{t('otcInfoSubtitle3')}</CardTitle>
                            <CardDesc>{t('otcInfoDesc3')}</CardDesc>
                        </Card>
                        <Card>
                            <div style={{ position: 'absolute', top: -30, left: 30 }}>
                                <CardImgContainer>
                                    <CardImg src={service4}></CardImg>
                                </CardImgContainer>
                            </div>

                            <CardTitle>{t('otcInfoSubtitle4')}</CardTitle>
                            <CardDesc>{t('otcInfoDesc4')}</CardDesc>
                        </Card>
                        <Card>
                            <div style={{ position: 'absolute', top: -30, left: 30 }}>
                                <CardImgContainer>
                                    <CardImg src={service5}></CardImg>
                                </CardImgContainer>
                            </div>

                            <CardTitle>{t('otcInfoSubtitle5')}</CardTitle>
                            <CardDesc>{t('otcInfoDesc5')}</CardDesc>
                        </Card>
                        <Card>
                            <div style={{ position: 'absolute', top: -30, left: 30 }}>
                                <CardImgContainer>
                                    <CardImg src={service6}></CardImg>
                                </CardImgContainer>
                            </div>

                            <CardTitle>{t('otcInfoSubtitle6')}</CardTitle>
                            <CardDesc>{t('otcInfoDesc6')}</CardDesc>
                        </Card>
                    </CardBox>
                </div>
            </TextWrapper>
        </InfoContainer>
    )
}

export default OtcInfoSection