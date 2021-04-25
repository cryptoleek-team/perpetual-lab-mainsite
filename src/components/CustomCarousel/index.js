import React from 'react';
import approach1 from '../../images/approach1.png'
import approach2 from '../../images/approach2.png'
import approach3 from '../../images/approach3.png'
import approach4 from '../../images/approach4.png'
import approach5 from '../../images/approach5.png'
import approach6 from '../../images/approach6.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {
    Card,
    CardDesc,
    CardTitle,
    Container
} from './CustomElements'

const imageLists = [
    {
        title:"Approach 1",
        src: approach1
    },
    {
        title:"Approach 2",
        src: approach2
    },
    {
        title:"Approach 3",
        src: approach3
    },
    {
        title:"Approach 4",
        src: approach4
    },
    {
        title:"Approach 5",
        src: approach5
    },
    {
        title:"Approach 6",
        src: approach6
    },
]

const renderCustomThumbs = () => {
    const thumbList = imageLists.map((item,index)=>(
        <picture key={index}>
            <img src={item.src} alt={item.title} style={{width:'70px'}}/>
        </picture>
    ))
    return thumbList;
}

const CustomCarousel = ({t})=>{
    return(
        <Container>
            <Carousel autoPlay={true} infiniteLoop centerMode={true} showThumbs={true} showStatus={false} renderThumbs={renderCustomThumbs} showIndicators={false} centerSlidePercentage={100}>
            <Card>
                <div>
                    <CardTitle>{t('capitalChallengeSubTitle1')}</CardTitle>
                    <CardDesc>{t('capitalChallengeDesc1')}</CardDesc>
                </div>  
            </Card>
            <Card>
                <div>
                    <CardTitle>{t('capitalChallengeSubTitle2')}</CardTitle>
                    <CardDesc>{t('capitalChallengeDesc2')}</CardDesc>
                </div>  
            </Card>
            <Card>
                <div>
                    <CardTitle>{t('capitalChallengeSubTitle3')}</CardTitle>
                    <CardDesc>{t('capitalChallengeDesc3')}</CardDesc>
                </div>  
            </Card>
            <Card>
                <div>
                    <CardTitle>{t('capitalChallengeSubTitle4')}</CardTitle>
                    <CardDesc>{t('capitalChallengeDesc4')}</CardDesc>
                </div>  
            </Card>
            <Card>
                <div>
                    <CardTitle>{t('capitalChallengeSubTitle5')}</CardTitle>
                    <CardDesc>{t('capitalChallengeDesc5')}</CardDesc>
                </div>  
            </Card>
            <Card>
                <div>
                    <CardTitle>{t('capitalChallengeSubTitle6')}</CardTitle>
                    <CardDesc>{t('capitalChallengeDesc6')}</CardDesc>
                </div>  
            </Card>
        </Carousel>
        </Container>
    )

        

        
}

export default CustomCarousel



