import React from 'react';
import{
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
} from './NewsFeatureElements';
import logo from '../../images/ETM01.png';
import feature1 from '../../images/feature1.png';
import feature2 from '../../images/feature1.png';
import feature3 from '../../images/feature1.png';

const NewsFeatureSection = ({t})=>{
    return(
        <InfoContainer>
            <TextWrapper>
                <div>
                    <TitleBox>
                        <img src={logo} alt="logo"></img>
                        <Heading>{t('newsFeatureTitle')}</Heading>
                    </TitleBox>
                    
                    <CardBox data-aos="fade-down">
                        <Card>
                            <div style={{position:'absolute', top: -30, left: 30}}>
                                <CardImgContainer>
                                    <CardImg src={feature1}></CardImg>
                                </CardImgContainer>
                            </div>

                            <CardTitle>{t('newsFeatureSubtitle1')}</CardTitle>
                            <CardDesc>{t('newsFeatureDesc1')}</CardDesc>
                        </Card>
                        <Card>
                            <div style={{position:'absolute', top: -30, left: 30}}>
                                <CardImgContainer>
                                    <CardImg src={feature2}></CardImg>
                                </CardImgContainer>
                            </div>

                            <CardTitle>{t('newsFeatureSubtitle2')}</CardTitle>
                            <CardDesc>{t('newsFeatureDesc2')}</CardDesc>
                        </Card>
                        <Card>
                            <div style={{position:'absolute', top: -30, left: 30}}>
                                <CardImgContainer>
                                    <CardImg src={feature3}></CardImg>
                                </CardImgContainer>
                            </div>

                            <CardTitle>{t('newsFeatureSubtitle3')}</CardTitle>
                            <CardDesc>{t('newsFeatureDesc3')}</CardDesc>
                        </Card>
                    </CardBox>
                </div>
            </TextWrapper>
        </InfoContainer>
    )
}

export default NewsFeatureSection