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
} from './NftServiceElements';
import service1 from '../../images/nft-service1.png';
import service2 from '../../images/nft-service2.png';
import service3 from '../../images/nft-service3.png';
import service4 from '../../images/nft-service4.png';

const NftServiceSection = ({ t }) => {
    return (
        <InfoContainer>
            <TextWrapper>
                <div>
                    <TitleBox>
                        <Heading>{t('nftServiceHeading')}</Heading>
                    </TitleBox>

                    <CardBox data-aos="fade-in">
                        <Card>
                            <div style={{ position: 'absolute', top: -30, left: 30 }}>
                                <CardImgContainer>
                                    <CardImg src={service1}></CardImg>
                                </CardImgContainer>
                            </div>

                            <CardTitle>{t('nftServiceTitle1')}</CardTitle>
                            <CardDesc>{t('nftServiceDesc1')}</CardDesc>
                        </Card>
                        <Card>
                            <div style={{ position: 'absolute', top: -30, left: 30 }}>
                                <CardImgContainer>
                                    <CardImg src={service2}></CardImg>
                                </CardImgContainer>
                            </div>

                            <CardTitle>{t('nftServiceTitle2')}</CardTitle>
                            <CardDesc>{t('nftServiceDesc2')}</CardDesc>
                        </Card>
                    </CardBox>

                    <CardBox data-aos="fade-in">
                        <Card>
                            <div style={{ position: 'absolute', top: -30, left: 30 }}>
                                <CardImgContainer>
                                    <CardImg src={service3}></CardImg>
                                </CardImgContainer>
                            </div>

                            <CardTitle>{t('nftServiceTitle3')}</CardTitle>
                            <CardDesc>{t('nftServiceDesc3')}</CardDesc>
                        </Card>
                        <Card>
                            <div style={{ position: 'absolute', top: -30, left: 30 }}>
                                <CardImgContainer>
                                    <CardImg src={service4}></CardImg>
                                </CardImgContainer>
                            </div>

                            <CardTitle>{t('nftServiceTitle4')}</CardTitle>
                            <CardDesc>{t('nftServiceDesc4')}</CardDesc>
                        </Card>
                    </CardBox>
                </div>
            </TextWrapper>
        </InfoContainer>
    )
}

export default NftServiceSection